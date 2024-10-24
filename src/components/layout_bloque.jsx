import React from 'react'

const LayoutBloque = ({children}) => {
    return (
        <div className='layout__bloque__pagina'>
            <div className='layout__bloque'>
                <h1 className='layout__bloque__titulo'> MiPequeñoProgreso </h1>
                <div className='layout__bloque__children'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default LayoutBloque