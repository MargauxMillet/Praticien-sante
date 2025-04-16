import { Link } from "react-router-dom"
import Logo from "../../assets/logo.svg"
import "./index.css"

function Footer() {
    return <footer className="footer-container">
        <Link to="/"><img src={Logo} alt="Logo" /></Link>
        <div className="infos">
            <div className="rs">
                <Link to="https://www.instagram.com/michelcanonico.reflexo.sophro/" target="_blank" rel="noopener noreferrer">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="insta-logo">
                        <path fillRule="evenodd" clipRule="evenodd" d="M21 2.5H7C4.51472 2.5 2.5 4.51472 2.5 7V21C2.5 23.4853 4.51472 25.5 7 25.5H21C23.4853 25.5 25.5 23.4853 25.5 21V7C25.5 4.51472 23.4853 2.5 21 2.5ZM7 0C3.13401 0 0 3.13401 0 7V21C0 24.866 3.13401 28 7 28H21C24.866 28 28 24.866 28 21V7C28 3.13401 24.866 0 21 0H7Z"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M14 18.5C16.4853 18.5 18.5 16.4853 18.5 14C18.5 11.5147 16.4853 9.5 14 9.5C11.5147 9.5 9.5 11.5147 9.5 14C9.5 16.4853 11.5147 18.5 14 18.5ZM14 21C17.866 21 21 17.866 21 14C21 10.134 17.866 7 14 7C10.134 7 7 10.134 7 14C7 17.866 10.134 21 14 21Z"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M21.5 8.5C22.6046 8.5 23.5 7.60457 23.5 6.5C23.5 5.39543 22.6046 4.5 21.5 4.5C20.3954 4.5 19.5 5.39543 19.5 6.5C19.5 7.60457 20.3954 8.5 21.5 8.5Z"/>
                    </svg>
                </Link>
                <Link to="https://www.facebook.com/p/Michel-Canonicosophrologue-réflexologue-100064109441980" target="_blank" rel="noopener noreferrer">
                    <svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="fb-logo">
                        <path d="M10 4.75C9.30964 4.75 8.75 5.30964 8.75 6V9.5H13.3708L13 14H8.75V25.5H4V14H0V9.5H4V6C4 2 6.68629 0 10 0H13.3708V4.75H10Z"/>
                    </svg>
                </Link>
            </div>
            <Link to="tel:+33786542212">
                <p className="phone-number">07.86.54.22.12</p>
            </Link>
            <Link to="mailto:michelcanonico.reflexo.sophro@gmail.com">
                <p>michelcanonico.reflexo.<span className="br"></span>sophro@gmail.com</p>
            </Link>
        </div>
        <div className="links">
            <Link to="/plan-du-site">Plan du site</Link>
            <Link to="/mentions-legales">Mentions légales</Link>
            <Link to="/administration-mes-rdv">Administration</Link>
        </div>
    </footer>
}

export default Footer