import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState<boolean>(false);

    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo">STAR WARS</Link>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/people' className='nav-links' onClick={closeMobileMenu}>People</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;