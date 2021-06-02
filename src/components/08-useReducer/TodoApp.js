import React, {useEffect, useReducer} from 'react'

import './style.css'
import {TodoAdd} from './TodoAdd'
import {Todolist} from './Todolist'
import {todoReducer} from './todoReducer'

export const TodoApp = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action);
    }

    const handleToggle = (todoId) => {

        dispatch({type: 'toggle', payload: todoId});
    }

    const handleAddTodo = (newTodo) => {
        dispatch({type: 'add', payload: newTodo});
    }
    return (
        <div>
            <h1>Todo App ( {todos.length}
                )</h1>

            <div className="row">

                <div className="col-7">
                    To dos
                    <Todolist
                        todos={todos}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}/>
                </div>
                <div className="col-5">
                    Agregar
                    <TodoAdd handleAddTodo={handleAddTodo}/>

                </div>

            </div>
        </div>
    )
}
