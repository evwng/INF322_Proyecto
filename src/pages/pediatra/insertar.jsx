import React from 'react'
import { Link } from 'react-router-dom';

import Bloque from '../../components/bloque'
import SubBloque from '../../components/subbloque'

export const PediatraInsertar = () => {
  return (
    <div>
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
                    <button> Insertar </button>
                </Link>
            </SubBloque>
        </Bloque>
    </div>
  )
}

export default PediatraInsertar