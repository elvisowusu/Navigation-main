import React,{useReducer} from "react";
import logo from '../assets/logo.svg'


export const NavBar =()=>{
    return(
        <nav className="flex justify-between items-center py-[1.5rem] px-[2.7rem] text-[1.3rem]">
            <div className="flex gap-[4rem] items-center justify-center">
            <img src={logo} width={110}/>
            <div className="flex gap-[3rem] justify-center items-center">
                <button>Features</button>
                <button>Company</button>
                <button>Careers</button>
                <button>About</button>
            </div>
            </div>
            <div className="flex gap-[2rem]">
                <button>Login</button>
                <button className="border outline-none border-AlmostBlack px-[1.5rem] py-[0.5rem] rounded-2xl">Register</button>
            </div>
        </nav>
    )
}