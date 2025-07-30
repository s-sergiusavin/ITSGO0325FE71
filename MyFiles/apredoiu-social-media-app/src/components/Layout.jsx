import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import styles from './Layout.module.scss';

const Layout = () => {
  return (
    <>
      <Navigation />
      <main className={styles.mainContentAuth}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
