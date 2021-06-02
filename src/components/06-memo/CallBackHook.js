import React, { useCallback, useEffect, useState } from 'react'
import '../02.useEffect/effects.css'
import { ShowIncremet } from './ShowIncremet';

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);

  /*   const incrementar = () => {
        setCounter(counter + 1);
    } */

    const incrementar = useCallback(
        (num) => {
            setCounter(c => c + num);
        },
        [setCounter],
    );

    useEffect(() => {
       ////?
    }, [incrementar])

    return (<div>
        <h1>CallBackHook: {counter}
        </h1>
        <ShowIncremet
        incremet = {incrementar}
        />

    </div>)
}
