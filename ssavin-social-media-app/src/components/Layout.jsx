import Navigation from "./Navigation";
import styles from './Layout.module.scss';

const Layout = ({children}) => {
    return (
        <>
            <Navigation/>
            <main className={styles.mainContent}>{children}</main>
        </>
    )
}

export default Layout;