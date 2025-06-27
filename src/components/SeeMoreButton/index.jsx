import { useContext, useEffect, useState } from "react"
import { WindowContext } from "../../context"

function SeeMoreButton ({textRef}) {
    const { windowWidth } = useContext(WindowContext)

    const [seeMoreButtonText, setSeeMoreButtonText] = useState('Voir plus')
    const [isSeeMoreButtonHidden, setIsSeeMoreButtonHidden] = useState(true)

    // Hide text and add see more button when text become too long
    useEffect(()=> {
        if (seeMoreButtonText == "Voir plus") {
            textRef.current.scrollHeight > textRef.current.offsetHeight 
                ? (setIsSeeMoreButtonHidden(false))
                : (setIsSeeMoreButtonHidden(true))
        } else if (seeMoreButtonText == "Voir moins") {
            textRef.current.style.display = "-webkit-box"
            const maxHeight = textRef.current.offsetHeight
            textRef.current.style.display = "block"
            textRef.current.scrollHeight > maxHeight
                ? (setIsSeeMoreButtonHidden(false))
                : (setIsSeeMoreButtonHidden(true))
        }
    }, [windowWidth])

    // Toggle hide/show text on click
    function ToggleSeeMore () {
        seeMoreButtonText == "Voir plus" 
            ? (()=>{
                setSeeMoreButtonText("Voir moins")
                textRef.current.style.display = "block"
            })()
            : (()=>{
                setSeeMoreButtonText("Voir plus")
                textRef.current.style.display = "-webkit-box"
            })()
    }

    return (
        <div className={`seeMoreButton ${isSeeMoreButtonHidden ? 'hidden' : ''}`} onClick={()=> {ToggleSeeMore()}} >{seeMoreButtonText}</div>
    )
}

export default SeeMoreButton