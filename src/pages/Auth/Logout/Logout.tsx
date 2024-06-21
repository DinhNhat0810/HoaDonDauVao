import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../contexts/app.context";

export default function Logout() {
  const navigate = useNavigate();

  const { setIsAuthenticated } = useContext(AppContext);

  useEffect(() => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    navigate("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
}
