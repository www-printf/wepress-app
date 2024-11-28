export const getConfig = () => {
    return {
        apiUrl: import.meta.env.VITE_API_URL || "/api/v1",
        webName: import.meta.env.VITE_WEB_NAME
    };
};