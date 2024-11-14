import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TablaControles from '../../components/tabla_controles.jsx';

const PediatraInicio = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const obtenerFechaActual = () => {
    const fecha = new Date();
    return fecha.toISOString().split('T')[0]; // Formato 'YYYY-MM-DD'
  };
  
  const controles = location.state?.controles || [
    { id: 1, rut: '21.111.111-1', peso: 7, estatura: 65, fecha: obtenerFechaActual() },
    { id: 2, rut: '22.222.222-2', peso: 3, estatura: 45, fecha: obtenerFechaActual() },
  ];

  const irAInsertar = () => {
    navigate('/acceso/pediatra/controles/insertar', { state: { controles } }); // Navegar con estado
  };

  // useEffect para actualizar fecha y hora
  useEffect(() => {
    const timer = setInterval(() => {
      setFechaHora(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  
  // Estado para la fecha y hora
  const [fechaHora, setFechaHora] = useState(new Date());

  return (
    <div className="pediatra__inicio">
      {/* Bienvenida */}
      <div className="bienvenida">
          {/* Mostrar fecha y hora */}
          <p className="fecha-hora">
          {fechaHora.toLocaleDateString()} - {fechaHora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
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
