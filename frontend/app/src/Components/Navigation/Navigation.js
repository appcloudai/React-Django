import React , { useState } from 'react'
import {Link} from 'react-router-dom'
import '../main.css'
function Navigation(){

const [menuOpen, setMenuOpen] = useState(false)
const handleClick = () => setMenuOpen(!menuOpen);

return (
    <div>
        <div className={menuOpen ? 'Navbar active': 'Navbar'} >
            <div className="wrapper">
                
                <div className="Navbar_logo">
                    <Link to="/" className="header_link">
                            App Cloud <span className='cloud_app'> AI </span>
                    </Link>
                </div>
            
                <ul className="Navbar_desktop">
                    <div className="itemContainer">
                        <li className="listitem">
                            <Link to="/" className="atext">
                            Home
                            </Link>               
                        </li>
                    </div> 
                    <div className="itemContainer">
                        <li className="listitem">
                            <Link to="/about" className="atext">
                            About
                            </Link>         
                        </li>
                    </div> 
                    <div className="itemContainer">
                        <li className="listitem">
                            <Link to="/contact" className="atext">
                            Contact
                            </Link>
                        </li> 
                    </div>    
                </ul>
            
                <div className="sidebar_navigation">
                    <div className="hamburger" onClick={handleClick}>
                        <span></span><span></span><span></span><span></span>
                    </div>
                </div>

            </div>   
        </div>

        <div className={menuOpen ? 'menu active': 'menu'} >
            <ul>
                <li onClick={handleClick}>
                    <Link to="/" className="navigation_mobile_home">
                        Home
                    </Link>
                </li>
                <li onClick={handleClick}>
                    <Link  to="/about" className="navigation_mobile_about">
                    About
                    </Link>
                </li>
                <li onClick={handleClick}>
                    <Link to="/contact"  className="navigation_mobile_contact">
                    Contact
                    </Link>
                </li>   
            </ul>
        </div>  
        
    </div>
    )
}

export default Navigation


 
