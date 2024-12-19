import React, { useState } from 'react';
import { register } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

const RegistrationComponent = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
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
            await register({
                name: formData.username,
                password: formData.password,
                email: formData.email,
            });
            setSuccess(true);
            setTimeout(() => navigate('/login'), 2000);
        } catch (err) {
            setError(err.response?.data?.message || 'Ошибка регистрации');
        }
    };

    return (
        <div className="container">
            <h2>Регистрация</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Имя пользователя</label>
                    <input
                        type="text"
                        name="username"
                        className="form-control"
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
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
                <button type="submit" className="btn btn-primary mt-3">Зарегистрироваться</button>
            </form>

            {error && <div className="alert alert-danger mt-3">{error}</div>}
            {success && <div className="alert alert-success mt-3">Регистрация успешна! Перенаправление...</div>}
        </div>
    );
};

export default RegistrationComponent;
