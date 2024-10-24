import React from 'react'
import { Link } from 'react-router-dom';

export const PediatraInicio = () => {
  return (
    <div className="inicio">
        <h1> Acá debería estar la tabla </h1>
        <Link to="/acceso/pediatra/insertar">
          <button> Ingresar datos </button>
        </Link>
    </div>
  )
}

export default PediatraInicio