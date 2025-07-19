import React from 'react';
import { NavLink } from 'react-router-dom';

const Bottombar = () => {
  return (
    <footer style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'space-around',
      padding: '10px',
      borderTop: '1px solid #ddd',
      backgroundColor: 'white'
    }}>
      <NavLink to="/home">🏠</NavLink>
      <NavLink to="/landingpage">🔍</NavLink>
      <NavLink to="/signin">Logout</NavLink>
      <NavLink to="/profile">👤</NavLink>
    </footer>
  );
};

export default Bottombar;
