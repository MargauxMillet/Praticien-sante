import { Fragment, useContext, useEffect } from "react"
import { HeaderContext } from "../../../context"
import PageTitleWave from "../../../components/PageTitleWave";

import style from './index.module.css'

function Prices () {
    const { setHeaderImg, headerColor, setHeaderColor } = useContext(HeaderContext)
    
    useEffect(() => {
        setHeaderColor('lightBeige')
        setHeaderImg('sand.jpg')
        window.scrollTo(0, 0);
    }, []);

    return (
        <Fragment>
            <PageTitleWave title={<>Prestations<span className={`br ${style.br}`}></span>et tarifs</>}/>
            <div style={{height: "1500px", backgroundColor: `var(--${headerColor})`, paddingTop: "70px"}}>
                <h1>Prestations et tarifs</h1>
            </div>
        </Fragment>
    )
}

export default Prices