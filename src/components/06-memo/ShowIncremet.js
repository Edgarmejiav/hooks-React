import React from 'react'

export const ShowIncremet = React.memo(({incremet}) => {

    console.log('generar')
    return (
        <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
                incremet(5);
            }}>
            increment

        </button>
    )
}
)