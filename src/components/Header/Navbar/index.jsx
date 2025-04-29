import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { BurgerMenuContext } from "../../../context"
import style from "./index.module.css"

function Navbar () {
    const { setBurgerMenuOpen, isBurgerMenuOpen } = useContext(BurgerMenuContext)
    
    function LinkTo (event, url) {
        event.preventDefault()
        setBurgerMenuOpen(false)
        useNavigate(url)
    }

    return (
        <div className={`${style.navbar} ${isBurgerMenuOpen ? style.navbarBurgerMenu : ''}`}>
            <Link to="/" onClick={(event)=> LinkTo("/")}>Accueil</Link>
            <Link to="/prestations-et-tarifs" onClick={(event)=> LinkTo("/prestations-et-tarifs")}>Prestations et tarifs</Link>
            <Link to="/a-propos" onClick={(event)=> LinkTo("/a-propos")}>À propos</Link>
            <Link to="/prendre-rdv" onClick={(event)=> LinkTo("/prendre-rdv")} className="secondary-button">Prendre RDV</Link>
        </div> 
    )
}

export default Navbar