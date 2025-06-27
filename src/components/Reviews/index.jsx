import style from "./index.module.css"
import reviews from "../../datas/reviews.json"
import GetImgURL from "../../utils/imgUrl"
import { Link } from "react-router-dom"
import { useContext, useEffect, useRef, useState } from "react"
import { WindowContext } from "../../context"

function Reviews () {
    const { windowWidth } = useContext(WindowContext)
    const [reviewsItemWidth, setReviewsItemWidth] = useState(0)
    const [reviewsGapWidth, setReviewsGapWidth] = useState(0)
    const [reviewsVisibleNumber, setReviewsVisibleNumber] = useState(0)
    const [carouselCurrentLeft, setCarouselCurrentLeft] = useState(0)
    const [isCarouselVisible, setIsCarouselVisible] = useState(false)
    const carouselRef = useRef(null)

    // When the window gets resized, the carousel width gets adjusted
    function SetReviewsDimentions () {
        const dimentions = {
            item : 0,
            gap : 0,
            visibleNumber : 0 
        }
        if (windowWidth < 610) {
            dimentions.item = 235
            dimentions.gap = 0
            dimentions.visibleNumber = 1
        } else if (windowWidth < 715){
            dimentions.item = 235
            dimentions.gap = 21
            dimentions.visibleNumber = 2
        } else if (windowWidth < 998){
            dimentions.item = 265
            dimentions.gap = 24
            dimentions.visibleNumber = 2
        } else if (windowWidth < 1110){
            dimentions.item = 295
            dimentions.gap = 27
            dimentions.visibleNumber = 2
        } else if (windowWidth < 1280){
            dimentions.item = 295
            dimentions.gap = 27
            dimentions.visibleNumber = 3
        } else {
            dimentions.item = 325
            dimentions.gap = 30
            dimentions.visibleNumber = 3
        }
        setReviewsItemWidth(dimentions.item)
        setReviewsGapWidth(dimentions.gap)
        setReviewsVisibleNumber(dimentions.visibleNumber)
    }
    useEffect(()=> {
        SetReviewsDimentions()
        setCarouselCurrentLeft(null)
    }, [windowWidth])

    // Automatic moving forward every .3s
    function CarouselMoveForward (width, gap) {
        if (carouselCurrentLeft == -((reviews.length - reviewsVisibleNumber)*(width+gap))) {
            setCarouselCurrentLeft(0)
        } else {
            setCarouselCurrentLeft(carouselCurrentLeft - (width + gap))
        }
    }
    useEffect(() => {
        if (carouselCurrentLeft == null) {
            setCarouselCurrentLeft(0)
        } else {
            if (isCarouselVisible == true) {
                const interval = setInterval(()=> {
                    CarouselMoveForward(reviewsItemWidth, reviewsGapWidth)
                }, 3000)
                return ()=>clearInterval(interval)
            }
        }
    }, [carouselCurrentLeft])

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
                CarouselMoveForward(reviewsItemWidth, reviewsGapWidth)
            }, 3000)
            return () => clearTimeout(carouselMove)
        }
    }, [isCarouselVisible]);

    return (
        <div className={`bloc ${style.reviewsContainer}`}>
            <div className={style.reviewsTitle}>
                <h3 className="title">Ce qu'ils en ont pensé</h3>
                <h4 className="subtitle">Les avis</h4>
            </div>
            <div className={style.reviewsCarousel} ref={carouselRef}>
                <div className={style.carouselItems} style={{left: `${carouselCurrentLeft}px`}}>
                    {reviews.map((item, index)=>{
                        return (
                            <Link key={index} to="https://www.google.com/search?client=safari&sa=X&sca_esv=35aba76f9e0fd39c&rls=en&tbm=lcl&sxsrf=AHTn8zozw8NMc-YdLSnsnxSqoGFZpUDEQA:1741346164720&q=R%C3%A9flexologue/Sophrologue+-+Michel+Canonico+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDUxtTQ3NTUyNzE0NTUwMjEzN9jAyPiK0SDo8Mq0nNSK_Jz89NJU_eD8gowiCFtBV8E3MzkjNUfBOTEvPy8zOV_BsSyzeBEryVoAgt1moIEAAAA&rldimm=15459755274155024670&hl=fr-FR&ved=2ahUKEwiL0dD86_eLAxUtcKQEHdGuAkkQ9fQKegQILhAF&biw=1470&bih=839&dpr=2#lkt=LocalPoiReviews" target="_blank" rel="noopener noreferrer">
                                <div className={style.item}>
                                    <div className={style.itemTitle}>
                                        <p>{item.name}</p>
                                        <div className={style.stars}>
                                            {Array.from({ length: item.score }, (_, index) => (
                                                <img key={index} src={GetImgURL("star.svg")} alt="étoile" />
                                            ))}
                                        </div>
                                    </div>
                                    <p className={style.itemDesc}>{item.review}</p>
                                </div>
                            </Link>   
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Reviews