import React from 'react';
import './Header.css';

function Header() {
  return (
    <nav className='navbar'>
      <div className='container-fluid'>
        <div className='d-flex'>
          <a href='/' className='active'>
            Home
          </a>
          {/* <a href="/hired">Orçamentos</a> */}
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
