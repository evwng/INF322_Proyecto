import React from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'

import Logo from '../assets/logo.png'
import Inicio from '../pages/inicio'
import Acceso from '../pages/acceso'
import CuidadorAcceso from '../pages/cuidador/acceso'
import CuidadorInicio from '../pages/cuidador/inicio'
import PediatraAcceso from '../pages/pediatra/acceso'
import PediatraInicio from '../pages/pediatra/inicio'
import PediatraInsertar from '../pages/pediatra/insertar'

const MostrarTitulo = () => {
  const ubicacion = useLocation();
  return ubicacion.pathname === '/' ? <h1 className='layout__titulo'> MiPequeñoProgreso </h1> : null;
}

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <div className='layout__header'>
          <Link to='/'>
              <img src={Logo} className='layout__logo' alt='logo'/>
          </Link>
          <MostrarTitulo/>
        </div>
        <div className='layout__pagina'>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/acceso' element={<Acceso />} />
            <Route path='/acceso/cuidador' element={<CuidadorAcceso />} />
            <Route path='/acceso/cuidador/inicio' element={<CuidadorInicio />} />
            <Route path='/acceso/pediatra' element={<PediatraAcceso />} />
            <Route path='/acceso/pediatra/inicio' element={<PediatraInicio />} />
            <Route path='/acceso/pediatra/insertar' element={<PediatraInsertar />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout