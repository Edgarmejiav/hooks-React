import React from 'react';
import ReactDOM from 'react-dom';
import { MainApp } from './components/09-useContext/MainApp';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
/* import { CounterApp } from './components/01-useState/CounterApp';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
import { SimpleForm } from './components/02.useEffect/SimpleForm';
import { FormWithCustomHook } from './components/02.useEffect/FormWithCustomHook';
import { MultipleCustumHooks } from './components/03-examples/MultipleCustumHooks';
import { FocusScreen } from './components/04-useRef/FocusScreen';
import { RealExampleRef } from './components/04-useRef/RealExampleRef';
import { Layout } from './components/05-useLayoutEffect/Layout';
import { Memorize } from './components/06-memo/Memorize';
import { MemoHooks } from './components/06-memo/MemoHooks';
import { CallBackHook } from './components/06-memo/CallBackHook';
import { Padre } from './components/07-tarea-memo/Padre'; 
import { TodoApp } from './components/08-useReducer/TodoApp';*/

ReactDOM.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
