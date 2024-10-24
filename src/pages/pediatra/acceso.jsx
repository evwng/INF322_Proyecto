import React from 'react'
import { Link } from 'react-router-dom';

import LayoutBloque from '../../components/layout_bloque'
import LayoutSubbloque from '../../components/layout_subbloque'

export const PediatraAcceso = () => {
  return (
    <div className='pediatra__acceso'>
        <LayoutBloque>
            <h2 className='layout__bloque__subtitulo'> Consulta </h2>
            <div className='layout__bloque__inferior'>
                <LayoutSubbloque>
                    <div className='layout__bloque__input'>
                        <div>
                            <label> Correo electrónico </label>
                            <input type="text" placeholder="pediatra@clinica.cl"/>
                        </div>
                        <div>
                            <label> Contraseña </label>
                            <input type="password" placeholder="********"/>
                        </div>
                    </div>
                    <div className='layout__bloque__opciones'>
                        <Link to="/acceso">
                            <button className='layout__bloque__opciones__volver'> Volver </button>
                        </Link>
                        <Link to="/acceso/pediatra/inicio">
                            <button className='layout__bloque__opciones__sesion'> Iniciar sesión </button>
                        </Link>
                    </div>
                </LayoutSubbloque>
            </div>
        </LayoutBloque>
    </div>
  )
}

export default PediatraAcceso