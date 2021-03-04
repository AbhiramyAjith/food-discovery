import React from 'react';
import './Header.css';
import logoUrl from '../../assets/crown.svg';
const Header = () => (
  <div className="header">
    <img src={logoUrl} alt="Tesla" />
    <h1>Restaurant Discovery Platform</h1>

    
  <a href='./'>LOCATION   </a>
      <a href='./'> SIGNIN</a>
      </div>
  
)
export default Header;