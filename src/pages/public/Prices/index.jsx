import { Fragment, useContext, useEffect } from "react"
import { HeaderContext } from "../../../context"
import PageTitleWave from "../../../components/PageTitleWave";

import style from './index.module.css'
import GetImgURL from "../../../utils/imgUrl";
import RowSection from "../../../components/RowSection";
import Separator from "../../../components/Separator";

function Prices () {
    const { setHeaderImg, headerColor, setHeaderColor } = useContext(HeaderContext)
    
    useEffect(() => {
        setHeaderColor('lightBeige')
        setHeaderImg('sand.jpg')
        window.scrollTo(0, 0);
    }, []);

    return (
        <Fragment>
            <PageTitleWave title={<>Prestations<span className={`br ${style.br}`}></span>et tarifs</>}/>
            <div className={style.intro} style={{backgroundColor: `var(--${headerColor})`}}>
                <p>Les séances durent <span>60 minutes</span> et sont réalisées <span>à domicile ou en cabinet</span> seulement sur rendez-vous. <span>De plus en plus de mutuelles prennent en charge vos séances</span> de réflexologie ou de sophrologie, n’hésitez pas à vous renseigner.</p>
                <div className={style.locationInfos}>
                    <div className={style.item}>
                        <div className={style.icon}><img src={GetImgURL("iconLocation.svg")} alt="Icon" /></div>
                        <div className={style.infos}>
                            <p className={style.title}>À domicile</p>
                            <p>Nice et ses alentours</p>
                            <div className={style.highlightedInfo}>
                                <p>5€ de frais de déplacement</p>
                            </div>
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
                <div className={style.wave}>
                    <img src={GetImgURL("wave.svg")} alt="" />
                </div>
            </div>
            <div className={style.rowSectionContainer}>
                <RowSection
                    title="Réflexologie plantaire" 
                    content={
                        <ul className={style.contentList}>
                            <li className={style.item}>
                                <h5>60 minutes</h5>
                            </li>
                            <li className={style.item}>
                                <h5>Contenu de la séance</h5>
                                <div>
                                    <p>Accueil et échange sur vos besoins</p>
                                    <p>Pratique de la réflexologie avec des techniques spécifiques à vos besoins</p>
                                    <p>Écoute des sensations et échange</p>
                                </div>
                            </li>
                            <li className={style.item}>
                                <h5>Tarifs</h5>
                                <div>
                                    <p>Adultes : 55€</p>
                                    <p>Étudiants : 45€</p>
                                    <p>Enfants : 35€ (40 minutes, à partir de 10 ans)</p>
                                    <p className={style.important}>Pack 4 séances : 160€</p>
                                </div>
                            </li>
                        </ul>
                    }
                    ctaText="Réserver ma séance"
                    ctaLink="/prendre-rdv"
                    img={["reflexo1.jpg", "reflexo2.jpg"]}
                    position="first"
                />
                <Separator />
                <RowSection
                    side="reverse" 
                    title="La sophrologie" 
                    content={
                        <ul className={style.contentList}>
                            <li className={style.item}>
                                <h5>60 minutes</h5>
                            </li>
                            <li className={style.item}>
                                <h5>Contenu de la séance</h5>
                                <div>
                                    <p>Accueil et échange sur vos besoins</p>
                                    <p>Pratique de la sophrologie avec des exercices correspondants à vos besoins (respiration, visualisation, exercices physiques, ...)</p>
                                    <p>Écoute des sensations et échange</p>
                                </div>
                            </li>
                            <li className={style.item}>
                                <h5>Tarifs</h5>
                                <div>
                                    <p>Adultes : 55€</p>
                                    <p>Étudiants : 45€</p>
                                    <p>Enfants : 35€ (40 minutes, à partir de 10 ans)</p>
                                    <p className={style.important}>Pack 4 séances : 160€</p>
                                </div>
                            </li>
                        </ul>
                    }
                    ctaText="Réserver ma séance"
                    ctaLink="/prendre-rdv"
                    img={["sophro1.jpg", "sophro2.jpg"]}
                />
                <Separator />
                <RowSection
                    title="Massage plantaire relaxant"
                    content={
                        <ul className={style.contentList}>
                            <li className={style.item}>
                                <h5>30 minutes</h5>
                            </li>
                            <li className={style.item}>
                                <h5>Contenu de la séance</h5>
                                <div>
                                    <p>Accueil et échange sur vos besoins</p>
                                    <p>Massage ciblé et détente profonde</p>
                                    <p>Écoute des sensations et échange</p>
                                </div>
                            </li>
                            <li className={style.item}>
                                <h5>Tarifs</h5>
                                <div>
                                    <p>Adultes : 40€</p>
                                    <p>Étudiants : 35€</p>
                                    <p className={style.important}>Pack 4 séances : 160€</p>
                                </div>
                            </li>
                        </ul>
                    }
                    ctaText="Réserver ma séance"
                    ctaLink="/prendre-rdv"
                    img={["reflexo1.jpg", "reflexo2.jpg"]}
                />
                <Separator />
                <RowSection
                    side="reverse" 
                    title="Ateliers / Groupes" 
                    content={
                        <ul className={style.contentList}>
                            <li className={style.item}>
                                <h5>Sophrologie uniquement</h5>
                            </li>
                            <li className={style.item}>
                                <h5>De 2 à 6 personnes</h5>
                            </li>
                            <li className={style.item}>
                                <h5>30€ par heure et par personne</h5>
                            </li>
                        </ul>
                    }
                    ctaText="Me contacter"
                    ctaLink="/a-propos"
                    img={["sophro1.jpg", "sophro2.jpg"]}
                    position="last"
                />
            </div>
        </Fragment>
    )
}

export default Prices