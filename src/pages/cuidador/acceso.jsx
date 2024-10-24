import React from 'react'
import { Link } from 'react-router-dom';

import LayoutBloque from '../../components/layout_bloque'
import LayoutSubbloque from '../../components/layout_subbloque'

export const CuidadorAcceso = () => {
  return (
    <div className='cuidador__acceso'>
        <LayoutBloque>
            <h2 className='layout__bloque__subtitulo'> Consulta </h2>
            <div className='layout__bloque__inferior'>
                <LayoutSubbloque>
                    <div className='cuidador__acceso__subbloque__input'>
                        <label> RUT del paciente </label>
                        <input type='text' placeholder='11.111.111-k'/>
                    </div>
                    <div className='cuidador__acceso__subbloque__opciones'>
                        <Link to="/acceso"> <button className='volver'> Volver </button> </Link>
                        <Link to="/acceso/cuidador/inicio"> <button className='consultar'> Consultar </button> </Link>
                    </div>
                </LayoutSubbloque>
            </div>
        </LayoutBloque>
    </div>
  )
}

export default CuidadorAcceso