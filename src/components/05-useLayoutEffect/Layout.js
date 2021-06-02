import React, {useLayoutEffect, useRef, useState} from 'react'
import {useCounter} from '../../hooks/useCounter'
import {UseFetch} from '../../hooks/UseFetch'
import './layout.css'

export const Layout = () => {

    const {counter, incremet} = useCounter(1);
    console.log()
    const {data} = UseFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {quote} = !!data && data[0];

    const pTag = useRef()
    const [boxSize, setBoxSize] = useState({})
    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote]);
    return (
        <div>
            <h1>
                LayoutEffect</h1>

            <blockquote className="blockquote text-right">
                <p ref={pTag} className="mb-0">
                    {quote}</p>
            </blockquote>
            <pre>
               {JSON.stringify(boxSize, null,3)} 
            </pre>
            <button className="btn btn-primary" onClick={incremet}>
                Siguiente Quote</button>
        </div>
    )
}
