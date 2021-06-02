import React, {Fragment, useEffect, useState} from 'react'
import './effects.css'
import {Message} from './Message';
export const SimpleForm = () => {

    const [formState, setFormState] = useState({name: '', email: ''});
    const {name, email} = formState;

    useEffect(() => {
        console.log('hwy');
    }, []);

    const handleInputChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }
    return (
        <Fragment>
            < h1 >useEffect</h1>
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
            </div>
            {(name === '123') && <Message/>}

        </Fragment>
    )
}