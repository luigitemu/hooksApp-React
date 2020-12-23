import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './effects.css';


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });
    const { name, email } = formState;

    useEffect(() => {
        // console.log('hey');
    }, []);

    useEffect(() => {

    }, [formState]);

    useEffect(() => {

    }, [email]);

    const handleInputChange = ({ target }) => {

        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }

    return (
        <>
            <h1> use Efect</h1>
            <hr />

            <div className="form-group mb-3">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu Nombre"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="tucorreo@gmail.com"
                    value={email}
                    onChange={handleInputChange}
                />

            </div>

            { (name === '123') && <Message />}
        </>
    )
}
