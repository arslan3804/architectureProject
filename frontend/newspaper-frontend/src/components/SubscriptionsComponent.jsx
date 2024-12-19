import React, { useEffect, useState } from "react";
import { listSubscriptions } from "../services/SubscriptionService.jsx";

const SubscriptionComponent = () => {
    const [subscriptions, setSubscriptions] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchSubscriptions = async () => {
            try {
                const data = await listSubscriptions();
                setSubscriptions(data);
            } catch (err) {
                setError("Не удалось загрузить подписки. Попробуйте позже.");
            }
        };

        fetchSubscriptions();
    }, []);

    return (
        <div className="container">
            <h2>Ваши подписки</h2>
            {error && <p className="error-message">{error}</p>}

            {subscriptions.length > 0 ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Название газеты</th>
                            <th>Дата начала</th>
                            <th>Месяцы</th>
                            <th>Цена</th>
                            <th>Общая стоимость</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subscriptions.map((subscription) => (
                            <tr key={subscription.id}>
                                <td>{subscription.id}</td>
                                <td>{subscription.newspaperName}</td>
                                <td>{new Date(subscription.startDatetime).toLocaleString()}</td>
                                <td>{subscription.months}</td>
                                <td>{subscription.price.toFixed(2)}</td>
                                <td>{subscription.totalPrice.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Подписок не найдено.</p>
            )}
        </div>
    );
};

export default SubscriptionComponent;
