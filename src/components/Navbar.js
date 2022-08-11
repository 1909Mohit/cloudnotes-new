import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";


const Navbar = () => {
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }
    let location = useLocation();
    useEffect(() => {

    }, [location]);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" style={{color:'orange'}} to="/"><img
                    src={logo}
                    alt=""
                    width="30"
                    height="30"
                    class="mx-2 d-inline-block align-text-top"
                />CloudNotes</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/home" ? "active" : ""}`} aria-current="page" to={!localStorage.getItem("token") ? `/` : "/home"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/new" ? "active" : ""}`} to="/new"> Add Note</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about"> About</Link>
                        </li>
                    </ul>
                    {
                        !localStorage.getItem('token') ? <form className="d-flex">
                            <Link to="/login" className="btn btn-success mx-1">Login</Link>
                            <Link to="/signup" className="btn btn-warning mx-1">Signup</Link>
                        </form> : <button onClick={handleLogout} className='btn btn-danger'>Logout</button>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar
