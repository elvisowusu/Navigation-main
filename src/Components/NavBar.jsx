import React,{useEffect, useReducer, useState} from "react";
import logo from '../assets/logo.svg'
import menu from '../assets/icon-menu.svg'
import close from '../assets/icon-close-menu.svg'

export const NavBar =()=>{

    const [screenWidth,setScreenWidth]=useState(window.innerWidth);
    const [menuOpen,setMenuOpen]=useState(false);
    useEffect(()=>{
        window.addEventListener('resize',()=>setScreenWidth(window.innerWidth))
     return window.removeEventListener('resize',()=>setScreenWidth(window.innerWidth))
    })
    return(
        <div>
            
            <nav className="flex justify-between items-center py-[1.5rem] px-[2.7rem] text-[1.3rem]">
                <div className="flex gap-[4rem] items-start">
                <img src={logo} width={screenWidth > 768?110:80}/>
                {
                    screenWidth>768?
                    <div className="flex gap-[3rem]">
                        <button>Features</button>
                        <button>Company</button>
                        <button>Careers</button>
                        <button>About</button>
                   </div>:null
                }
                </div>
                <div className="flex gap-[2.8rem]">
                    {
                        screenWidth>768?
                        <>
                        <button>Login</button>
                        <button className="border outline-none border-AlmostBlack px-[1.5rem] py-[0.5rem] rounded-2xl">Register</button>
                        </>:<button onClick={()=>{setMenuOpen(!menuOpen)}}>
                            {menuOpen ? <img src={close} width={25}/> : <img src={menu} width={25}/> }
                        </button> 
                    }
                </div>
            </nav>
        </div>
    )
}