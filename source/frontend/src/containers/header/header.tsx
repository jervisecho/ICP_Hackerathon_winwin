import HeaderConnect from "@container/header/header.connect.tsx";
import {Link} from "react-router-dom";

const HeaderContainer = () => {
    return (
        <header className="z-fixed header-absolute-top header-transparent sticky-reverse">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container position-relative">
                    <a className="navbar-brand " href="index.html">
                        <img src="/assets/img/logo/icp.png" alt="" className="img-fluid navbar-brand-light w-50"/>
                        <img src="/assets/img/logo/icp.png" alt="" className="img-fluid navbar-brand-dark w-50"/>
                        <sub className="d-none d-sm-inline-block position-absolute end-0 bottom-0 me-n2 mb-1 ">ICP HACKERTON</sub>
                    </a>
                    <HeaderConnect />
                    <div className="collapse navbar-collapse" id="mainNavbarTheme">
                        <ul className="navbar-nav me-lg-3 ms-lg-auto">
                            <li className="nav-item">
                                <a href="index.html" className="nav-link active">Home</a>
                            </li>
                            <li className="nav-item">
                                <Link to={"/create"} className="nav-link">Create</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default HeaderContainer;