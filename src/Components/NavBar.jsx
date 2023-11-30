import React,{useEffect, useReducer, useState} from "react";
import logo from '../assets/logo.svg'
import menu from '../assets/icon-menu.svg'
import close from '../assets/icon-close-menu.svg'
import arrowUp from '../assets/icon-arrow-up.svg'
import arrowDown from '../assets/icon-arrow-down.svg'

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
            <nav className={`flex justify-between items-center ${screenWidth > 768 ? `py-[1.5rem]`:`py-[1.3rem]`} ${screenWidth > 768 ? `px-[2.7rem]`:`px-[1rem]`} text-[1.3rem]`}>
                <div className="flex gap-[4rem] items-start">
                <img src={logo} width={screenWidth > 768? 110:80}/>
                {
                    screenWidth>768?
                    <div className={`flex gap-[3rem] z-40`}>
                        <NavContent/>
                    </div>:null
                }
                </div>
                <div className="flex gap-[2.8rem]">
                    {
                        screenWidth>768?
                        <>
                        <LoginOrSignUp/>
                        </>
                        :<button className="z-40"  onClick={()=>{setMenuOpen(!menuOpen)}}>
                            {menuOpen ? <img src={close} width={25}/> : <img src={menu} width={27}/> }
                        </button> 
                    }
                </div>
                {
                    screenWidth<768 && menuOpen?
                    <>
                    <div className="fixed right-0 bg-gray-400 opacity-70 w-full h-[192vh] z-10"></div>
                    <div className="fixed right-0 bg-white w-2/3 h-[192vh] z-20 pt-[4rem] px-4"> 
                        <div className="mt-[40rem] flex flex-col items-start"> 
                            <NavContent/>
                        </div>
                        <div className="flex flex-col items-center mt-[3rem] gap-4">
                            <button>Login</button>
                            <button className="border outline-none border-AlmostBlack px-[1.5rem] py-[0.3rem] w-[14rem] rounded-2xl">Rigister</button>
                        </div>
                    </div>
                    </>
                    :null
                }
            </nav>
    )
}





export function NavContent() {
    return (
        <>
         <button>Features <span> <img src={arrowDown} alt="" /> </span> </button>
         <button>Company</button>
         <button>Careers</button>
         <button>About</button>    
        </>
    );
}


export function LoginOrSignUp(size) {
    return (
        <div className={`flex gap-[3rem]`}>
            <button>Login</button>
            <button className="border outline-none border-AlmostBlack px-[1.5rem] py-[0.5rem] rounded-2xl">Register</button>
        </div>
    );
}