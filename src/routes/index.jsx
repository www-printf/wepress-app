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
import AdminLayout from "../layouts/AdminLayout";

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
  component: lazy(() =>
    delayRoute()(import("../modules/auth/features/forgotPassword"))
  ),
  title: `Forgot Password | ${WEB_NAME}`,
  Layout: DefaultLayout,
};

const homePage = {
  path: ENDPOINTS.USER.HOME,
  Layout: DefaultLayout,
  component: lazy(() => delayRoute()(import("../modules/home/features"))),
  title: WEB_NAME,
};
const about = {
  path: ENDPOINTS.ABOUT,
  Layout: DefaultLayout,
  component: lazy(() => delayRoute()(import("../modules/about/features"))),
  title: WEB_NAME,
};

const infoPage = {
  path: ENDPOINTS.USER.INFO,
  Layout: DefaultLayout,
  component: lazy(() => delayRoute()(import("../modules/userInfo/features"))),
  title: WEB_NAME,
};

const printDocumentPage = {
  path: ENDPOINTS.USER.PRINTDOCUMENT,
  Layout: DefaultLayout,
  component: lazy(() =>
    delayRoute()(import("../modules/PrintDocument/features"))
  ),
  title: WEB_NAME,
};
const editDocumentPage = {
  path: ENDPOINTS.USER.EDITDOCUMENT,
  Layout: DefaultLayout,
  component: lazy(() =>
    delayRoute()(import("../modules/EditDocument/features"))
  ),
  title: WEB_NAME,
};
const printHistoryPage = {
  path: ENDPOINTS.USER.PRINT_HISTORY,
  Layout: DefaultLayout,
  component: lazy(() =>
    delayRoute()(import("../modules/printHistory/features"))
  ),
  title: WEB_NAME,
};
const wepressLibraryPage = {
  path: ENDPOINTS.USER.LIBRARY,
  Layout: SidebarLayout,
  component: lazy(() =>
    delayRoute()(import("../modules/wepressLibrary/features"))
  ),
  title: `WePress Library | ${WEB_NAME}`,
};
const sharedWithMePage = {
  path: ENDPOINTS.USER.SHARED_WITH_ME,
  Layout: SidebarLayout,
  component: lazy(() =>
    delayRoute()(import("../modules/sharedWithMe/features"))
  ),
  title: `Shared With Me | ${WEB_NAME}`,
};
const myDocumentsPage = {
  path: ENDPOINTS.USER.MY_DOCUMENTS,
  Layout: SidebarLayout,
  component: lazy(() =>
    delayRoute()(import("../modules/myDocuments/features"))
  ),
  title: `My Documents | ${WEB_NAME}`,
};
const purchasePaper = {
  path: ENDPOINTS.USER.PURCHASE_PAPER,
  Layout: DefaultLayout,
  component: lazy(() =>
    delayRoute()(import("../modules/purchasePaper/features"))
  ),
  title: `Purchase Paper | ${WEB_NAME}`,
};
const purchasing = {
  path: ENDPOINTS.USER.PURCHASING,
  Layout: DefaultLayout,
  component: lazy(() => delayRoute()(import("../modules/purchasing/features"))),
  title: `Purchasing | ${WEB_NAME}`,
};
const paymentSuccess = {
  path: ENDPOINTS.USER.PAYMENT_SUCCESS,
  Layout: DefaultLayout,
  component: lazy(() =>
    delayRoute()(import("../modules/paymentSuccess/features"))
  ),
  title: `Payment Success | ${WEB_NAME}`,
};
const viewPrinterStatus = {
  path: ENDPOINTS.USER.VIEW_PRINTER_STATUS,
  Layout: DefaultLayout,
  component: lazy(() =>
    delayRoute()(import("../modules/viewPrinterStatus/features"))
  ),
  title: `View Printer Status | ${WEB_NAME}`,
};
const purchaseHistory = {
  path: ENDPOINTS.USER.PURCHASE_HISTORY,
  Layout: DefaultLayout,
  component: lazy(() =>
    delayRoute()(import("../modules/purchaseHistory/features"))
  ),
  title: `Purchase History | ${WEB_NAME}`,
};
const printerInfo = {
  path: ENDPOINTS.USER.PRINTER_INFO,
  Layout: DefaultLayout,
  component: lazy(() =>
    delayRoute()(import("../modules/printerInfo/features"))
  ),
  title: `Printer Information | ${WEB_NAME}`,
};

const adminLandingPage = {
  path: ENDPOINTS.ADMIN.LANDINGPAGE,
  Layout: AdminLayout,
  component: lazy(() => delayRoute()(import("../modules/adminLanding/features"))),
  title: WEB_NAME,
};


export const privateRouteData = [
  homePage,
  printDocumentPage,
  editDocumentPage,
  wepressLibraryPage,
  sharedWithMePage,
  myDocumentsPage,
  purchasePaper,
  purchasing,
  viewPrinterStatus,
  paymentSuccess,
  purchaseHistory,
  infoPage,
  printHistoryPage,
  printerInfo,
  adminLandingPage
];

export const publicRoutesData = [landingPage, loginPage, forgotPasswordPage, about];

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
