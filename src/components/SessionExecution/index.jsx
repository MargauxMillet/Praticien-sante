import GetImgURL from "../../utils/imgUrl"
import DoubleSection from "../DoubleSection"
import style from "./index.module.css"

function SessionExecution () {
    function SessionStep({ icon, title, description }) {
        return (
            <div className={style.item}>
                <img src={GetImgURL(icon)} alt={title} />
                <p className={style.title}>{title}</p>
                <p className={style.desc}>{description}</p>
            </div>
        );
    }
    
    return (
        <div className={`bloc ${style.sessionExecutionContainer}`}>
            <div className={style.sessionExecutionTitle}>
                <h3 className="title">Le déroulement d'une séance</h3>
                <h4 className="subtitle">60 minutes</h4>
            </div>
            <div className={style.sessionExecutionInfos}>
                <div className={style.item}>
                    <div className={style.icon}><img src={GetImgURL("iconLocation.svg")} alt="Icon" /></div>
                    <div className={style.infos}>
                        <p className={style.title}>À domicile</p>
                        <p>Nice et ses alentours</p>
                    </div>
                </div>
                <p>Ou</p>
                <div className={style.item}>
                    <div className={style.icon}><img src={GetImgURL("iconHome.svg")} alt="Icon" /></div>
                    <div className={style.infos}>
                        <p className={style.title}>Au cabinet</p>
                        <p>Quartier Libération à Nice</p>
                    </div>
                </div>
            </div>
            <div className={style.doubleSectionContainer}>
                <DoubleSection
                    categoryName1 = "Réflexologie"
                    categoryName2 = "Sophrologie"
                    categoryContent1 = {
                        <div className={style.contentContainer}>
                            <div className={style.infos}>
                                <SessionStep 
                                    icon={"iconWelcome.svg"} 
                                    title="Accueil et échange" 
                                    description="La séance démarre par un rapide échange pour connaitre vos besoins et votre état général." 
                                />
                                <SessionStep 
                                    icon={"iconReflexo.svg"} 
                                    title="Pratique de la réflexologie" 
                                    description="La pratique peut commencer. Je réalise des pressions spécifiques sur des zones en lien avec la pathologie." 
                                />
                                <SessionStep 
                                    icon={"iconDialogue.svg"} 
                                    title="Écoute des sensations et échange" 
                                    description="La séance se termine par un temps dédié aux sensations liées à la pratique, puis par un dernier échange sur les prochaines étapes à suivre pour optimiser l’amélioration des symptômes." 
                                />
                            </div>
                            <div className={style.video}>
                                <video src={GetImgURL('reflexo.MOV')} autoPlay muted loop></video>
                            </div>
                        </div>
                    }
                    categoryContent2 = {
                        <div className={`${style.contentContainer} ${style.contentContainerReverse}`}>
                            <div className={style.infos}>
                                <SessionStep 
                                    icon={"iconWelcome.svg"} 
                                    title="Accueil et échange" 
                                    description="La séance démarre par un rapide échange pour faire le point sur votre état physique et mental." 
                                />
                                <SessionStep 
                                    icon={"iconSophro.svg"} 
                                    title="Pratique de la sophrologie" 
                                    description="La pratique est basée sur des exercices de respiration, des exercices physiques, de la relaxation ou encore de la visualisation." 
                                />
                                <SessionStep 
                                    icon={"iconDialogue.svg"} 
                                    title="Écoute des sensations et échange" 
                                    description="La séance se termine par une pause de totalisation finale pour accueillir les ressentis de la pratique et un retour à l’éveil progressif. Un échange vient clôturer la séance." 
                                />
                            </div>
                            <div className={style.video}>
                                <video src={GetImgURL('sophro.MOV')} autoPlay muted loop></video>
                            </div>
                        </div>
                    }
                />
            </div>
        </div>
    )
}

export default SessionExecution 