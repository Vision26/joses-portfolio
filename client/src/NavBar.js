import React from "react"
import { Link } from 'react-router-dom'
import './App.css'

function NavBar() {

    return (
        <div className="navbar">
            <div className='logo'>
                <Link className='navbar-Links' to="/contact">J A H</Link>
            </div>
            <ul className='nav-links'>
                <input type='checkbox' id='checkbox_toggle' />
                <label for='checkbox_toggle' className='hamburger'>&#9776;</label>
                <div className='menu'>
                    <li><Link  className='navbar-Links' to="/">J O S E</Link></li>
                    <li><Link  className="navbar-Links" to="about">A B O U T</Link></li>
                    <li><Link  className='navbar-Links' to="/projects">P R O J E C T S</Link></li>
                    <li><Link  className='navbar-Links' to="/contact">C O N T A C T</Link></li>
                </div>
            </ul>
        </div>
    )
}

export default NavBar