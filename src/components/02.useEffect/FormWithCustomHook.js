import React, {Fragment, useEffect} from 'react'
import {useForms} from '../../hooks/useForms';
import './effects.css'
export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForms(
        {name: '', email: '', password: ''}
    );
    const {name, email, password} = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formValues)
    }
    return (
        <form onSubmit={handleSubmit}>
            < h1 >FormWithCustomHook</h1>
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}/>

                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}/>

                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="*¨*****"
                    value={password}
                    onChange={handleInputChange}/>
            </div>

            <button type="submit" className="btn btn-success">Enviar</button>
        </form>

    )
}