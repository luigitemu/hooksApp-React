import React, { useEffect } from 'react'


export const Message = () => {

    useEffect(() => {

        const mouseMove = (e) => {
            console.log(':D');
        }

        window.addEventListener('mousemove', mouseMove);

        return () => {
            // console.log('componente Desmontado');
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])

    return (
        <div className="mt-3">
            <h3> Eres Genial</h3>
        </div>
    )
}
