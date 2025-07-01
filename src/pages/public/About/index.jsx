import { Fragment, useContext, useEffect } from "react"
import { HeaderContext } from "../../../context"
import PageTitleWave from "../../../components/PageTitleWave";
import style from "./index.module.css"
import GetImgURL from "../../../utils/imgUrl";
import Separator from "../../../components/Separator";
import { Link } from "react-router-dom";

function About () {
    const { setHeaderImg, headerColor, setHeaderColor } = useContext(HeaderContext)
    
    useEffect(() => {
        setHeaderColor('white')
        setHeaderImg('sand.jpg')
        window.scrollTo(0, 0);
    }, []);

    function ContactItem ({ nameOfClass, imgSource, text }) {
        return (
            <div className={`${style.item} ${style.nameOfClass}`}>
                <img src={GetImgURL(imgSource)} alt="Icon" />
                <p>{text}</p>
            </div>
        )
    }

    function OpenDiploma () {
        window.open(GetImgURL("diplomes.pdf"), '_blank');
    }

    return (
        <Fragment>
            <PageTitleWave title="À propos"/>
            <div className={style.intro} style={{backgroundColor: `var(--${headerColor})`}}>
                <p>Je reste à votre disposition pour toutes informations, n’hésitez pas à me contacter.</p>
            </div>
            <div className={`bloc ${style.contact}`}>
                <ContactItem 
                    nameOfClass="itemPhone"
                    imgSource="phone.svg"
                    text={<>07.86.54.22.12</>}
                />
                <ContactItem 
                    nameOfClass="itemEmail"
                    imgSource="email.svg"
                    text={<>michelcanonico.reflexo.<span className={`br ${style.br}`}></span>sophro@gmail.com</>}
                />
            </div>
            <Separator />
            <div className={`bloc ${style.education}`}>
                <div className={style.titleContainer}>
                    <h3 className={`title`}>Formation</h3>
                    <h4 className={`subtitle`}>Sophrologue et réflexologue certifié</h4>
                </div>
                <p>Je suis sophrologue certifié diplômé de l’École de sophrologie d’Antibes et réflexologue plantaire certifié RNCP du centre de formation du sud est de Tourettes sur Loup.</p>
                <button className="external-button" onClick={()=>OpenDiploma()}>Voir mes diplômes</button>
            </div>
            <Separator />
            <div className={`bloc ${style.socialMedias}`}>
                <div className={style.titleContainer}>
                    <h3 className={`title`}>Suivez-moi sur les réseaux sociaux</h3>
                    <h4 className={`subtitle`}>Et ne manquez pas mon actualité</h4>
                </div>
                <div className={style.iconsContainer}>
                    <Link to="https://www.instagram.com/michelcanonico.reflexo.sophro/" target="_blank" rel="noopener noreferrer">
                        <svg className={style.instaIcon} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M21 2.5H7C4.51472 2.5 2.5 4.51472 2.5 7V21C2.5 23.4853 4.51472 25.5 7 25.5H21C23.4853 25.5 25.5 23.4853 25.5 21V7C25.5 4.51472 23.4853 2.5 21 2.5ZM7 0C3.13401 0 0 3.13401 0 7V21C0 24.866 3.13401 28 7 28H21C24.866 28 28 24.866 28 21V7C28 3.13401 24.866 0 21 0H7Z"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M14 18.5C16.4853 18.5 18.5 16.4853 18.5 14C18.5 11.5147 16.4853 9.5 14 9.5C11.5147 9.5 9.5 11.5147 9.5 14C9.5 16.4853 11.5147 18.5 14 18.5ZM14 21C17.866 21 21 17.866 21 14C21 10.134 17.866 7 14 7C10.134 7 7 10.134 7 14C7 17.866 10.134 21 14 21Z"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M21.5 8.5C22.6046 8.5 23.5 7.60457 23.5 6.5C23.5 5.39543 22.6046 4.5 21.5 4.5C20.3954 4.5 19.5 5.39543 19.5 6.5C19.5 7.60457 20.3954 8.5 21.5 8.5Z"/>
                        </svg>
                    </Link>
                    <Link to="https://www.facebook.com/p/Michel-Canonicosophrologue-réflexologue-100064109441980" target="_blank" rel="noopener noreferrer">
                        <svg className={style.fbIcon} width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 4.75C9.30964 4.75 8.75 5.30964 8.75 6V9.5H13.3708L13 14H8.75V25.5H4V14H0V9.5H4V6C4 2 6.68629 0 10 0H13.3708V4.75H10Z"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default About