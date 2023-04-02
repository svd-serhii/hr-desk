import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../../firebase";

export const PublicRoute = () => {
  const user = auth.currentUser;
  if (user) {
    return <Navigate to="/hr" />;
  }

  return <Outlet />;
};
