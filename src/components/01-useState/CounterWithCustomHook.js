import React, { Fragment } from 'react'
import {useCounter} from '../../hooks/useCounter'
import './Counter.css'

export const CounterWithCustomHook = () => {

    const { state , incremet, decremet, reset} = useCounter();
    return (
        <Fragment>
            <h1> Counter with Hook : { state } </h1>
            <button onClick={() =>incremet(2)} className="btn btn-primary"> +1</button>
            <button onClick={reset} className="btn btn-primary"> Reset</button>
            <button onClick={() =>decremet(2)} className="btn btn-primary"> -1</button>
        </Fragment>
    )
}
