import { Fragment, useContext, useEffect, useRef } from "react"
import { HeaderContext } from "../../../context"
import PageTitleWave from "../../../components/PageTitleWave";
import { Link } from "react-router-dom";

import style from './index.module.css'
import SeeMoreButton from "../../../components/SeeMoreButton";
import RowSection from "../../../components/RowSection";
import Separator from "../../../components/Separator";
import Benefits from "../../../components/Benefits";
import SessionExecution from "../../../components/SessionExecution";
import Reviews from "../../../components/Reviews";
import GetImgURL from "../../../utils/imgUrl";

function Home() {
    const { setHeaderImg, headerColor, setHeaderColor } = useContext(HeaderContext)
    const textRef = useRef(null)
        
    useEffect(() => {
        setHeaderColor('lightBeige')
        setHeaderImg('sand.jpg')
        window.scrollTo(0, 0);
    }, []);

    return (
        <Fragment>
            <PageTitleWave title="Michel Canonico" subtitle="Sophrologie et Réflexologie plantaire" />
            <div className={style.intro} style={{backgroundColor: `var(--${headerColor})`}}>
                <div className={style.pres}>
                    <img src={GetImgURL("portrait.jpg")} alt="Portrait practicien" />
                    <Link to="/prendre-rdv"><button className="button">Réserver ma séance</button></Link>
                </div>
                
                <div className={style.description}>
                    <p ref={textRef}>Sophrologue et réflexologue certifié et diplômé, passionné par le bien être, je vous accompagnerai pour <span>retrouver un équilibre entre corps et esprit</span>. Grâce à des méthodes complémentaires, vous allez pouvoir <span>gérer votre stress, améliorer votre qualité de vie et soulager toutes vous tensions</span>. En fonction de vos besoins et de vos objectifs, je suis à votre écoute pour <span>vous offrir des soins personnalisés</span> et vous permettre de vous détendre et régénérer votre corps et votre esprit. Vous avez des questions ? Vous souhaitez prendre rendez-vous ? N’hésitez pas à me contacter !</p>
                    <SeeMoreButton textRef={textRef} />
                </div>

                <div className={style.infos}>
                    <div className={style.item}>
                        <svg className={style.infosIcon} width="37" height="39" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.5309 3.55556L12.2949 3.74195L12.2977 3.76073L12.3012 3.77942L13.5309 3.55556ZM14.7698 10.3611L16.0105 10.2091L16.0061 10.173L15.9996 10.1372L14.7698 10.3611ZM14.198 12.5972L13.3053 11.7222L13.3002 11.7275L13.2951 11.7327L14.198 12.5972ZM12.19 14.6944L11.2871 13.83L10.6628 14.482L11.0854 15.2797L12.19 14.6944ZM17.336 21.4028L18.2287 20.5278L18.222 20.5209L18.2151 20.5141L17.336 21.4028ZM23.8639 26.5556L23.2282 27.6318L24.0712 28.1298L24.7565 27.4306L23.8639 26.5556ZM25.729 24.6528L24.8363 23.7778H24.8363L25.729 24.6528ZM28.2067 23.875L28.5194 22.6647L28.4539 22.6478L28.387 22.6381L28.2067 23.875ZM33.4753 25.2361L33.8251 24.0361L33.8066 24.0307L33.7879 24.0258L33.4753 25.2361ZM32.9988 35.75C29.2823 35.75 26.854 34.9447 23.0549 33.2133L22.0181 35.4881C25.9698 37.2891 28.7738 38.25 32.9988 38.25V35.75ZM23.0549 33.2133C19.3283 31.5149 15.9273 29.1035 12.8512 25.9653L11.0659 27.7153C14.3429 31.0585 17.9939 33.6541 22.0181 35.4881L23.0549 33.2133ZM12.8512 25.9653C9.7752 22.8271 7.40925 19.3551 5.74188 15.5472L3.45181 16.55C5.2469 20.6495 7.78874 24.372 11.0659 27.7153L12.8512 25.9653ZM5.74188 15.5472C4.07527 11.7411 3.25 7.90889 3.25 4.04167H0.75C0.75 8.27629 1.65596 12.4487 3.45181 16.55L5.74188 15.5472ZM3.25 4.04167C3.25 3.75982 3.32969 3.59582 3.46446 3.45833L1.6791 1.70833C1.05149 2.34862 0.75 3.15685 0.75 4.04167H3.25ZM3.46446 3.45833C3.59774 3.32236 3.74656 3.25 4.00124 3.25V0.75C3.11235 0.75 2.3082 1.06653 1.6791 1.70833L3.46446 3.45833ZM4.00124 3.25H11.7203V0.75H4.00124V3.25ZM11.7203 3.25C11.8454 3.25 11.9522 3.28259 12.0852 3.39969L13.7379 1.52392C13.1719 1.02528 12.4846 0.75 11.7203 0.75V3.25ZM12.0852 3.39969C12.2359 3.5325 12.2794 3.63933 12.2949 3.74195L14.767 3.36916C14.6554 2.62919 14.286 2.00686 13.7379 1.52392L12.0852 3.39969ZM12.3012 3.77942L13.54 10.585L15.9996 10.1372L14.7607 3.33169L12.3012 3.77942ZM13.5291 10.5131C13.5806 10.9338 13.5551 11.199 13.5146 11.3508L15.9297 11.9964C16.0798 11.4353 16.0861 10.8255 16.0105 10.2091L13.5291 10.5131ZM13.5146 11.3508C13.4739 11.5027 13.4061 11.6194 13.3053 11.7222L15.0907 13.4722C15.4982 13.0565 15.7798 12.5575 15.9297 11.9964L13.5146 11.3508ZM13.2951 11.7327L11.2871 13.83L13.0928 15.5589L15.1009 13.4617L13.2951 11.7327ZM11.0854 15.2797C11.7566 16.5465 12.5516 17.7665 13.4683 18.9397L15.4383 17.4005C14.6079 16.3377 13.8939 15.2406 13.2945 14.1092L11.0854 15.2797ZM13.4683 18.9397C14.3758 20.1013 15.3723 21.2184 16.4569 22.2914L18.2151 20.5141C17.2032 19.513 16.2779 18.4751 15.4383 17.4005L13.4683 18.9397ZM16.4433 22.2778C17.4634 23.3185 18.5341 24.2848 19.6552 25.1763L21.2111 23.2195C20.1722 22.3934 19.1781 21.4963 18.2287 20.5278L16.4433 22.2778ZM19.6552 25.1763C20.7811 26.0716 21.9722 26.89 23.2282 27.6318L24.4996 25.4793C23.3413 24.7952 22.2453 24.0419 21.2111 23.2195L19.6552 25.1763ZM24.7565 27.4306L26.6216 25.5278L24.8363 23.7778L22.9712 25.6806L24.7565 27.4306ZM26.6216 25.5278C26.7402 25.4068 26.9249 25.2836 27.226 25.1882L26.4714 22.8048C25.8513 23.0012 25.2895 23.3154 24.8363 23.7778L26.6216 25.5278ZM27.226 25.1882C27.5203 25.095 27.7824 25.0764 28.0264 25.1119L28.387 22.6381C27.7416 22.544 27.0983 22.6064 26.4714 22.8048L27.226 25.1882ZM27.894 25.0853L33.1626 26.4464L33.7879 24.0258L28.5194 22.6647L27.894 25.0853ZM33.1255 26.4362C33.3437 26.4998 33.494 26.6021 33.6141 26.7451L35.5282 25.1369C35.0765 24.5993 34.4963 24.2317 33.8251 24.0361L33.1255 26.4362ZM33.6141 26.7451C33.722 26.8735 33.75 26.9732 33.75 27.0833H36.25C36.25 26.3509 35.9921 25.689 35.5282 25.1369L33.6141 26.7451ZM33.75 27.0833V34.9583H36.25V27.0833H33.75ZM33.75 34.9583C33.75 35.2402 33.6703 35.4042 33.5355 35.5417L35.3209 37.2917C35.9485 36.6514 36.25 35.8431 36.25 34.9583H33.75ZM33.5355 35.5417C33.4023 35.6776 33.2534 35.75 32.9988 35.75V38.25C33.8876 38.25 34.6918 37.9335 35.3209 37.2917L33.5355 35.5417Z" fill="#5D6B4F"/>
                        </svg>
                        <p>07.86.54.22.12</p>
                    </div>

                    <div className={style.item}>
                        <svg className={style.infosIcon} width="32" height="39" viewBox="0 0 32 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 2C8.26801 2 2 8.21398 2 15.8793C2 17.3522 2.23143 18.7715 2.6602 20.1034C3.63149 23.1207 9.16422 30.4493 16 37C23.1144 30.0906 28.5628 22.5172 29.3398 20.1034C29.7686 18.7715 30 17.3522 30 15.8793C30 8.21398 23.732 2 16 2Z" stroke="#5D6B4F" strokeWidth="2.5"/>
                            <path d="M19.6522 15.8793C19.6522 17.879 18.017 19.5 16 19.5C13.983 19.5 12.3478 17.879 12.3478 15.8793C12.3478 13.8797 13.983 12.2586 16 12.2586C18.017 12.2586 19.6522 13.8797 19.6522 15.8793Z" stroke="#5D6B4F" strokeWidth="2.5"/>
                        </svg>
                        <p>Nice et alentours</p>
                    </div>
                </div>

                <div className={style.wave}>
                    <img src={GetImgURL("wave.svg")} alt="" />
                </div>
            </div>
            <RowSection 
                title="La réflexologie plantaire" 
                subtitle="C'est quoi ?" 
                content={<p>La réflexologie plantaire est une pratique naturelle qui repose sur <span>la stimulation de zones réflexes</span> situées sur les pieds, <span>correspondant à différentes parties du corps</span>. En appliquant des pressions ciblées, elle favorise la détente, améliore la circulation énergétique et <span>aide à rééquilibrer l’organisme</span>. Idéale pour réduire le stress et apaiser divers maux, elle s’adresse à tous.</p>} 
                ctaText="Réserver ma séance"
                ctaLink="/prendre-rdv"
                img={["reflexo1.jpg", "reflexo2.jpg"]}
            />
            <Separator />
            <RowSection
                side="reverse" 
                title="La sophrologie" 
                subtitle="C'est quoi ?" 
                content={<p>La sophrologie est une méthode douce qui allie techniques de <span>relaxation, respiration et visualisation positive</span> pour renforcer l’équilibre entre le corps et l’esprit. Elle aide à gérer le stress, les émotions et à développer une meilleure connaissance de soi pour <span>améliorer le bien-être au quotidien</span>. Accessible à tous, elle s'adapte aux besoins spécifiques de chacun, dans une démarche personnalisée.</p>} 
                ctaText="Réserver ma séance"
                ctaLink="/prendre-rdv"
                img={["sophro1.jpg", "sophro2.jpg"]}
            />
            <Benefits
                benefits={
                    [
                        ["Meilleur sommeil", "sommeil.svg"],
                        ["Plus de confiance en soi", "confiance.svg"],
                        ["Moins de stress", "stress.svg"],
                        ["Moins de douleurs", "douleurs.svg"],
                        ["Plus d'énergie", "energie.svg"]
                    ]
                } 
            />
            <SessionExecution />
            <Reviews />
        </Fragment> 
    )
}

export default Home