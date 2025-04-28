import { Link } from "react-router-dom"
import { Fragment, useContext } from "react"
import { BurgerMenuContext, HeaderContext } from "../../../context"

import Logo from "../../../assets/logo.svg"
import Navbar from "../Navbar"

import "./index.css"

function HeaderBar() {
    const { setBurgerMenuOpen } = useContext(BurgerMenuContext)
    const { isHeaderFullWidth } = useContext(HeaderContext)
    
    return (
        <Fragment>
            <Link to="/" className="logo"><img src={Logo} alt="Logo" /></Link>
            { isHeaderFullWidth && 
                <Navbar /> 
            } 
            { !isHeaderFullWidth && 
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="burger-menu-button" onClick={()=>setBurgerMenuOpen(true)}>
                    <path d="M2 1.5H32M2 21.5H32M2 11.5H32" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
            }  
        </Fragment> 
    )
}

export default HeaderBar