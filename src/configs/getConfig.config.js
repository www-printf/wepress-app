export const getConfig = () => {
    return {
        apiUrl: import.meta.env.VITE_API_URL || "/api",
        webName: import.meta.env.VITE_WEB_NAME
    };
};