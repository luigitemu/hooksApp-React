import React from 'react';
import ReactDOM from 'react-dom';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { SimpleForm } from './components/02-useEfect/SimpleForm';
// import { HooksApp } from './HooksApp';
// import { FormWithCustomHook } from './components/02-useEfect/FormWithCustomHok';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FocusScreen } from './components/04-useref/FocusScreen';
// import { RealExampleRef } from './components/04-useref/RealExampleRef';
// import { Layout } from './components/05-useLayoutEffetc/useLayoutEffetc';
// import { Memorize } from './components/06-memos/Memorize';
// import { MemosHook } from './components/06-memos/MemosHook';
// import { CallbackHook } from './components/06-memos/CallbackHook';
// import { Padre } from './components/07-tarea-memo/Padre';
import { TodoApp } from './components/08-useReducer/TodoApp';


ReactDOM.render(
    <TodoApp />,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

