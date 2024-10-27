import React from 'react';

const TablaControles = ({ controles }) => {
  return (
    <div className="tabla__controles">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Peso (Kg)</th>
            <th>Estatura (cm)</th>
          </tr>
        </thead>
        <tbody>
          {controles.map((control) => (
            <tr key={control.id}>
              <td>{control.nombre}</td>
              <td>{control.peso}</td>
              <td>{control.estatura}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaControles;
