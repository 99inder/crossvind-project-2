import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../../../assets/images/logo.png'

import './styles.css'
import data from '../../../../assets/navLinkData'

const Navbar = () => {

    // setting mobile view
    const [isMenuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        if (window.screen.width <= 940) {
            setMenuOpen(!isMenuOpen);

            // Toggle the 'no-scroll' class on the body when the menu is opened/closed
            if (!isMenuOpen) {
                document.body.classList.add('no-scroll');
            } else {
                document.body.classList.remove('no-scroll');
            }
        }
    };

    // change nav color on scroll
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        }
        else {
            setColor(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeColor);

        return () => {
            window.removeEventListener('scroll', changeColor);
        };
    }, []);

    return (
        <div className={color ? "header header-bg" : "header"}>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                {
                    (data && data.length > 0)
                    &&
                    <>
                        <div className='hamburger' onClick={toggleMenu}>
                            {isMenuOpen ? (<FaTimes size={30} />)
                                : (<FaBars size={30} />)}
                        </div>

                        <ul className={`${isMenuOpen ? "nav-menu active" : "nav-menu"} ${color && "scrolled"}`}>
                            {
                                data.map((linkData) => (
                                    <li className='nav-item' key={linkData.id}>
                                        <a href={linkData.link} onClick={toggleMenu}>{linkData.title}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </>
                }
            </nav>
        </div>
    )
}

export default Navbar