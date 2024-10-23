import React from 'react'
import { Link } from 'react-router-dom';

import Bloque from '../components/bloque'

export const Acceso = () => {
  return (
    <Bloque>
      <h2> Acceso </h2>
      <Link to="/acceso/pediatra">
        <button> Pediatra </button>
      </Link>
      <Link to="/acceso/cuidador">
        <button> Cuidador </button>
      </Link>
    </Bloque>
  )
}

export default Acceso