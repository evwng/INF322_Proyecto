import React from 'react'
import { Link } from 'react-router-dom';

export const Inicio = () => {
  return (
    <div className="inicio">
      <h1> Mi Pequeño Progreso </h1>
      <p> Monitorea el desarrollo de tu bebé </p>
      <Link to="/acceso">
        <button> Comienza aquí </button>
      </Link>
    </div>
  )
}

export default Inicio