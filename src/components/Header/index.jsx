import { Fragment, useContext } from "react"
import { BurgerMenuContext, HeaderContext } from "../../context"

import BurgerMenu from "./BurgerMenu"
import HeaderBar from "./HeaderBar"

import style from "./index.module.css"

function Header() {
    const { headerImgSource, headerHero, headerTop } = useContext(HeaderContext)
    const { isBurgerMenuOpen, setBurgerMenuOpen } = useContext(BurgerMenuContext)

    return (
        <Fragment>
            {headerHero && 
                <header className={style.heroBanner} style={{backgroundImage: `url(${headerImgSource})`}}>
                    <div className={style.header}>
                        <HeaderBar />
                    </div>
                </header>
            }

            { !headerHero && 
                <header className={style.header} style={{top: headerTop}}>
                    <HeaderBar /> 
                </header>
            } 

            {isBurgerMenuOpen && 
                <Fragment>
                    <div onClick={()=>setBurgerMenuOpen(false)} className={style.overlay}></div>
                    <BurgerMenu />
                </Fragment>
            }
        </Fragment>
    )
}

export default Header