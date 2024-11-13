import React from 'react'
import { Link } from 'react-router-dom';

import LayoutBloque from '../../components/layout_bloque'
import LayoutSubbloque from '../../components/layout_subbloque'

export const PediatraAcceso = () => {
  return (
    <div className='pediatra__acceso'>
        <LayoutBloque>
            <h2 className='layout__bloque__subtitulo'> Iniciar sesión </h2>
            <div className='layout__bloque__inferior'>
                <LayoutSubbloque>
                    <div className='pediatra__acceso__subbloque__entradas'>
                        <div className='pediatra__acceso__subbloque__entradas__entrada'>
                            <label> Correo electrónico </label>
                            <input type="text" placeholder=" pediatra@clinica.cl"/>
                        </div>
                        <div className='pediatra__acceso__subbloque__entradas__entrada'>
                            <label> Contraseña </label>
                            <input type="password" placeholder=" ********"/>
                        </div>
                    </div>
                    <div className='pediatra__acceso__subbloque__opciones'>
                        <Link to="/acceso/pediatra/controles" className='pediatra__acceso__subbloque__opciones__1'>
                            <button> Iniciar sesión </button>
                        </Link>
                        <div className='pediatra__acceso__subbloque__opciones__2'>
                            <Link to="/acceso">
                                <button> Volver </button>
                            </Link>
                        </div>
                    </div>
                </LayoutSubbloque>
            </div>
        </LayoutBloque>
    </div>
  )
}

export default PediatraAcceso