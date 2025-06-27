import style from "./index.module.css"

function Separator () {
    return (
        <div className={`bloc ${style.separatorContainer}`}>
            <div className={style.separatorLine}></div>
            <div className={style.separatorCircle}></div>
            <div className={style.separatorLine}></div>
        </div>
    )
}

export default Separator