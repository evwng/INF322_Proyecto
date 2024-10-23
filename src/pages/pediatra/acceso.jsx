import React from 'react'
import { Link } from 'react-router-dom';

import Bloque from '../../components/bloque'
import SubBloque from '../../components/subbloque'

export const PediatraAcceso = () => {
  return (
    <div>
        <Bloque>
            <h2> Consulta </h2>
            <SubBloque>
                <form>
                    <label> 
                        Correo electrónico
                        <input
                            type="text"
                            placeholder="pediatra@clinica.cl"
                        />
                    </label>
                    <label> 
                        Contraseña
                        <input
                            type="password"
                            placeholder="********"
                        />
                    </label>
                </form>
                <Link to="/acceso">
                    <button> Volver </button>
                </Link>
                <Link to="/acceso/pediatra/inicio">
                    <button> Iniciar sesión </button>
                </Link>
            </SubBloque>
        </Bloque>
    </div>
  )
}

export default PediatraAcceso