import { Outlet, Navigate } from "react-router-dom";
import { useLogin } from "../../contexts/LoginContext";
const ProtectedRoutes = () => {
  const userLogin = useLogin();
  if (!userLogin) {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
};

export default ProtectedRoutes;
