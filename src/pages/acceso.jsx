import React from 'react'
import { Link } from 'react-router-dom';

import LayoutBloque from '../components/layout_bloque'

export const Acceso = () => {
  return (
    <div className='acceso'>
        <LayoutBloque>
          <h2 className='layout__bloque__subtitulo'> Acceso </h2>
          <div className='layout__bloque__inferior'>
            <div className='acceso__opcion'>
              <Link to='/acceso/cuidador'>
                <label> <input type='radio'/> Cuidador </label>
                <p> Monitor del desarrollo del niño/niña </p>
              </Link>
            </div>
            <div className='acceso__opcion'>
              <Link to='/acceso/pediatra'>
                <label> <input type='radio'/> Pediatra </label>
                <p> Persona que ingresará datos de desarrollo motor </p>
              </Link>
            </div>
          </div>
      </LayoutBloque>
    </div>
  )
}

export default Acceso