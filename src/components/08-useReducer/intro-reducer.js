console.log('hola mundo');

const initialState = [{
    id: 1,
    todo: 'Comprar Leche',
    done: false
}];

const todoReducer = (state = initialState, action) => {

    if (action?.type === 'agregar') {
        state = [...state, action.payload]
    }
    return state;

};

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar Cereal',
    done: false
}

const agregarToDoAction = {
    type: 'agregar',
    payload: newTodo
};

todos = todoReducer(todos, agregarToDoAction);



console.log(todos);