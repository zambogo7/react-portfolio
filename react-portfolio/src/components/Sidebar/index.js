import React from 'react'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="Logo"/>
            <img className="sub-logo"  src={LogoSubtitle} alt="logo"/>
        </Link>
        <nav>
            <NavLink 
                exact="true" 
                activeclassName="active" 
                to="/"
            >
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink 
                exact="true" 
                activeclassName="active" 
                className="about-link" 
                to="/about"
            >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink 
                exact="true" 
                activeclassName="active" 
                className="contact-link" 
                to="/contact"
            >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                    target="_blank" 
                    rel='noreferrer' 
                    href='https://www.linkedin.com/in/zedekiah-ochieng-2ba296192/'
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>

            <li>
                <a 
                    target="_blank" 
                    rel='noreferrer' 
                    href='https://github.com/zambogo7'
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>

        </ul>

    </div>
)

export default Sidebar