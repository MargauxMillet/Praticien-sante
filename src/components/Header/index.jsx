import { Fragment, useContext } from "react"
import { BurgerMenuContext, HeaderContext } from "../../context"

import BurgerMenu from "./BurgerMenu"
import HeaderBar from "./HeaderBar"

import "./index.css"

function Header() {
    const { headerImgSource, headerHero, headerTop } = useContext(HeaderContext)
    const { isBurgerMenuOpen, setBurgerMenuOpen } = useContext(BurgerMenuContext)

    return (
        <Fragment>
            {headerHero && 
                <header className="hero-banner" style={{backgroundImage: `url(${headerImgSource})`}}>
                    <div className="header">
                        <HeaderBar />
                    </div>
                </header>
            }

            { !headerHero && 
                <header className="header" style={{top: headerTop}}>
                    <HeaderBar /> 
                </header>
            } 

            {isBurgerMenuOpen && 
                <Fragment>
                    <div onClick={()=>setBurgerMenuOpen(false)} className="overlay"></div>
                    <BurgerMenu />
                </Fragment>
            }
        </Fragment>
    )
}

export default Header