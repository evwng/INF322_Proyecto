import React from 'react'
import { Link } from 'react-router-dom';

import LayoutBloque from '../../components/layout_bloque'
import LayoutSubbloque from '../../components/layout_subbloque'

export const PediatraInsertar = () => {
  return (
    <div className='pediatra__insertar'>
        <LayoutBloque>
            <h2 className='layout__bloque__subtitulo'> Consulta </h2>
            <div className='layout__bloque__inferior'>
                <LayoutSubbloque>
                    <form>
                        <label> 
                            RUT del paciente
                            <input
                                type="text"
                                placeholder="11.111.111-k"
                            />
                        </label>
                        <label> 
                            Peso [kg]
                            <input
                                type="text"
                                placeholder="Y"
                            />
                        </label>
                    </form>
                    <Link to="/acceso/pediatra/inicio">
                        <button> Cancelar </button>
                    </Link>
                    <Link to="/acceso/pediatra/inicio">
                        <button> Agregar </button>
                    </Link>
                </LayoutSubbloque>
            </div>
        </LayoutBloque>
    </div>
  )
}

export default PediatraInsertar