import { Outlet, Navigate } from "react-router-dom";
import { useServiceLogin } from "../../contexts/ServiceLoginContext";
const ServiceProtectedRoutes = () => {
  const userServiceLogin = useServiceLogin();
  if (!userServiceLogin) {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
};

export default ServiceProtectedRoutes;
