/* eslint-disable react-refresh/only-export-components */
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { useContext } from "react";
import NotFound from "../pages/NotFound";
import { AppContext } from "../contexts/app.context";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Auth/Login";
import AuthLayout from "../layouts/AuthLayout";

import Logout from "../pages/Auth/Logout";
import { ROUTE } from "../libs/constants";
import HoaDon from "../pages/TongQuan/HoaDon";
import HoaDonDauVao from "../pages/HoaDon/HoaDonDauVao";

import KXBKMV from "../pages/BaoCao/KXBKMV";
import KXBKBR from "../pages/BaoCao/KXBKBR";
import DanhMucNCC from "../pages/DanhMuc/DanhMucNCC";
import ThongTinDoanhNghiep from "../pages/HeThong/ThongTinDoanhNghiep";
import QuanLyTaiNguyen from "../pages/HeThong/QuanLyTaiNguyen/QuanLyTaiNguyen";
import NhatKyTruyCap from "../pages/HeThong/NhatKyTruyCap";
import HoaDonDauRa from "../pages/HoaDon/HoaDonDauRa";
import HoaDonDauVaoMTT from "../pages/HoaDon/HoaDonDauVaoMTT";
import HoaDonDauRaMTT from "../pages/HoaDon/HoaDonDauRaMTT";
import DanhMucKhachHang from "../pages/DanhMuc/DanhMucKhachHang";
import BCHDRR from "../pages/BaoCao/BCHDRR";

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext);

  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTE.LOGIN} />;
};

const RejectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext);

  return !isAuthenticated ? <Outlet /> : <Navigate to={ROUTE.TQ} />;
};

export default function useRouteElement() {
  const routeElements = useRoutes([
    {
      path: ROUTE.HOME,
      element: <ProtectedRoute />,
      children: [
        {
          path: ROUTE.HOME,
          element: <Navigate to={ROUTE.TQ_HD} replace />,
        },
        {
          path: ROUTE.TQ,
          element: <Navigate to={ROUTE.TQ_HD} replace />,
        },

        {
          path: ROUTE.TQ_HD,
          element: (
            <MainLayout>
              <HoaDon />
            </MainLayout>
          ),
        },

        {
          path: ROUTE.HD,
          element: <Navigate to={ROUTE.HDDV} replace />,
        },

        {
          path: ROUTE.HDDV,
          element: (
            <MainLayout>
              <HoaDonDauVao />
            </MainLayout>
          ),
        },
        {
          path: ROUTE.HDDR,
          element: (
            <MainLayout>
              <HoaDonDauRa />
            </MainLayout>
          ),
        },

        {
          path: ROUTE.HDDV_MTT,
          element: (
            <MainLayout>
              <HoaDonDauVaoMTT />
            </MainLayout>
          ),
        },
        {
          path: ROUTE.HDDR_MTT,
          element: (
            <MainLayout>
              <HoaDonDauRaMTT />
            </MainLayout>
          ),
        },

        {
          path: ROUTE.BAOCAO,
          element: <Navigate to={ROUTE.DANHMUC_NCC} replace />,
        },

        {
          path: ROUTE.BAOCAO_KXBKMV,
          element: (
            <MainLayout>
              <KXBKMV />
            </MainLayout>
          ),
        },
        {
          path: ROUTE.BAOCAO_KXBKBR,
          element: (
            <MainLayout>
              <KXBKBR />
            </MainLayout>
          ),
        },

        {
          path: ROUTE.BAOCAO_THKT,
          element: <MainLayout></MainLayout>,
        },
        {
          path: ROUTE.BAOCAO_HDRR,
          element: (
            <MainLayout>
              <BCHDRR />
            </MainLayout>
          ),
        },

        {
          path: ROUTE.DANHMUC,
          element: <Navigate to={ROUTE.TQ_HD} replace />,
        },

        {
          path: ROUTE.DANHMUC_NCC,
          element: (
            <MainLayout>
              <DanhMucNCC />
            </MainLayout>
          ),
        },
        {
          path: ROUTE.DANHMUC_KH,
          element: (
            <MainLayout>
              <DanhMucKhachHang />
            </MainLayout>
          ),
        },

        {
          path: ROUTE.HETHONG,
          element: <Navigate to={ROUTE.HETHONG_TTDN} replace />,
        },
        {
          path: ROUTE.HETHONG_TTDN,
          element: (
            <MainLayout>
              <ThongTinDoanhNghiep />
            </MainLayout>
          ),
        },
        {
          path: ROUTE.HETHONG_QLTN,
          element: (
            <MainLayout>
              <QuanLyTaiNguyen />
            </MainLayout>
          ),
        },

        // {
        //   path: ROUTE.HETHONG_KNCQT,
        //   element: <MainLayout></MainLayout>,
        // },
        // {
        //   path: ROUTE.HETHONG_NKTC,
        //   element: (
        //     <MainLayout>
        //       <NhatKyTruyCap />
        //     </MainLayout>
        //   ),
        // },
      ],
    },

    {
      path: ROUTE.HOME,
      element: <RejectedRoute />,
      children: [
        {
          path: ROUTE.LOGIN,
          element: (
            <AuthLayout>
              <Login />
            </AuthLayout>
          ),
        },
      ],
    },

    {
      path: ROUTE.LOGOUT,
      element: <Logout />,
    },
    {
      path: ROUTE.NOT_FOUND,
      element: <NotFound />,
    },
  ]);

  return routeElements;
}
