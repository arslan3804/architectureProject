import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { createSubscription } from '../services/SubscriptionService';

const SubscriptionComponent = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [months, setMonths] = useState(1);
    const [totalPrice, setTotalPrice] = useState(location.state.newspaper.price);

    const newspaper = location.state.newspaper;

    const handleMonthChange = (event) => {
        const selectedMonths = event.target.value;
        setMonths(selectedMonths);
        setTotalPrice(newspaper.price * selectedMonths);
    };

    const handleSubmit = async () => {
        try {
            await createSubscription(newspaper.name, months, newspaper.price);
            navigate('/subscriptions');
        } catch (error) {
            console.error("Ошибка при оформлении подписки:", error);
        }
    };

    return (
        <div className="container">
            <h2 className="center">Подписка на {newspaper.name}</h2>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{newspaper.name}</h5>
                    <p className="card-text">{newspaper.description}</p>

                    <div className="form-group">
                        <label htmlFor="months">Выбрать количество месяцев подписки (months):</label>
                        <select
                            id="months"
                            className="form-control"
                            value={months}
                            onChange={handleMonthChange}
                        >
                            {[1, 3, 6, 12].map((month) => (
                                <option key={month} value={month}>
                                    {month} month{month > 1 ? 's' : ''}
                                </option>
                            ))}
                        </select>
                    </div>

                    <p className="card-text">
                        <strong>Итоговая цена:</strong> {totalPrice} рублей
                    </p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-primary" onClick={handleSubmit}>
                        Подтвердить оформление подписки
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionComponent;
