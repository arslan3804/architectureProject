import axios from "./AxiosConfig.jsx";
import { jwtDecode } from "jwt-decode";
import { saveToken } from "./AxiosConfig.jsx";


const AUTH_API_BASE_URL = "http://localhost:9000/auth";

export const login = async (emailName, password) => {
    try {
        const response = await axios.post(`${AUTH_API_BASE_URL}/token`, {
            email: emailName,
            password: password,
        });
        const token = response.data;
        const decodedToken = jwtDecode(token);
        const email = decodedToken.sub;
        const id = decodedToken.id;
        const name = decodedToken.name;


        saveToken(token);
        localStorage.setItem("email", email);
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);


        return token;
    } catch (error) {
        console.error("Ошибка входа:", error);
        throw error;
    }
};

export const register = async (user) => {
    try {
        const response = await axios.post(`${AUTH_API_BASE_URL}/register`, user);
        return response.data;
    } catch (error) {
        console.error("Ошибка регистрации:", error);
        throw error;
    }
};
