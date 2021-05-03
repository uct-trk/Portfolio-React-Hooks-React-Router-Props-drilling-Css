import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    // hamburger menu icon değişimi 
    const handleClick = () => {
        setClick(!click)
    }

    const closeMobilMenu = () => {
        setClick(false)
    }

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener("resize", showButton)

    return (
        <React.Fragment>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobilMenu}>
                        UGRCNTRK <i class="fas fa-film"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobilMenu}>
                                Anasayfa
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/services" className="nav-links" onClick={closeMobilMenu}>
                                Hizmetlerimiz
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/about" className="nav-links" onClick={closeMobilMenu}>
                                Hakkımızda
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobilMenu}>
                                İncele
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle="btn--outline">İncele</Button>}
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar
