import { ConfigProvider, Form, Input, notification, Spin } from "antd";
import CustomInput from "../../../components/CustomInput";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../contexts/app.context";
import { isEmpty } from "lodash";
import CustomLoading from "../../../components/CustomLoading";

type NotificationType = "success" | "info" | "warning" | "error";

const Login = () => {
  const [captcha, setCaptcha] = useState<any>({
    key: "",
    content: "",
  });
  const [api, contextHolder] = notification.useNotification();
  const [loadCapcha, setLoadCapcha] = useState<boolean>(false);
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AppContext);
  const [loading, setLoading] = useState<boolean>(false);

  const openNotificationWithIcon = (
    type: NotificationType,
    message: string,
    description: string
  ) => {
    api[type]({
      message: message,
      description: description,
      duration: 2,
    });
  };

  useEffect(() => {
    fetch("https://hoadondientu.gdt.gov.vn:30000/captcha")
      .then((response) => response.json())
      .then((data) => {
        const key = data.key;
        let contentCaptcha = data.content;
        contentCaptcha = contentCaptcha.replace(/="/g, '="');

        if (contentCaptcha.trim().startsWith("<svg")) {
          const imgCapcha: any = document.querySelector(".captcha_img");
          imgCapcha.innerHTML = contentCaptcha;
          setCaptcha({
            content: contentCaptcha,
            key,
          });
        } else {
          console.warn("Unsafe HTML content blocked.");
        }
      })
      .catch((error) => console.error(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadCapcha]);

  const handleLogin = async (values: any) => {
    setLoadCapcha(!loadCapcha);
    setLoading(true);
    try {
      const url =
        "https://hoadondientu.gdt.gov.vn:30000/security-taxpayer/authenticate";

      const res = await axios.post(url, {
        // username: values.username,
        // password: values.password,
        username: "0103930279-999",
        password: "xsw2XSW@",
        cvalue: values.cvalue,
        ckey: captcha.key,
      });

      if (!isEmpty(res.data.token)) {
        setTimeout(() => {
          setLoading(false);
          localStorage.setItem(
            "user",
            JSON.stringify({
              token: res.data.token,
              mst: values.username,
              expiredAt: new Date().getTime() + 3600000,
            })
          );
          setIsAuthenticated(true);
          navigate("/");
          window.location.reload();
        }, 1000);
      } else {
        openNotificationWithIcon("error", "Lỗi", "Đăng nhập thất bại");
        setLoading(false);
      }
    } catch (error: any) {
      console.error(error?.response?.data?.message);
      openNotificationWithIcon("error", "Lỗi", error?.response?.data?.message);
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(60deg, rgb(112 125 243) 0%, rgb(173 82 209) 100%)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      {loading && <CustomLoading />}
      {contextHolder}
      <div
        style={{
          width: "400px",
          backgroundColor: "white",
          borderRadius: "10px",
          overflow: "hidden",
          padding: "10px 20px 20px",
          margin: "80px 0 20px 0",
        }}
      >
        <div>
          <img
            src="/assets/logo.jpg"
            alt="logo"
            style={{
              width: "80%",
              display: "block",
              margin: "auto",
            }}
          />
        </div>

        <p
          style={{
            fontWeight: "bold",
            fontSize: "24px",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Đăng nhập
        </p>

        <p
          style={{
            textAlign: "center",
            marginTop: "10px",
            fontSize: "14px",
            fontWeight: "400",
            width: "80%",
            margin: "auto",
            fontStyle: "italic",
          }}
        >
          Sử dụng tài khoản đăng nhập hệ thống Hóa đơn điện tử của Tổng Cục Thuế
        </p>

        <Form
          style={{
            marginTop: "10px",
          }}
          onFinish={(values) => {
            handleLogin(values);
          }}
        >
          <CustomInput
            label="Mã số thuế"
            name="username"
            placeholder="Mã số thuế"
            size="large"
            configBoderRadius={4}
            rules={[{ required: true, message: "Vui lòng nhập mã số thuế" }]}
            formItemStyle={{
              marginBottom: "24px",
            }}
          />

          <CustomInput
            label="Mật khẩu"
            name="password"
            placeholder="Mật khẩu"
            size="large"
            configBoderRadius={4}
            type="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
            formItemStyle={{
              marginBottom: "24px",
              marginTop: "4px",
            }}
          />

          <div
            className="captcha_img"
            style={{
              marginBottom: "10px",
            }}
          ></div>

          <CustomInput
            label="Captcha"
            name="cvalue"
            placeholder="Nhập captcha"
            size="large"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập captcha",
              },
            ]}
            formItemStyle={{
              marginBottom: "24px",
              marginTop: "4px",
            }}
            configBoderRadius="4"
          />

          <Form.Item>
            <button
              style={{
                width: "100%",
                backgroundImage:
                  "linear-gradient(160deg, rgb(112 125 243) 0%, rgb(173 82 209) 100%)",
                color: "white",
                padding: "10px",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Đăng nhập
            </button>
          </Form.Item>
        </Form>

        <p
          style={{
            fontStyle: "italic",
            textAlign: "center",
            fontSize: "12px",
            marginBottom: "4px",
          }}
        >
          Bản quyền thuộc: Công Ty Cổ phần Công nghệ thẻ Nacencomm
        </p>
        <p
          style={{
            fontStyle: "italic",
            textAlign: "center",
            fontSize: "12px",
            width: "90%",
            margin: "auto",
            marginBottom: "4px",
          }}
        >
          Địa chỉ ĐKKD: Tầng 5, số 2 Chùa Bộc, Phường Trung Tự, Quận Đống Đa,
          Thành phố Hà Nội, Việt Nam.
        </p>

        <p
          style={{
            fontStyle: "italic",
            textAlign: "center",
            fontSize: "12px",
            width: "90%",
            margin: "auto",
          }}
        >
          Trụ sở chính: Tầng 3, Tòa nhà Bohemia, Số 25 Nguyễn Huy Tưởng, Phường
          Thanh Xuân Trung, Quận Thanh Xuân, Thành phố Hà Nội, Việt Nam
        </p>
      </div>
    </div>
  );
};

export default Login;
