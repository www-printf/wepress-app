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
import HomeLayout from "../layouts/HomeLayout";
import SidebarLayout from "../layouts/SidebarLayout";

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
  // component: lazy(() => delayRoute()(import("../modules/landing/features"))),
  component: lazy(() => delayRoute()(import("../modules/home/features"))),
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

const homePage = {
  path: ENDPOINTS.USER.HOME,
  Layout: DefaultLayout,
  component: lazy(() => delayRoute()(import("../modules/home/features"))),
  title: WEB_NAME,
};

const printDocumentPage = {
  path: ENDPOINTS.USER.PRINTDOCUMENT,
  Layout: DefaultLayout,
  component: lazy(() => delayRoute()(import("../modules/PrintDocument/features"))),
  title: WEB_NAME,
};
const editDocumentPage = {
  path: ENDPOINTS.USER.EDITDOCUMENT,
  Layout: DefaultLayout,
  component: lazy(() => delayRoute()(import("../modules/EditDocument/features"))),
  title: WEB_NAME,
}
const wepressLibraryPage = {
  path: ENDPOINTS.WEPRESS_LIBRARY,
  Layout: SidebarLayout,
  component: lazy(() => delayRoute()(import("../modules/wepressLibrary/features"))),
  title: `WePress Library | ${WEB_NAME}`,
};
const sharedWithMePage = {
  path: ENDPOINTS.SHARED_WITH_ME,
  Layout: SidebarLayout,
  component: lazy(() => delayRoute()(import("../modules/sharedWithMe/features"))),
  title: `Shared With Me | ${WEB_NAME}`,
};
const myDocumentsPage = {
  path: ENDPOINTS.MY_DOCUMENTS,
  Layout: SidebarLayout,
  component: lazy(() => delayRoute()(import("../modules/myDocuments/features"))),
  title: `My Documents | ${WEB_NAME}`,
};

export const privateRouteData = [
  homePage,
  printDocumentPage,
  editDocumentPage
];

export const publicRoutesData = [
  landingPage,
  loginPage,
  forgotPasswordPage,
  wepressLibraryPage,// Cần sửa
  sharedWithMePage,// Cần sửa
  myDocumentsPage// Cần sửa
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
