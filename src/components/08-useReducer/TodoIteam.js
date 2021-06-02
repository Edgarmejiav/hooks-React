import React from 'react'

export const TodoIteam = ({todo, index, handleToggle, handleDelete}) => {
    return (
        <li className="list-group-item" key={todo.id}>
            <p
                className={`${todo.done && 'complete'}`}
                onClick={() => handleToggle(todo.id)}>{index + 1}. {todo.desc}
            </p>
            <button
                onClick={() => handleDelete(todo.id)}
                type="button"
                className="btn btn-danger">
                Borrar</button>
        </li>
    )
}
