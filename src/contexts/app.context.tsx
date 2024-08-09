import { createContext, useEffect, useState } from "react";
import { isEmpty } from "lodash";

type AppContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  mst?: string;
  token?: string;
  expiredAt?: number;
};

const user = JSON.parse(localStorage.getItem("user") || "{}");

const checkToken = !isEmpty(user?.token);

const inititalAppContext: AppContextType = {
  isAuthenticated: checkToken,
  setIsAuthenticated: () => null,
  mst: user?.mst,
  token: user?.token,
  expiredAt: user?.expiredAt,
};

export const AppContext = createContext<AppContextType>(inititalAppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    inititalAppContext.isAuthenticated
  );

  useEffect(() => {
    if (user?.expiredAt < Date.now()) {
      localStorage.removeItem("user");
      setIsAuthenticated(false);
      return;
    }
    const interval = setInterval(() => {
      if (user?.expiredAt < Date.now()) {
        localStorage.removeItem("user");
        setIsAuthenticated(false);
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
