import { useRef, useState } from "react"
import GetImgURL from "../../utils/imgUrl"
import style from "./index.module.css"

function DoubleSection ({categoryName1, categoryName2, categoryContent1, categoryContent2}) {
    const [activeCategory, setActiveCategory] = useState(1)
    const contentRef = useRef(null)

    return (
        <div className={style.doubleSectionContainer}>
            <div className={style.categories}>
                <div className={`${style.item} ${style.category1} ${activeCategory == 1 ? style.categoryActive : ""}`}>
                    <div className={style.name} onClick={()=>{setActiveCategory(1); contentRef.current.style.borderRadius = "0 40px 40px 40px"}}>
                        <p>{categoryName1}</p>
                    </div>
                    <img src={GetImgURL("doubleSectionVectorActive.svg")} />
                </div>
                <div className={`${style.item} ${style.category2} ${activeCategory == 2 ? style.categoryActive : ""}`}>
                    <div className={style.name} onClick={()=>{setActiveCategory(2); contentRef.current.style.borderRadius = "40px 0 40px 40px"}}>
                        <p>{categoryName2}</p>
                    </div>
                    <img src={GetImgURL("doubleSectionVectorActive.svg")} />
                </div>
            </div>
            <div className={style.content} ref={contentRef}>
                {activeCategory == 1 && categoryContent1}
                {activeCategory == 2 && categoryContent2}
            </div>
        </div>
    )
}

export default DoubleSection