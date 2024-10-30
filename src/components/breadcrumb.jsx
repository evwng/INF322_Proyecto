import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();

  // Convertimos la ruta actual en un array para mostrar cada parte como miga de pan
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className='breadcrumb'>
      <ul className='breadcrumb__list'>
        <li>
          <Link to='/' className={`breadcrumb__link ${pathnames.length === 0 ? 'active' : ''}`}>
            Inicio
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return (
            <li key={to}>
              <Link
                to={to}
                className={`breadcrumb__link ${index === pathnames.length - 1 ? 'active' : ''}`}
              >
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;