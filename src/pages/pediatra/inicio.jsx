import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TablaControles from '../../components/tabla_controles.jsx';

const PediatraInicio = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const controles = location.state?.controles || [
    { id: 1, rut: '21.111.111-1', peso: 7, estatura: 65 },
    { id: 2, rut: '22.222.222-2', peso: 3, estatura: 45 },
  ];

  const irAInsertar = () => {
    navigate('/acceso/pediatra/inicio/insertar', { state: { controles } }); // Navegar con estado
  };

  return (
    <div className="pediatra__inicio">
      {/* Bienvenida */}
      <div className="bienvenida">
        <h1>Bienvenida, X</h1>
        <p>Aquí puede ver los controles realizados y agregar nuevos datos.</p>
      </div>

      {/* Tabla de Controles */}
      <TablaControles controles={controles} />

      {/* Botón para Agregar Nuevo Control */}
      <div className="agregar-control">
        <button onClick={irAInsertar}>Agregar Nuevo Control</button>
      </div>
    </div>
  );
};

export default PediatraInicio;
