import React,{useEffect, useReducer, useState} from "react";
import logo from '../assets/logo.svg'


export const NavBar =()=>{

    const [screenWidth,setScreenWidth]=useState(window.innerWidth);
    useEffect(()=>{
        window.addEventListener('resize',()=>setScreenWidth(window.innerWidth))
     return window.removeEventListener('resize',()=>setScreenWidth(window.innerWidth))
    })
    return(
        <div>
            
            <nav className="flex justify-between items-center py-[1.5rem] px-[2.7rem] text-[1.3rem]">
                <div className="flex gap-[4rem] items-start">
                <img src={logo} width={110}/>
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
                    <button>Login</button>
                    <button className="border outline-none border-AlmostBlack px-[1.5rem] py-[0.5rem] rounded-2xl">Register</button>
                </div>
            </nav>
        </div>
    )
}