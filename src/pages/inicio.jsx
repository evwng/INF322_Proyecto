import React from 'react'
import { Link } from 'react-router-dom';

import ImagenFamilia from  '../assets/imagen_familia.png'

export const Inicio = () => {
  return (
    <div className='inicio'>
      <div className='inicio__izquierda'>
        <h1 className='inicio__texto'> Monitorea el desarrollo de tu bebé </h1>
        <Link to='/acceso'>
          <button className='inicio__boton'> Comienza aquí </button>
        </Link>
      </div>
      <div className='inicio__derecha'>
        <img src={ImagenFamilia} className='inicio__imagen' alt='Imagen de una familia'/>
      </div>
    </div>
  )
}

export default Inicio