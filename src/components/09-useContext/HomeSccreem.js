import React, { useContext } from 'react'
import {UserContext} from './UserContext'

export const HomeSccreem = () => {

    const {user} = useContext(UserContext);
 
console.log(user);
    return (<div>
        <h1>
            HomeSccreem</h1>

            <pre className="container">
                {
                    JSON.stringify(user, null, 3)
                }
            </pre>
    </div>)
}
