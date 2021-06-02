import { useState } from "react"

export const useCounter = (initialState = 1) => {
    const [counter, setCounter] = useState(initialState);

    const incremet = ()=>{
        setCounter(counter + 1);
    }
    const decremet = ()=>{
        setCounter(counter - 1);
    }
    const reset = ()=>{
        setCounter(initialState);
    }

    return {
        counter,
        incremet,
        decremet,
        reset
    }
}
