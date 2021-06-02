import React, {useState} from 'react'
import '../02.useEffect/effects.css'
import {MultipleCustumHooks} from '../03-examples/MultipleCustumHooks'

export const RealExampleRef = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <h1>RealExampleRef</h1>

            {show && <MultipleCustumHooks/>}

            <button className="btn btn-primary mt-5"
            onClick={()=>{
                setShow(!show)
            }}
            >Show / hide</button>
        </div>
    )
}
