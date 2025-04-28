import { useContext } from "react"
import { BurgerMenuContext } from "../../../context"

import Logo from "../../../assets/logo.svg"
import Navbar from "../Navbar"

import "./index.css"

function BurgerMenu() {
        const { setBurgerMenuOpen, burgerMenuRight } = useContext(BurgerMenuContext)
    
    return (
        <div style={{right: burgerMenuRight}} className="burger-menu">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="back" onClick={()=>setBurgerMenuOpen(false)}>
                <path d="M2 23.2134L23.2132 2.00018M2 2L23.2132 23.2132" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            <img src={Logo} alt="Logo" />
            <div className="separator"></div>
            <Navbar />
        </div> 
    )
}

export default BurgerMenu