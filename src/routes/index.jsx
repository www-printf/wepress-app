/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Loading from "../components/Loading";
// import LandingLayout from "../layouts/LandingLayout";
import DefaultLayout from "../layouts/DefaultLayout";
import { ENDPOINTS } from "./endPoints";
import LandingLayout from "../layouts/LandingLayout";

const WEB_NAME = "WePress App";

const RequiredAuth = ({ children, path }) => {
  const location = useLocation();
  // Fixed the token selector
  const token = useSelector((state) => state.auth?.token);

  if (!token) {
    return <Navigate to={path} state={{ from: location }} replace />;
  }

  return children;
};

RequiredAuth.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
};

const delayRoute = (ms = 500) => {
  return (promise) =>
    promise.then(
      (data) =>
        new Promise((resolve) => {
          setTimeout(() => resolve(data), ms);
        })
    );
};

// Routes configuration
const landingPage = {
  path: ENDPOINTS.INDEX,
  Layout: LandingLayout,
  component: lazy(() => delayRoute()(import("../modules/landing/features"))),
  title: WEB_NAME,
};

const loginPage = {
  path: ENDPOINTS.AUTH.LOGIN,
  component: lazy(() => delayRoute()(import("../modules/auth/features/login"))),
  title: `Login | ${WEB_NAME}`,
  Layout: DefaultLayout,
};
const forgotPasswordPage = {
  path: ENDPOINTS.AUTH.FORGOT_PASSWORD,
  component: lazy(() => delayRoute()(import("../modules/auth/features/forgotPassword"))),
  title: `Forgot Password | ${WEB_NAME}`,
  Layout: DefaultLayout,
};

export const privateRouteData = [];
export const publicRoutesData = [
  landingPage, 
  loginPage,
  forgotPasswordPage
];

// Improved route rendering function
const renderRoutes = (routes, isPrivate = false) => {
  return routes.map((route, index) => {
    const { component: Component, path, Layout, ...rest } = route;

    const content = (
      <Suspense fallback={<Loading />}>
        {Layout ? (
          <Layout>
            <Component />
          </Layout>
        ) : (
          <Component />
        )}
      </Suspense>
    );

    return (
      <Route
        {...rest}
        key={`${isPrivate ? "private" : "public"}-route-${index}`}
        path={path}
        element={
          isPrivate ? (
            <RequiredAuth path={ENDPOINTS.AUTH.LOGIN}>{content}</RequiredAuth>
          ) : (
            content
          )
        }
      />
    );
  });
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {renderRoutes(publicRoutesData)}
        {renderRoutes(privateRouteData, true)}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
