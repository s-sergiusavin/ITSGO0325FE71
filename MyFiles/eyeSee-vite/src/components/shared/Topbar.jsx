import React from 'react';
import logo from '../../assets/logo.png';

const Topbar = () => {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      padding: '10px 20px',
      borderBottom: '1px solid #ddd',
      backgroundColor: 'white'
    }}>
      <img src={logo} alt="eyeSEE logo" style={{ height: '40px', marginRight: '10px' }} />
      <h1 style={{ fontSize: '1.5rem' }}>eyeSEE</h1>
    </header>
  );
};

export default Topbar;
