import { Button, ConfigProvider, Form, Input, notification, Spin } from "antd";
import CustomInput from "../../../components/CustomInput";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../../contexts/app.context";
import { isEmpty } from "lodash";
import CustomLoading from "../../../components/CustomLoading";
import { IMAGES } from "../../../libs/constants";
import ResetIcon from "../../../components/Icon/reset";
import { DangnhapTKNCM } from "../../../services/auth";

type NotificationType = "success" | "info" | "warning" | "error";

const Login = () => {
  const [api, contextHolder] = notification.useNotification();
  const [loadCapcha, setLoadCapcha] = useState<boolean>(false);
  const { setIsAuthenticated } = useContext(AppContext);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

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

  const handleLogin = async (values: any) => {
    setLoadCapcha(!loadCapcha);
    setLoading(true);
    try {
      const res = await DangnhapTKNCM({
        // username: "0103930279-999",
        username: values.username,
        passwd: values.password,
      });

      if (!isEmpty(res)) {
        setLoading(false);
        const now = new Date();
        const endOfDay = new Date(now);
        endOfDay.setHours(23, 59, 59, 999); // Set to end of the day
        const expiresIn = endOfDay.getTime() - now.getTime(); // Time until end of the day in milliseconds

        localStorage.setItem(
          "user",
          JSON.stringify({
            mst: values.username,
            expiredAt: now.getTime() + expiresIn, // Set expiredAt to end of the day
            business_name: res,
          })
        );
        setIsAuthenticated(true);

        navigate("/");
        window.location.reload();
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
    <div className="flex h-full flex-1">
      {loading && <CustomLoading />}
      {contextHolder}
      <div className="flex-[6] flex flex-col items-center bg-[#F9FAFB]">
        <div className="m-auto mt-20 flex flex-col items-center">
          <p className="text-center text-xs mb-2 font-semibold">
            Phát hành hóa đơn ngay hôm nay với CA2 Einvoice{" "}
          </p>

          <Link
            to="https://ca2einv.nacencomm.vn"
            className="text-primary-color underline"
          >
            <img
              src={IMAGES.auth.ca2Invoice}
              alt="logo"
              className="shadow-2xl"
            />
          </Link>
          <h2 className="text-center text-[30px] mt-4 font-semibold">
            Phần mềm quản lý hóa đơn
          </h2>
          <p className="text-center">
            Quản lý tập trung hóa đơn đầu vào và đầu ra của doanh nghiệp
          </p>
          <p className="text-center">
            Tự động tra cứu, phân tích và kiểm tra thông tin hóa đơn
          </p>
          <div className="flex gap-6 mt-2">
            <div className="bg-[#F2F4F7] p-4">
              <img src={IMAGES.auth.qrCode} className="mb-2" />
              <img src={IMAGES.auth.chplay} />
            </div>
            <div className="bg-[#F2F4F7] p-4">
              <img src={IMAGES.auth.qrCode} className="mb-2" />
              <img src={IMAGES.auth.appstore} />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <img
            src={IMAGES.auth.signAuth}
            alt="footer"
            width={378}
            className="w-[378px] h-[329px] z-0 -translate-x-14"
          />
        </div>
      </div>
      <div className="flex-[5] bg-white rounded-tl-[48px] flex">
        <div className="m-auto md:w-[440px]">
          <h2 className="text-4xl font-semibold text-center mb-8">Đăng nhập</h2>

          <Form
            style={{
              marginTop: "10px",
            }}
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

            <div className="text-center mt-8">
              <button
                type="submit"
                className="w-11/12 bg-[#E6E6E8] h-12 font-bold text-[#9B9B9E] hover:bg-primary-color hover:text-white text-lg rounded-md"
              >
                Tiếp tục
              </button>
              <p className="py-4">
                Quý khách có thể{" "}
                <span className="underline font-semibold text-primary-color cursor-pointer">
                  Đăng ký
                </span>{" "}
                tại đây
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
