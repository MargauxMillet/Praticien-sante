import style from "./index.module.css"
import GetImgURL from '../../utils/imgUrl'

function Benefits ({benefits}) {
    return (
        <div className={`bloc ${style.benefitsContainer}`}>
            <h3 className="title">Les bienfaits</h3>
            <div className={style.benefitsAll}>
                {benefits.map((item, index)=>{
                    return (
                        <div key={index} className={style.benefitsItem}>
                            <div><img src={GetImgURL(item[1])} /></div>
                            <p>{item[0]}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Benefits