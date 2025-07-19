import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside style={{ width: '200px', padding: '1rem' }}>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/landingpage">Landing Page</NavLink></li>
          <li><NavLink to="/profile">Profile</NavLink></li>
        <li><NavLink to="/Signin">Log Out</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
