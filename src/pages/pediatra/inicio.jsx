import React from 'react';
import { Link } from 'react-router-dom';
import TablaControles from '../../components/tabla_controles.jsx';

// Datos de prueba
const controles_test = [
  { id: 1, nombre: 'Juan Pérez', peso: 25, estatura: 120 },
  { id: 2, nombre: 'Ana Gómez', peso: 30, estatura: 130 },
];

const PediatraInicio = () => {
  return (
    <div className="pediatra__inicio">
      {/* Bloque 1: Bienvenida */}
      <div className="bienvenida">
        <h1>Bienvenida, X</h1>
        <p>Aquí puede ver los controles realizados y agregar nuevos datos.</p>
      </div>

      {/* Bloque 2: Componente de Tabla */}
      <TablaControles controles={controles_test} />

      {/* Bloque 3: Botón para agregar nuevo control */}
      <div className="agregar-control">
        <Link to="/acceso/pediatra/insertar">
          <button>Agregar Nuevo Control</button>
        </Link>
      </div>
    </div>
  );
};

export default PediatraInicio;