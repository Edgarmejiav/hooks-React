import React, { useState } from 'react'
import {useCounter} from '../../hooks/useCounter'
import {Small} from './Small'
import '../02.useEffect/effects.css'

export const Memorize = () => {

    const {counter, incremet} = useCounter(10);
    const [show, setShow] = useState(true);
    return (
        <div>

            <h1>Counter :
                <Small value={counter}/></h1>

            <button type="button" className="btn btn-primary" onClick={incremet}>
                + 1</button>

            <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                    setShow(!show)
                }}>Show/Hide {JSON.stringify(show)}</button>

        </div>
    )
}
