/* eslint-disable react-refresh/only-export-components */
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { useContext } from "react";
import NotFound from "../pages/NotFound";
import { AppContext } from "../contexts/app.context";
import MainLayout from "../layouts/MainLayout";
import HoaDon from "../pages/HoaDon";
import Login from "../pages/Auth/Login";
import AuthLayout from "../layouts/AuthLayout";

import Logout from "../pages/Auth/Logout";
import { ROUTE } from "../libs/constants";

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext);

  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTE.LOGIN} />;
};

const RejectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext);

  return !isAuthenticated ? <Outlet /> : <Navigate to={ROUTE.HOME} />;
};

export default function useRouteElement() {
  const routeElements = useRoutes([
    {
      path: ROUTE.HOME,
      element: <ProtectedRoute />,
      children: [
        {
          path: ROUTE.HOME,
          element: (
            <MainLayout>
              <HoaDon />
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
