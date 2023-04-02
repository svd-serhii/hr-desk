import React from "react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { Loader } from "./components/Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const HumanResources = lazy(() => import("./components/HumanResources/HumanResources"));
const RestorePassword = lazy(() => import("./components/RestorePassword/RestorePassword"));
const CreateNewPassword = lazy(() => import("./components/CreateNewPassword/CreateNewPassword"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/restore" element={<RestorePassword />} />
          <Route path="/new-pass" element={<CreateNewPassword />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/hr" element={<HumanResources />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
