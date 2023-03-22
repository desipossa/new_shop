import { Link, Outlet, useLocation } from "react-router-dom";
import Nav from "./pages/Nav";

import logo from "./images/top_logo.png";
import Search from "./pages/Search";

const Layout = ({ shopData, categoryItm }) => {
    return (
        <div className="Wrap inner">
            <header className="header">
                <h1><Link to={`/`}><img src={logo} alt="" /></Link></h1>
                <Search />
            </header>
            <Nav categoryItm={categoryItm} />
            <Outlet />
        </div>
    )
}

export default Layout;