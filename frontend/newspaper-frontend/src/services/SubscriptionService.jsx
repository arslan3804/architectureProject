import axios from "./AxiosConfig.jsx";

const SUBSCRIPTION_API_BASE_URL = "http://localhost:9000/api/subscription";

export const listSubscriptions = async () => {
    try {
        const response = await axios.get(SUBSCRIPTION_API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error("Ошибка получения списка подписок:", error);
        throw error;
    }
};


export const createSubscription = async (newspaperName, months, price) => {
    try {
        const startDatetime = new Date().toISOString();
        console.log(newspaperName, startDatetime, months, price);
        const response = await axios.post(SUBSCRIPTION_API_BASE_URL, {
            newspaperName,
            startDatetime,
            months,
            price
        });
        return response.data;
    } catch (error) {
        throw new Error("Ошибка при оформлении подписки: " + error.message);
    }
};

