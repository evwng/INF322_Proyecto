import React from 'react'
import { Link } from 'react-router-dom';

import Bloque from '../../components/bloque'
import SubBloque from '../../components/subbloque'

export const CuidadorAcceso = () => {
  return (
    <div className='cuidador__acceso'>
        <Bloque>
            <h2> Consulta </h2>
            <SubBloque>
                <form>
                    <label> 
                        RUT del paciente
                        <input
                            type="text"
                            placeholder="11.111.111-k"
                        />
                    </label>
                </form>
                <Link to="/acceso">
                    <button> Volver </button>
                </Link>
                <Link to="/acceso/cuidador/inicio">
                    <button> Consultar </button>
                </Link>
            </SubBloque>
        </Bloque>
    </div>
  )
}

export default CuidadorAcceso