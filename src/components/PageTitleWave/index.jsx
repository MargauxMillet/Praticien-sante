import { useContext, useEffect, useRef, useState } from 'react'
import { HeaderContext, WindowContext } from '../../context'

import whiteBackgroundWave from '../../assets/whiteBackgroundWave.svg'
import beigeBackgroundWave from '../../assets/beigeBackgroundWave.svg'
import style from './index.module.css'

function PageTitleWave ({title, subtitle = null}) {
    const { headerColor } = useContext(HeaderContext)
    const backgroundWave = headerColor == "white" ? whiteBackgroundWave : beigeBackgroundWave

    const {windowWidth} = useContext(WindowContext)
    const titleContainerRef = useRef(null)
    const [backgroundWaveHeight, setBackgroundWaveHeight] = useState(0)

    // Responsive of the margin-top of the title and the height of the backgroundWave
    useEffect(()=> {
        const titleContainerHeight = titleContainerRef.current.getBoundingClientRect().height
        const titleContainerMarginTop = (() => {
            if (windowWidth > 2150) return 150;
            if (windowWidth > 1800) return 140;
            if (windowWidth > 1600) return 130;
            if (windowWidth > 1440) return 120;
            if (windowWidth > 1200) return 110;
            if (windowWidth > 1000) return 100;
            if (windowWidth > 800) return 90;
            if (windowWidth > 600) return 80;
            if (windowWidth > 400) return 70;
            return 60;
        })();
        setBackgroundWaveHeight(`${titleContainerHeight + titleContainerMarginTop}px`)
    }, [windowWidth])

    return (
        <div className={style.pageTitleContainer} style={{height: backgroundWaveHeight}}>
            <div className={style.backgroundWave} style={{height: backgroundWaveHeight}} ><img src={backgroundWave} alt=""/></div>
            <div className={style.titleContainer} ref={titleContainerRef}>
                <h1 className={style.title}>{title}</h1>
                {subtitle && <h2 className={style.subtitle}>{subtitle}</h2>}
            </div>
        </div> 
    )
}

export default PageTitleWave