import { Fragment, useContext, useEffect } from "react"
import PageTitleWave from "../../../components/PageTitleWave";
import { HeaderContext } from "../../../context";

import style from './index.module.css'

function Booking() {
    const { setHeaderImg, headerColor, setHeaderColor } = useContext(HeaderContext)
    
    useEffect(() => {
        setHeaderColor('white')
        setHeaderImg('office.jpg')
        window.scrollTo(0, 0);
    }, []);

    return (
        <Fragment>
            <PageTitleWave title={<>Je prends <span className={`br ${style.br}`}></span>rendez-vous</>} />
            <div style={{height: "1500px", backgroundColor: `var(--${headerColor})`, paddingTop: "70px"}}>
                <h1>Prendre rdv</h1>
            </div>
        </Fragment>
    )
}

export default Booking