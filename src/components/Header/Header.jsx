import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className='navbar'>
      <div className='container-fluid'>
        <div className='d-flex'>
          <NavLink to='/' >Home</NavLink>
          <NavLink to='/hireme'>Orçamentos</NavLink>
          <a href="https://github.com/atmmoreira/project.resume.vite.react" target="_blank" className='btn btn-sm text-bg-warning'>Repositório</a>
        </div>
        <div>
          <a href='#'>
            <img
              src='./assets/images/IconPortuguese.png'
              alt='IconPortuguese'
            />
          </a>
          <a href='#'>
            <img src='./assets/images/IconEnglish.png' alt='IconEnglish' />
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Header;
