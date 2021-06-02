import React, {useContext} from 'react'
import {UserContext} from './UserContext'

export const LoginScreen = () => {

    const {setUser} = useContext(UserContext);
    return (
        <div>
            <h1>
                LoginScreen</h1>
            <button
                onClick={() => setUser({id: '232', name: 'Edgar'})}
                type="button"
                class="btn btn-primary">Login</button>
        </div>
    )
}
