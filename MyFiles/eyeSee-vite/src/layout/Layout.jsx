import React from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from '../components/shared/Topbar';
import Sidebar from '../components/shared/Sidebar';
import Bottombar from '../components/shared/Bottombar';

const Layout = () => {
  return (
    <div className="app-layout">
      <Topbar />
      <div className="main-content" style={{ display: 'flex' }}>
        <Sidebar />
        <section style={{ flex: 1, padding: '1rem' }}>
          <Outlet />
        </section>
      </div>
      <Bottombar />
    </div>
  );
};

export default Layout;
