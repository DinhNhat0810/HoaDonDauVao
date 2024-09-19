import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../contexts/app.context";

export default function Logout() {
  const navigate = useNavigate();

  const { setIsAuthenticated, setTaikhoanthue } = useContext(AppContext);

  useEffect(() => {
    localStorage.removeItem("user");
    localStorage.removeItem("taikhoanthue");
    setIsAuthenticated(false);
    setTaikhoanthue && setTaikhoanthue({});
    navigate("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
}
