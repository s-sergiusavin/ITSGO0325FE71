import Navigation from "./Navigation";
import { useLocation } from "react-router-dom";

const Layout = ({children}) => {
    const location = useLocation(); //returneaza locatia obiectului
    const isAuthPage = location.pathname === '/auth'; //cu pathname citim path-ul obiectului

    return (
        <>
        {!isAuthPage && <Navigation/> } 
            <main>{children}</main>
        </>
        // daca pagina curenta nu este '/auth' atunci expresia !isAuthPage este true si SE RANDEAZA componenta <Navigation/>
        // daca pagina curenta este '/auth' atunci expresia !isAuthPage este falsa si NU SE RANDEAZA componenta <Navigation/>
    )

}

export default Layout;

