import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../../firebase";

export const PrivateRoute = () => {
  const user = auth.currentUser;
  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
