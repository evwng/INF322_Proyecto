import React from 'react'
import { Link } from 'react-router-dom';

import Bloque from '../components/bloque'

export const Acceso = () => {
  return (
    <div className='acceso'>
      <Bloque>
        <h2 className='bloque__subtitulo'> Acceso </h2>
        <div className='acceso__opciones'>
          <div className='acceso__opcion'>
            <Link to='/acceso/cuidador'>
              <label>
                <input type='radio'/> Cuidador
              </label>
              <p className='acceso__opcion__descripcion'> Monitor del desarrollo del niño/niña </p>
            </Link>
          </div>
          <div className='acceso__opcion'>
            <Link to='/acceso/pediatra'>
              <label>
                <input type='radio'/> Pediatra
              </label>
              <p className='acceso__opcion__descripcion'> Persona que ingresará datos de desarrollo motor </p>
            </Link>
          </div>
        </div>
      </Bloque>
    </div>
  )
}

export default Acceso