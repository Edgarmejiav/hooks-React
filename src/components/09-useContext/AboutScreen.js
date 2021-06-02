import React, {useContext} from 'react'
import {UserContext} from './UserContext'

export const AboutScreen = () => {

    const {user, setUser} = useContext(UserContext);

    const handleClick = () => {
        setUser({});
    }

    return (
        <div>
            <h1>
                AboutScreen</h1>

            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
            <button onClick={handleClick} type="button" class="btn btn-warning">Logout</button>

        </div>
    )
}
