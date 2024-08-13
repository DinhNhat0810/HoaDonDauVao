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
import HoaDonMuaVao from "../pages/HoaDonMuaVao";
import HoaDonBanRa from "../pages/HoaDonBanRa";

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext);

  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTE.LOGIN} />;
};

const RejectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext);

  return !isAuthenticated ? <Outlet /> : <Navigate to={ROUTE.HDMV_TatCa} />;
};

export default function useRouteElement() {
  const routeElements = useRoutes([
    {
      path: ROUTE.HOME,
      element: <ProtectedRoute />,
      children: [
        {
          path: ROUTE.HOME,
          element: <Navigate to={ROUTE.HDMV_TatCa} replace />,
        },
        {
          path: ROUTE.HDMV,
          element: <Navigate to={ROUTE.HDMV_TatCa} replace />,
        },
        {
          path: ROUTE.HDMV_TatCa,
          element: (
            <MainLayout>
              <HoaDonMuaVao />
            </MainLayout>
          ),
        },
        {
          path: ROUTE.HDMV_Huy,
          element: (
            <MainLayout>
              <HoaDonMuaVao />
            </MainLayout>
          ),
        },

        {
          path: ROUTE.HDMV_ThayThe,
          element: (
            <MainLayout>
              <HoaDonMuaVao />
            </MainLayout>
          ),
        },

        {
          path: ROUTE.HDMV_DaDC,
          element: (
            <MainLayout>
              <HoaDonMuaVao />
            </MainLayout>
          ),
        },

        {
          path: ROUTE.HDMV_XuatBangKe,
          element: (
            <MainLayout>
              <HoaDonMuaVao />
            </MainLayout>
          ),
        },
        {
          path: ROUTE.HDBR,
          element: <Navigate to={ROUTE.HDBR_TatCa} replace />,
        },
        {
          path: ROUTE.HDBR_TatCa,
          element: (
            <MainLayout>
              <HoaDonBanRa />
            </MainLayout>
          ),
        },
        {
          path: ROUTE.HDBR_Huy,
          element: (
            <MainLayout>
              <HoaDonBanRa />
            </MainLayout>
          ),
        },

        {
          path: ROUTE.HDBR_ThayThe,
          element: (
            <MainLayout>
              <HoaDonBanRa />
            </MainLayout>
          ),
        },

        {
          path: ROUTE.HDBR_DaDC,
          element: (
            <MainLayout>
              <HoaDonBanRa />
            </MainLayout>
          ),
        },

        {
          path: ROUTE.HDBR_XuatBangKe,
          element: (
            <MainLayout>
              <HoaDonBanRa />
            </MainLayout>
          ),
        },
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
