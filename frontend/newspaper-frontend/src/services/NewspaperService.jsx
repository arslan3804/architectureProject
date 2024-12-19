import axios from "./AxiosConfig.jsx";

const NEWSPAPER_API_BASE_URL = "http://localhost:9000/api/newspaper";

export const listNewspapers = async () => {
    try {
        const response = await axios.get(`${NEWSPAPER_API_BASE_URL}/getAllNewspapers`);
        return response.data;
    } catch (error) {
        console.error("Ошибка получения списка газет:", error);
        throw error;
    }
};


export const createNewspaper = async (newspaper) => {
    try {
        const response = await axios.post(`${NEWSPAPER_API_BASE_URL}/create`, newspaper);
        return response.data;
    } catch (error) {
        console.error("Ошибка создания газеты:", error);
        throw error;
    }
};
