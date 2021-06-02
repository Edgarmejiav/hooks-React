import React, {useEffect, useState} from 'react'

export const Message = () => {

    const [coords, setcoords] = useState({x: 0, y: 0});
    useEffect(() => {
        const mouseMove = (e) => {
            // console.log(e);
            const coords = {
                x: e.x,
                y: e.y
            };
            setcoords(coords);
            console.log(':D');
        }
        window.addEventListener('mousemove', mouseMove);
        return() => {
            window.removeEventListener('mousemove', mouseMove)

        }
    }, []);
    return (<div>
        <h3>
            Eres genial</h3>
            <p>
              x:  {coords.x}
            </p>
            <p>  y:  {coords.y}</p>
            
    </div>)
}
