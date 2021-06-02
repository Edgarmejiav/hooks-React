const initialState = [
    {
        id: 1,
        todo: 'comprar pan',
        done: false
    }
];

const todoReducer = (state=initialState, action) => {
    if(action?.type==='agregar'){
        return [...state, action.payload];
    }

    return state;
}

let todos= todoReducer();

const newTodo =  {
    id: 2,
    todo: 'comprar leche',
    done: false
}

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}


todos = todoReducer(todos, agregarTodoAction);

console.log(todos);