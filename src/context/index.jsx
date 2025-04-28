import { createContext, useState, useEffect, useRef, useContext } from "react";

// Return the width of the window
export const WindowContext = createContext()
export const WindowProvider = ({children}) => {
    const [windowWidth, setWindowWidth] = useState()

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }
    
    useEffect(() => {
        handleResize()
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <WindowContext.Provider value={{ windowWidth }}>
            {children}
        </WindowContext.Provider>
    )
}


// Enable to : 
//      - add/change the image of the header
//      - add/change the color of the header
//      - switch beetween simple header and hero header
//      - tell if the header is full width or not
export const HeaderContext = createContext()
export const HeaderProvider = ({children}) => {
    const [headerColor, setHeaderColor] = useState('')


    // Update the source of the image of the header 
    const [headerImg, setHeaderImg] = useState('')
    const [headerImgSource, setHeaderImgSource] = useState(null)
    useEffect(()=>{
        const updateHeaderImgSource = async () => {
            if (headerImg !== '') {
                const image = await import(`../assets/${headerImg}`);
                setHeaderImgSource(image.default);
            }
        };
        updateHeaderImgSource();
    }, [headerImg])
    

    // Handle the switch beetween simple header and hero header
    const [scroll, setScroll] = useState()
    const mainRef = useRef(null)
    
    const handleScroll = () => {
        if(mainRef.current) {
            const scrollLevel = mainRef.current.getBoundingClientRect().top;
            setScroll(scrollLevel)
        }
    }  
    useEffect(() => {
        handleScroll()
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        };
    }, []);

    const headerHero = (headerImg !== '' && scroll > 0 )? true : false
    const [headerTop, setHeaderTop] = useState(0)
    useEffect(()=>{
        headerHero ? setHeaderTop(-80) : setHeaderTop(0)
    }, [headerHero])


    // Tell if the header is in full width or if the burger menu icon appears
    const { windowWidth } = useContext(WindowContext)
    const isHeaderFullWidth = windowWidth > 880 ? true : false


    return (
        <HeaderContext.Provider value={{headerImg, setHeaderImg, headerColor, setHeaderColor, headerImgSource, headerHero, headerTop, isHeaderFullWidth, mainRef}}>
            {children}
        </HeaderContext.Provider>
    )
}


// Handle the opening and closing of the burger menu
export const BurgerMenuContext = createContext()
export const BurgerMenuProvider = ({children}) => {
    const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false)
    const [burgerMenuRight, setBurgerMenuRight] = useState("-60%")
    useEffect(()=>{
        isBurgerMenuOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = ""
        isBurgerMenuOpen ? setBurgerMenuRight(0) : setBurgerMenuRight("-60%")
    }, [isBurgerMenuOpen])
    
    const {isHeaderFullWidth} = useContext(HeaderContext)
    useEffect(()=>{
        (isHeaderFullWidth && isBurgerMenuOpen) && setBurgerMenuOpen(false)
    }, [isHeaderFullWidth])

    return (
        <BurgerMenuContext.Provider value={{isBurgerMenuOpen, setBurgerMenuOpen, burgerMenuRight}}>
            {children}
        </BurgerMenuContext.Provider>
    )
}