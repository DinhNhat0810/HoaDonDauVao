import { Form, Modal } from "antd";
import CustomInput from "../CustomInput";
import CustomBtn from "../CustomBtn";
import ResetIcon from "../Icon/reset";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { isEmpty } from "lodash";
import { NotificationContext } from "../../contexts/notification.context";
import CustomLoading from "../CustomLoading";
import { AppContext } from "../../contexts/app.context";

export default function LoginModal({
  open,
  handleCancel,
  handleFinish,
}: {
  open: boolean;
  handleCancel: () => void;
  handleFinish: (values: any, callback: () => void) => void;
}) {
  const [form] = Form.useForm();
  const [loadCapcha, setLoadCapcha] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [captcha, setCaptcha] = useState<any>({
    key: "",
    content: "",
  });
  const { handleOpenNotification } = useContext(NotificationContext);
  const { setTaikhoanthue } = useContext(AppContext);

  useEffect(() => {
    fetch("https://hoadondientu.gdt.gov.vn:30000/captcha")
      .then((response) => response.json())
      .then((data) => {
        const key = data.key;
        let contentCaptcha = data.content;
        contentCaptcha = contentCaptcha.replace(/="/g, '="');

        if (contentCaptcha.trim().startsWith("<svg")) {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(
            contentCaptcha,
            "image/svg+xml"
          );
          const svgElement = svgDoc.querySelector("svg");
          if (svgElement) {
            svgElement.setAttribute("width", "100%");
            svgElement.setAttribute("height", "80px");

            const serializer = new XMLSerializer();
            const serializedSvg = serializer.serializeToString(svgElement);
            const imgCapcha: any = document.querySelector(".captcha_img");
            imgCapcha.innerHTML = serializedSvg;

            setCaptcha({
              content: serializedSvg,
              key,
            });
          }
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
        setLoading(false);
        if (setTaikhoanthue && res && res.data) {
          setTaikhoanthue({
            token: res.data.token,
            mst: "0103930279-999",
          });
        }
        localStorage.setItem(
          "taikhoanthue",
          JSON.stringify({
            token: res.data.token,
            mst: "0103930279-999",
          })
        );

        handleCancel();
        handleOpenNotification({
          type: "success",
          message: "Thành công",
          description: "Đăng nhập bằng tài khoản thuế thành công",
        });

        // setIsAuthenticated(true);
        // window.location.reload();
        // navigate("/");
      } else {
        // openNotificationWithIcon("error", "Lỗi", "Đăng nhập thất bại");
        handleOpenNotification({
          type: "error",
          message: "Lỗi",
          description: "Đăng nhập thất bại",
        });
        setLoading(false);
      }
    } catch (error: any) {
      console.error(error?.response?.data?.message);
      handleOpenNotification({
        type: "error",
        message: "Lỗi",
        description: error?.response?.data?.message,
      });

      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    try {
      const validate = await form.validateFields();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      open={open}
      onCancel={() => {
        handleCancel();
        form.resetFields();
      }}
      centered
      footer={null}
      width={460}
    >
      {loading && <CustomLoading />}
      <h2 className="text-center text-xl my-4 font-bold">
        Đăng nhập tài khoản thuế
      </h2>

      <div className="w-full">
        <Form
          style={{}}
          onFinish={(values) => {
            handleLogin(values);
          }}
        >
          <CustomInput
            name="username"
            placeholder="Mã đơn vị"
            size="large"
            configBoderRadius={6}
            rules={[{ required: true, message: "Vui lòng nhập mã đơn vị" }]}
            formItemStyle={{
              marginBottom: "28px",
            }}
            className="py-[15px]"
            labelInside="Mã đơn vị"
          />

          <CustomInput
            name="password"
            placeholder="Mật khẩu"
            size="large"
            configBoderRadius={6}
            type="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
            formItemStyle={{
              marginBottom: "24px",
              marginTop: "4px",
            }}
            className="py-[15px]"
            labelInside="Mật khẩu"
          />
          <div className="text-right">
            <span className="text-primary-color underline cursor-pointer">
              Quên mật khẩu
            </span>
          </div>

          <div className="relative border border-[#d9d9d9] rounded-md pb-2 mt-2 mb-4">
            <div
              className="captcha_img"
              style={{
                marginBottom: "10px",
              }}
            ></div>
            <ResetIcon
              className="cursor-pointer absolute bottom-2 right-2"
              onClick={() => setLoadCapcha(!loadCapcha)}
            />
          </div>

          <CustomInput
            name="cvalue"
            placeholder="Mã captcha"
            configBoderRadius={6}
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
            className="py-[15px]"
            labelInside="Mã captcha"
          />

          <div className="text-center mt-8">
            <button
              type="submit"
              className="w-11/12 bg-[#E6E6E8] h-12 font-bold text-[#9B9B9E] hover:bg-primary-color hover:text-white text-lg rounded-md"
            >
              Tiếp tục
            </button>
            {/* <p className="py-4">
              Quý khách có thể{" "}
              <span className="underline font-semibold text-primary-color cursor-pointer">
                Đăng ký
              </span>{" "}
              tại đây
            </p> */}
          </div>
        </Form>
      </div>

      {/* <div className="flex justify-center gap-2">
        <CustomBtn
          title="Hủy bỏ"
          className="w-4/12"
          onClick={() => {
            handleCancel();
            form.resetFields();
          }}
          variant="white"
        />
        <CustomBtn title="Đồng bộ" className="w-4/12" onClick={handleSubmit} />
      </div> */}
    </Modal>
  );
}
