import React from 'react'

const Bloque = ({children}) => {
    return (
        <div className='bloque__pagina'>
            <div className='bloque'>
                <h1 className='bloque__titulo'> MiPequeñoProgreso </h1>
                <div className='bloque__children'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Bloque