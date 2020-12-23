import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm';
import { todoReducer } from './todoReducer';
import './styles.css';
import { TodoList } from './components/TodoList';



const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [{ description }, handleInputForm, reset] = useForm({ description: '' });

    useEffect(() => {

        localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos])

    const handleSumbit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action);
        reset();

    };

    const handleDelete = (todoId) => {
        console.log(todoId);

        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action);
    };

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    };

    return (
        <>
            <h1>To do App ( <small> {todos.length}</small> )</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <h4>TODOS</h4>
                    <TodoList
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />

                </div>

                <div className="col-5">
                    <h4> Agregar TODO</h4>
                    <hr />
                    <form onSubmit={handleSumbit} >

                        <input
                            type="text"
                            name="description"
                            placeholder="Aprender"
                            className="form-control"
                            value={description}
                            onChange={handleInputForm}
                        />
                        <button
                            className="btn btn-info mt-3 btn-block "
                            type="submit"
                        >
                            Agregar
                        </button>


                    </form>
                </div>

            </div>
        </>
    )
}
