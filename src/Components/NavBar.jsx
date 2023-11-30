import React,{useEffect, useReducer, useState} from "react";
import logo from '../assets/logo.svg'
import menu from '../assets/icon-menu.svg'
import close from '../assets/icon-close-menu.svg'

export const NavBar =()=>{

    const [screenWidth,setScreenWidth]=useState(window.innerWidth);
    const [menuOpen,setMenuOpen]=useState(false);
    useEffect(()=>{
        window.addEventListener('resize',()=>setScreenWidth(window.innerWidth))
     return ()=>{
            window.removeEventListener('resize',()=>setScreenWidth(window.innerWidth));
     } 
    })
    return(
        <div>
            
            <nav className={`flex justify-between items-center ${screenWidth > 768 ? `py-[1.5rem]`:`py-[1.3rem]`} ${screenWidth > 768 ? `px-[2.7rem]`:`px-[1rem]`} text-[1.3rem]`}>
                <div className="flex gap-[4rem] items-start">
                <img src={logo} width={screenWidth > 768? 110:80}/>
                {
                    screenWidth>768?
                    <NavContent/>:null
                }
                </div>
                <div className="flex gap-[2.8rem]">
                    {
                        screenWidth>768?
                        <>
                        <LoginOrSignUp/>
                        </>:<button className="z-40"  onClick={()=>{setMenuOpen(!menuOpen)}}>
                            {menuOpen ? <img src={close} width={25}/> : <img src={menu} width={27}/> }
                        </button> 
                    }
                </div>
                <div className="fixed right-0 bg-red-300 h-[192vh] z-10"> ldsfjlsdfj</div>
            </nav>
        </div>
    )
}





export function NavContent() {
    return (
        <div className="flex gap-[3rem]">
            <button>Features</button>
            <button>Company</button>
            <button>Careers</button>
            <button>About</button> 
        </div>
    );
}


export function LoginOrSignUp() {
    return (
        <div className="flex gap-[3rem]">
            <button>Login</button>
            <button>Sign Up</button>
        </div>
    );
}