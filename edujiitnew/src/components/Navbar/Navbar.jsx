import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import logo from '../../assets/assets/jiitlogo.png';
import Student from '../Student/Student';
import menu_icon from '../../assets/assets/menu-icon.png';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isSticky = window.scrollY > 50;
            setSticky(isSticky);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`container ${sticky ? 'darknav' : ''}`}>
            <img src={logo} alt='' className='logo' />
            <ul className={`navbar-buttons ${menuOpen ? 'open' : ''}`}>
                <li><Link to='hero2' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='program2' smooth={true} offset={-260} duration={500}>Programs</Link></li>
                <li><Link to='about2' smooth={true} offset={-150} duration={500}>About us</Link></li>
                <li><Link to='campus2' smooth={true} offset={-260} duration={500}>Campus</Link></li>
                <li><Link to='testimonials2' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
                <li><Link to='contact' smooth={true} offset={-260} duration={500}>Contact Us</Link></li>
                <li><Student/></li> 
            </ul>
            <img src={menu_icon} alt='' className='menuicon' onClick={toggleMenu}/>
        </nav>
    );
};

export default Navbar;
