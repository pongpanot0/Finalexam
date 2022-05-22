import React, { useState } from 'react'
import "./Navbar.css"
import { FiMenu, FiX } from 'react-icons/fi'
import { NavLink } from 'react-router-dom';
/* const navbarLinks = {
    [{url:'/home',title:'home'}]
} */


const Navbar = ({ navbarLinks }) => {
    const [menuClicked, setMenuClicked] = useState(false);

    const toggleMenuClick = () => {
        setMenuClicked(!menuClicked);
    }

    return (


        <div>
            <nav className='navbar'>

                <span className='navbar_logo'>FinalExam</span>

                {menuClicked ? (
                    <FiMenu size={25} className='navbar_menu' onClick={toggleMenuClick} />
                ) : (
                    <FiX size={25} className='navbar_menu' onClick={toggleMenuClick} />
                )
                }

                <ul className={menuClicked ? "navbar_list" : "navbar_list navbar_list--active"}>
                    {navbarLinks.map(item => {
                        return (

                            <li className='navbar_item' key={item.title}>



                                <NavLink className='navbar_link' to={item.url}> {item.title}</NavLink>




                            </li>

                        );
                    })}
                </ul>

            </nav>
        </div>

    )
}
export default Navbar