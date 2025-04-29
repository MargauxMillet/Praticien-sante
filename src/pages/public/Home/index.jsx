import { Fragment, useContext, useEffect } from "react"
import { HeaderContext } from "../../../context"
import PageTitleWave from "../../../components/PageTitleWave";
import { Link } from "react-router-dom";
import portrait from "../../../assets/portrait.jpg"

import style from './index.module.css'

function Home() {
    const { setHeaderImg, headerColor, setHeaderColor } = useContext(HeaderContext)
        
    useEffect(() => {
        setHeaderColor('lightBeige')
        setHeaderImg('sand.jpg')
        window.scrollTo(0, 0);
    }, []);
    return (
        <Fragment>
            <PageTitleWave title="Michel Canonico" subtitle="Sophrologie et Réflexologie plantaire" />
            <div style={{height: "1500px", backgroundColor: `var(--${headerColor})`, paddingTop: "50px"}}>
                <h1>Accueil</h1>
            </div>
        </Fragment> 
    )
}

export default Home