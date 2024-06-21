import { createContext, useEffect, useState } from "react";
import { isEmpty } from "lodash";

type AppContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  mst?: string;
  token?: string;
};

const user = JSON.parse(localStorage.getItem("user") || "{}");

const checkToken = !isEmpty(user?.token);

const inititalAppContext: AppContextType = {
  isAuthenticated: checkToken,
  setIsAuthenticated: () => null,
  mst: user?.mst,
  token: user?.token,
};

export const AppContext = createContext<AppContextType>(inititalAppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    inititalAppContext.isAuthenticated
  );

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        mst: user?.mst,
        token: user?.token,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
