import React, { useMemo, useState } from 'react'
import {useCounter} from '../../hooks/useCounter'
import '../02.useEffect/effects.css'
import {procesoPesado} from '../helpers/procesoPesado'
export const MemoHooks = () => {

    const {counter, incremet} = useCounter(1000);
    const [show, setShow] = useState(true);


    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);
    
    return (
        <div>

            <h3> MemoHooks Counter :
                <small> {counter}</small> </h3>

                <p> {memoProcesoPesado }</p>

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
