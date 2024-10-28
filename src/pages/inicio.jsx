import React from 'react'
import { Link } from 'react-router-dom';

import ImagenFamilia from  '../assets/imagen_familia.png'

export const Inicio = () => {
  return (
    <div className='inicio'>
      <div className='inicio__izquierda'>
        <h1> Monitorea el desarrollo de tu bebé </h1>
        <div className='inicio__izquierda__boton'>
          <Link to='/acceso'>
            <button> Comienza aquí </button>
          </Link>
        </div>
      </div>
      <div className='inicio__derecha'>
        <img src={ImagenFamilia} alt='Imagen de una familia'/>
      </div>
    </div>
  )
}

export default Inicio