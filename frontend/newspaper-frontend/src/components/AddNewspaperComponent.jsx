import React, { useState } from 'react'
import { createNewspaper } from '../services/NewspaperService'

const AddNewspaperComponent = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')

    const [errors, setErrors] = useState({
        name: '',
        description: '',
        price: ''
    })

    function handleName(e) {
        setName(e.target.value);
    }

    function handleDescription(e) {
        setDescription(e.target.value);
    }

    function handlePrice(e) {
        const value = e.target.value;
        setPrice(value === '' ? 0 : parseFloat(value));
    }

    function saveNewspaper(e) {
        e.preventDefault();

        if (validateForm()) {
            const newspaper = {name, description, price}
            console.log(newspaper)
            createNewspaper(newspaper).then((response) => {
                console.log(response.data);
            })
        }

    }

    function validateForm() {
        let valid = true;
        
        const errorsCopy = {... errors}

        if (name.trim()) {
            errorsCopy.name = '';
        } else {
            errorsCopy.name = 'Требуется название';
            valid = false;
        }

        if (description.trim()) {
            errorsCopy.description = '';
        } else {
            errorsCopy.description = 'Требуется описание';
            valid = false;
        }

        if (price !== '' && !isNaN(price) && parseFloat(price) > 0) {
            errorsCopy.price = '';
        } else {
            errorsCopy.price = 'Цена должна быть положительным числом';
            valid = false;
        }

        setErrors(errorsCopy)
        
        return valid;
    }

    return (
        <div className='container'>
            <br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    <h2 className='text-center'>Add newspaper</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Название газеты</label>
                                <input
                                    type='text'
                                    placeholder='Введите название газеты'
                                    name='name'
                                    value={name}
                                    className={`form-control ${ errors.name ? 'is-invalid' : ''}`}
                                    onChange={handleName}
                                />
                                { errors.name && <div className='invalid-feedback'> {errors.name} </div> }

                                <label className='form-label'>Описание газеты</label>
                                <input
                                    type='text'
                                    placeholder='Введите описание газеты'
                                    name='description'
                                    value={description}
                                    className={`form-control ${ errors.description ? 'is-invalid' : ''}`}
                                    onChange={handleDescription}
                                />
                                { errors.description && <div className='invalid-feedback'> {errors.description} </div> }

                                <label className='form-label'>Цена газеты</label>
                                <input
                                    type='number'
                                    placeholder='Введите цену газеты'
                                    name='price'
                                    value={price}
                                    className={`form-control ${ errors.price ? 'is-invalid' : ''}`}
                                    onChange={handlePrice}
                                />
                                { errors.price && <div className='invalid-feedback'> {errors.price} </div> }

                            </div>

                            <button className='btn btn-success' onClick={saveNewspaper}>Добавить газету</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AddNewspaperComponent