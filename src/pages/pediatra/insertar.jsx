import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import LayoutBloque from '../../components/layout_bloque'
import LayoutSubbloque from '../../components/layout_subbloque'

const PediatraInsertar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [controles, setControles] = useState(location.state?.controles || []);
  const [rut, setRut] = useState('');
  const [peso, setPeso] = useState('');
  const [estatura, setEstatura] = useState('');

  const handleAgregar = () => {
    const nuevoControl = {
      id: controles.length + 1,
      rut,
      peso: Number(peso),
      estatura: Number(estatura),
    };

    setControles([...controles, nuevoControl]);
    navigate('/acceso/pediatra/controles', { state: { controles: [...controles, nuevoControl] } });
  };

  return (
    <div className='pediatra__insertar'>
        <LayoutBloque>
            <h2 className='layout__bloque__subtitulo'> Ingresar datos </h2>
            <div className='layout__bloque__inferior'>
                <LayoutSubbloque>
                    <div className='pediatra__insertar__subbloque__entradas'>
                        <div className='pediatra__insertar__subbloque__entradas__entrada'>
                            <label> RUT del paciente </label>
                            <input type="text" placeholder="RUT" value={rut} onChange={(e) => setRut(e.target.value)} />
                        </div>
                        <div className='pediatra__insertar__subbloque__entradas__entrada'>
                            <label> Peso [kg] </label>
                            <input type="text" placeholder="Peso" value={peso} onChange={(e) => setPeso(e.target.value)} />
                        </div>
                        <div className='pediatra__insertar__subbloque__entradas__entrada'>
                            <label> Estatura [cm] </label>
                            <input type="text" placeholder="Estatura" value={estatura} onChange={(e) => setEstatura(e.target.value)} />
                        </div>
                    </div>
                    <div className='pediatra__insertar__subbloque__opciones'>
                        <div className='pediatra__acceso__subbloque__opciones__1'>
                            <button onClick={handleAgregar}>Agregar</button>
                        </div>
                        <div className='pediatra__insertar__subbloque__opciones__2'>
                            <button onClick={() => navigate('/acceso/pediatra/controles')}>Cancelar</button>
                        </div>
                    </div>
                </LayoutSubbloque>
            </div>
        </LayoutBloque>
    </div>
  );
};

export default PediatraInsertar;