import { createContext, useEffect, useState } from "react";
import { isEmpty } from "lodash";

type AppContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  mst?: string;
  expiredAt?: number;
  setUserData?: React.Dispatch<React.SetStateAction<any>>;
  taikhoanthue?: any;
  setTaikhoanthue?: React.Dispatch<React.SetStateAction<any>>;
  business_name?: string;
};

const user = JSON.parse(localStorage.getItem("user") || "{}");
const taikhoanthueLocal = JSON.parse(
  localStorage.getItem("taikhoanthue") || "{}"
);

const checkIsLogin = !isEmpty(user);

const inititalAppContext: AppContextType = {
  isAuthenticated: checkIsLogin,
  // isAuthenticated: true,
  setIsAuthenticated: () => null,
  mst: user?.mst,
  expiredAt: user?.expiredAt,
  setUserData: () => null,
  taikhoanthue: taikhoanthueLocal,
  setTaikhoanthue: () => null,
  business_name: user?.business_name,
};

export const AppContext = createContext<AppContextType>(inititalAppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    inititalAppContext.isAuthenticated
  );
  const [taikhoanthue, setTaikhoanthue] = useState<any>(taikhoanthueLocal);

  useEffect(() => {
    if (user?.expiredAt < Date.now()) {
      localStorage.removeItem("user");
      localStorage.removeItem("taikhoanthue");
      setTaikhoanthue({});
      setIsAuthenticated(false);
      return;
    }

    const interval = setInterval(() => {
      if (user?.expiredAt < Date.now()) {
        localStorage.removeItem("user");
        localStorage.removeItem("taikhoanthue");
        setTaikhoanthue({});
        setIsAuthenticated(false);
      }
    }, 10000);

    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.expiredAt]);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (isEmpty(event.key)) {
        setTaikhoanthue({});
        setIsAuthenticated(false);
        return;
      }

      if (event.key === "taikhoanthue") {
        if (isEmpty(JSON.parse(event.newValue || "{}"))) {
          setTaikhoanthue({});
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [taikhoanthue]);

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        mst: user?.mst,
        expiredAt: user?.expiredAt,
        setTaikhoanthue,
        taikhoanthue: taikhoanthue,
        business_name: user?.business_name,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
