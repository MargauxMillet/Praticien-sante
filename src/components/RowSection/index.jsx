import { Link } from 'react-router-dom'
import style from './index.module.css'
import GetImgURL from '../../utils/imgUrl'
import { useContext, useEffect, useRef, useState } from 'react';
import { WindowContext } from '../../context';

function RowSection ({side = 'classic', title, subtitle, content, ctaText = null, ctaLink = null, img, position = null}) {
    const { windowWidth } = useContext(WindowContext)
    const [carouselItemActive, setCarouselItemActive] = useState(0)
    const [carouselCurrentLeft, setCarouselCurrentLeft] = useState(0)
    const imgRef = useRef(null)
    const [carouselImgWidth, setCarouselImgWidth] = useState(0)
    const carouselRef = useRef(null)
    const [isCarouselVisible, setIsCarouselVisible] = useState(false)

    // When the window gets resized, the carousel width gets adjusted
    useEffect(() => {
        setCarouselImgWidth(imgRef.current.getBoundingClientRect().width)
    }, [windowWidth])
    
    function CarouselMoveForward () {
        if (carouselImgWidth * (img.length-1) == -carouselCurrentLeft) {
            setCarouselCurrentLeft(0)
            setCarouselItemActive(0)
        } else {
            setCarouselCurrentLeft(carouselCurrentLeft-carouselImgWidth)
            setCarouselItemActive(carouselItemActive+1)
        }
    }

    // Automatic moving forward every .3s
    useEffect(()=>{
        const interval = setInterval(()=> {
            CarouselMoveForward()
        }, 3000)
        return ()=>clearInterval(interval)
    }, [carouselCurrentLeft, carouselItemActive])

    // Initial moving forward when the carousel is visible
    useEffect (()=>{
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsCarouselVisible(entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.6,
            }
        );

        if (carouselRef.current) {
            observer.observe(carouselRef.current);
        }

        return () => {
            if (carouselRef.current) {
                observer.unobserve(carouselRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isCarouselVisible) {
            const carouselMove = setTimeout(()=>{
                CarouselMoveForward()
            }, 3000)
            return () => clearTimeout(carouselMove)
        }
    }, [isCarouselVisible]);
    
    
    return (
        <div className={`bloc ${style.container} ${side == 'reverse' ? style.reverse : ''} ${position == "first" ? style.first : ""} ${position == "last" ? style.last : ""}`} ref={carouselRef}>
            <div className={style.infos}>
                <div className={style.titleContainer}>
                    <h3 className={`title`}>{title}</h3>
                    {subtitle && <h4 className={`subtitle`}>{subtitle}</h4>}
                </div>
                <div>{content}</div>
                {ctaText && <Link to={ctaLink} className={`button ${style.cta}`}>{ctaText}</Link>}
            </div>
            <div>
                <div className={style.carousel}>
                    <div className={style.img} style={{left: `${carouselCurrentLeft}px`}}>
                        {img.map((item, id) => {
                            return <img src={GetImgURL(item)} key={id} className={style.imgItem} ref={imgRef}/>
                        })}
                    </div>
                    <div className={style.point}>
                        {img.map((item, id)=>{
                            return (
                                <div 
                                    className={`${style.pointItem} ${carouselItemActive == id ? style.pointItemActive : ''}`} 
                                    key={id}
                                    onClick={
                                        carouselItemActive != id 
                                        ? ()=> {
                                            setCarouselItemActive(id)
                                            setCarouselCurrentLeft(-carouselImgWidth * id)
                                        } 
                                        : null
                                    }
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RowSection