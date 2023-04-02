import UserRoutes from "../../UserRoutes";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <>
      <UserRoutes />
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default App;
