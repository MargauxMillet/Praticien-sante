import { Fragment, useContext, useEffect } from "react"
import { HeaderContext } from "../../../context"
import PageTitleWave from "../../../components/PageTitleWave";

function About () {
    const { setHeaderImg, headerColor, setHeaderColor } = useContext(HeaderContext)
    
    useEffect(() => {
        setHeaderColor('white')
        setHeaderImg('sand.jpg')
        window.scrollTo(0, 0);
    }, []);

    return (
        <Fragment>
            <PageTitleWave title="À propos"/>
            <div style={{height: "1500px", backgroundColor: `var(--${headerColor})`, paddingTop: "70px"}}>
                <h1>Prestations et tarifs</h1>
            </div>
        </Fragment>
    )
}

export default About