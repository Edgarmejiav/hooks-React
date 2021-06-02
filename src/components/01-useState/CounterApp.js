import React, { useState } from 'react'
import   './Counter.css'
export const CounterApp = () => {
    const [state, setstate] = useState({counter1: 10 , counter2 : 20});
    const {counter1, counter2} = state;
    return (
        <>
           <h1>Counter { counter1 }</h1> 
           <h1>Counter { counter2 }</h1> 

           <button  
           type="button" className = "btn btn-primary"
           onClick={()=>{
               setstate({...state, counter1: counter1 + 1});
           }}
           > +1</button >

        </>
    )
}
