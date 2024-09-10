import { createContext, useEffect, useState } from "react";
import { isEmpty } from "lodash";

type AppContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  mst?: string;
  token?: string;
  expiredAt?: number;
  setUserData?: React.Dispatch<React.SetStateAction<any>>;
};

const user = JSON.parse(localStorage.getItem("user") || "{}");

const checkToken = !isEmpty(user?.token);

const inititalAppContext: AppContextType = {
  isAuthenticated: checkToken,
  setIsAuthenticated: () => null,
  mst: user?.mst,
  token: user?.token,
  expiredAt: user?.expiredAt,
  setUserData: () => null,
};

export const AppContext = createContext<AppContextType>(inititalAppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    inititalAppContext.isAuthenticated
  );
  // const [userData, setUserData] = useState<any>(user);

  useEffect(() => {
    if (user?.expiredAt < Date.now()) {
      localStorage.removeItem("user");
      setIsAuthenticated(false);
      // setUserData({});
      return;
    }

    const interval = setInterval(() => {
      if (user?.expiredAt < Date.now()) {
        localStorage.removeItem("user");
        setIsAuthenticated(false);
        // setUserData({});
      }
    }, 10000);

    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.expiredAt]);

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        mst: user?.mst,
        token: user?.token,
        expiredAt: user?.expiredAt,
        // setUserData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
