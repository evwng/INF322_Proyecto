import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Logo from '../assets/logo.png'
import Inicio from '../pages/inicio'
import Acceso from '../pages/acceso'
import CuidadorAcceso from '../pages/cuidador/acceso'
import CuidadorInicio from '../pages/cuidador/inicio'
import PediatraAcceso from '../pages/pediatra/acceso'
import PediatraInicio from '../pages/pediatra/inicio'
import PediatraInsertar from '../pages/pediatra/insertar'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <Link to='/'>
            <img src={Logo} height={50} alt='logo'/>
        </Link>
        <div className='layout__page'>
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