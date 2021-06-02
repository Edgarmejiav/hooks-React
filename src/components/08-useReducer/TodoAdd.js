import React, {Fragment} from 'react'
import {useForms} from '../../hooks/useForms';

export const TodoAdd = ({handleAddTodo}) => {
    const [
        {
            descripcion
        }, handleInputChange, reset] = useForms({descripcion: ''});

    const handleSubmit = (e) => {
        e.preventDefault();
        if (descripcion.trim().length <= 1) {
            return;
        }
        const newTodo = {

            id: new Date().getTime(),
            desc: descripcion,
            done: false
        }
        handleAddTodo(newTodo);
        reset();
    }

    return (
        <Fragment>
            <h4>Agregar TODO</h4>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="descripcion"
                    className="form-control"
                    placeholder="agregar..."
                    value={descripcion}
                    autoComplete="off"
                    onChange={handleInputChange}/>
                <button type="subnmit" className="btn btn-outline-primary mt-1 btn-block">Agregar</button>
            </form>
        </Fragment>
    )
}
