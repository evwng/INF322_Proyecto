import React from 'react'
import { Link } from 'react-router-dom';

import LayoutBloque from '../../components/layout_bloque'
import LayoutSubbloque from '../../components/layout_subbloque'

export const PediatraInsertar = () => {
  return (
    <div className='pediatra__insertar'>
        <LayoutBloque>
            <h2 className='layout__bloque__subtitulo'> Ingresar datos </h2>
            <div className='layout__bloque__inferior'>
                <LayoutSubbloque>
                    <div className='pediatra__insertar__subbloque__entradas'>
                        <div className='pediatra__insertar__subbloque__entradas__entrada'>
                            <label> RUT del paciente </label>
                            <input type="text" placeholder=" 11.111.111-k"/>
                        </div>
                        <div className='pediatra__insertar__subbloque__entradas__entrada'>
                            <label> Peso [kg] </label>
                            <input type="text" placeholder=" Y"/>
                        </div>
                        <div className='pediatra__insertar__subbloque__entradas__entrada'>
                            <label> Estatura [cm] </label>
                            <input type="text" placeholder=" Y"/>
                        </div>
                    </div>
                    <div className='pediatra__insertar__subbloque__opciones'>
                        <Link to="/acceso/pediatra/inicio" className='pediatra__acceso__subbloque__opciones__1'>
                            <button> Agregar </button>
                        </Link>
                        <div className='pediatra__insertar__subbloque__opciones__2'>
                            <Link to="/acceso/pediatra/inicio">
                                <button> Cancelar </button>
                            </Link>
                        </div>
                    </div>
                </LayoutSubbloque>
            </div>
        </LayoutBloque>
    </div>
  )
}

export default PediatraInsertar