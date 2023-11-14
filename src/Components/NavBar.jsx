import React,{useReducer} from "react";
import logo from '../assets/logo.svg'


export const NavBar =()=>{
    return(
        <nav className="flex justify-between">
            <div className="flex gap-[4rem]">
            <img src={logo} alt="" />
            <ul className="flex gap-[3rem]">
                <li>Features</li>
                <li>Company</li>
                <li>Careers</li>
                <li>About</li>
            </ul>
            </div>
            <div className="flex gap-[2rem]">
                <button>Login</button>
                <button>Register</button>
            </div>
        </nav>
    )
}