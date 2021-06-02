import React, {Fragment} from 'react'
import {TodoIteam} from './TodoIteam'

export const Todolist = ({todos, index, handleToggle, handleDelete}) => {
    return (
        <ul className="list-group-flush">
            {
                todos.map((todo, i) => (
                    <TodoIteam
                        key={todo.id}
                        todo={todo}
                        index={i}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}/>
                ))
            }
        </ul>
    )
}
