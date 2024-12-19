import axios from "axios";


export const saveToken = (token) => {
    localStorage.setItem("jwt_token", token);
};

export const getToken = () => {
    return localStorage.getItem("jwt_token");
};

export const removeToken = () => {
    localStorage.removeItem("jwt_token");
};

axios.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.error("Unauthorized: Токен недействителен или истёк.");
            removeToken();
        }
        return Promise.reject(error);
    }
);

export default axios;
