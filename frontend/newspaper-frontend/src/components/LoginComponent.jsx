import React, { useState } from 'react';
import { login } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);

        try {
            const token = await login(formData.email, formData.password);
            setSuccess(true);
            localStorage.setItem("authToken", token);
            setTimeout(() => navigate('/'), 2000);
        } catch (err) {
            setError(err.response?.data?.message || 'Ошибка входа');
        }
    };

    return (
        <div className="container">
            <h2>Вход</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Электронная почта пользователя</label>
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Пароль</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Войти</button>
            </form>

            {error && <div className="alert alert-danger mt-3">{error}</div>}
            {success && <div className="alert alert-success mt-3">Вы успешно вошли! Перенаправление...</div>}
        </div>
    );
};

export default LoginComponent;
