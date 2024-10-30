import React from 'react';

const TablaControles = ({ controles }) => {
  return (
    <div className="tabla__controles">
      <table>
        <thead>
          <tr>
            <th>Rut</th>
            <th>Peso (Kg)</th>
            <th>Estatura (cm)</th>
          </tr>
        </thead>
        <tbody>
          {controles.map((control) => (
            <tr key={control.id}>
              <td>{control.rut}</td>
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
