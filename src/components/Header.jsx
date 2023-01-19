import React from 'react'
import logoMarvel from '../images//marvel-logo-negro.png'


const Header = () => {
    return (
      <header className="header-container">
        <img src={logoMarvel} alt="logo-creatify" />
        <div className='imageCharacter-header-container'>
        </div>
      </header>
    );
}

export  { Header }
