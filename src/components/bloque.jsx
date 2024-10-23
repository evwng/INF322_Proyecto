import React from 'react'

const Bloque = ({children}) => {
    return (
        <div className='bloque'>
            <h1> Mi Pequeño Progreso </h1>
            {children}
        </div>
    )
}

export default Bloque