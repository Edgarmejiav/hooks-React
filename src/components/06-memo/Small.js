import React from 'react'

export const Small = React.memo(({value}) => {

    console.log(' mostar');
    return (
        <small>
            {value}
        </small>
    )
}
)