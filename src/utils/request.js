import axios from "axios";
import qs from "qs";
import { getConfig } from "../configs/getConfig.config";
import { toast } from "react-toastify";
import { store } from "../store";


const paramsSerializer = (params) =>
    qs.stringify(params, { arrayFormat: "repeat" });

const request = axios.create({
    paramsSerializer,
});

export function createRequestInterceptor() {
    return function interceptor(config) {
        const { apiUrl } = getConfig();

        config.baseURL = apiUrl;

        const baseConfig = {
            ...config,
            headers: { ...config.headers },
        };

        const token = store.getState().auth.token;

        const { headers } = baseConfig;
        const newHeaders = {
            ...headers,
            Authorization: `Bearer ${token}`,
        };

        return {
            ...config,
            headers: newHeaders,
        };
    };
}

function parseResultsHandler(response) {
    const { data } = response || {};
    return data?.results || data;
}

const isResponseError = ({ response }) => {
    return !!response;
};

const isServerError = ({ response: { status } }) => {
    return status >= 500;
};

const isUserError = ({ response: { status } }) => {
    return status >= 400 && status < 500;
};

const isUnauthorized = ({ response: { status } }) => {
    return status == 401 || status == 403;
};

const isRequestError = ({ response, request }) => {
    return !response && !!request;
};

export function displayErrorMessage(errorMsg) {
    return toast.error(errorMsg);
}
export function displaySuccessMessage(errorMsg) {
    return toast.success(errorMsg);
}

function getErrorDetails(error) {
    let errorMessage;
    const { response } = error;

    errorMessage =
        (response && response.data && response.data.message) ||
        response.data.description ||
        response.data.error_description ||
        response.statusText;

    return errorMessage;
}

function serverErrorHandler(error, next) {
    if (!isResponseError(error) || !isServerError(error)) {
        return next();
    }
    const errorMsg = getErrorDetails(error);
    return displayErrorMessage(errorMsg);
}

function userErrorHandler(error, next) {
    if (!isResponseError(error) || !isUserError(error)) {
        return next();
    }
    const errorMsg = getErrorDetails(error);

    return displayErrorMessage(errorMsg);
}

function unauthorizedErrorHandler(error, next) {
    if (isUnauthorized(error)) {
        window.location.href = "/auth/login";
    }
    if (!isResponseError(error) || !isUnauthorized(error)) {
        return next();
    }
    const errorMsg = getErrorDetails(error);
    return displayErrorMessage(errorMsg);
}

function requestErrorHandler(error, next) {
    if (!isRequestError(error)) {
        return next();
    }
    return displayErrorMessage("request failed");
}

export function createHandlerChain(handlers = []) {
    return function handlerChain(error) {
        const stack = [...handlers];
        function next() {
            if (stack.length === 0) {
                return;
            }
            const nextHandler = stack.pop();
            nextHandler(error, next);
        }
        next();
        return Promise.reject(error);
    };
}

request.interceptors.request.use(createRequestInterceptor());
request.interceptors.response.use(
    parseResultsHandler,
    createHandlerChain([
        serverErrorHandler,
        userErrorHandler,
        unauthorizedErrorHandler,
        requestErrorHandler,
    ])
);

export default request;
