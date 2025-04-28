import { useContext } from "react"
import { HeaderContext } from "../../../context"

function HomeAdmin() {
    const { setHeaderImg, setHeaderColor } = useContext(HeaderContext)
    useEffect(() => {
        setHeaderColor('')
        setHeaderImg('')
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <Fragment>
            <div style={{height: "1500px", paddingTop: "70px"}}>
                <h1>Accueil admin</h1>
            </div>
        </Fragment>
    )
}

export default HomeAdmin