export const ENDPOINTS = Object.freeze({
  AUTH: {
    LOGIN: "/user/login",
    FORGOT_PASSWORD: "/user/forgot-password",
  },

  INDEX: "/",

  DOCUMENTS: {
    MINE: "/documents/mine",
  },

  USER: {
    HOME: "/user/home",
    PRINTDOCUMENT: "/user/print-document",
    LIBRARY: "/user/library",
    EDITDOCUMENT: "/user/edit-document",
    PURCHASE_PAPER: "/user/purchase-paper",
    PURCHASING: "/user/purchasing/:price",
    VIEW_PRINTER_STATUS: "/user/view-printer-status",
    PAYMENT_SUCCESS: "/user/payment-success",
    PURCHASE_HISTORY: "/user/purchase-history",
    INFO: "/user/info",
    PRINT_HISTORY: "/user/print-history",
    SHARED_WITH_ME: "/shared-with-me",
    MY_DOCUMENTS: "/my-documents",
    PRINTER_INFO: "/user/printer-info/:printerID",
    PRINTING_STATUS: "/user/printing-status",
  },

  ADMIN: {
    DASHBOARD: "/admin/dashboard",
    LANDINGPAGE: "/admin/landing-page",
    HOME: "/admin/home",
    PRINTERS: "/admin/printers",
    CONFIGSYSTEM: "/admin/config",
    PRINTER_INFO: "/admin/printer-info/:printerID",
    ADD_PRINTER: "/admin/add-printer",
  },

  ABOUT: "/about",

});
