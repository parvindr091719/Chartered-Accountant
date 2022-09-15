import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar-dark bg-dark shadow">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">

                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <div className="container-fluid">
                                <Link to="/" className="navbar-brand">Chartered Accountants</Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarText">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link active">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/about" className="nav-link active">About Us</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/contact" className="nav-link active">Contact Us</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/calculater-currency" className="nav-link active">Calculator/Currency</Link>
                                        </li>
                                    </ul>
                                    {/* <span>
                                        <input className="search-bar" placeholder="Search Books"/>
                                    </span>                                 */}
                                    <span className="navbar-text text-white">
                                        Mr. Suraj Badhai
                                    </span> &npam
                                    <a target="_blank" id="action-list-11" className="dtKbfb  oYxtQd" rel="noreferrer"
                                    href="https://api.whatsapp.com/send?phone=918127976296&amp;text=" 
                                    ><span>WhatsApp</span></a>
                                </div>
                        </div>
                        </nav>
                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;