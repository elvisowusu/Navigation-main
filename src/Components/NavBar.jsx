import React,{useEffect, useReducer, useState} from "react";
import logo from '../assets/logo.svg'
import menu from '../assets/icon-menu.svg'
import close from '../assets/icon-close-menu.svg'
import arrowUp from '../assets/icon-arrow-up.svg'
import arrowDown from '../assets/icon-arrow-down.svg'
import todolist from '../assets/icon-todo.svg'
import calendar from '../assets/icon-calendar.svg'
import reminders from '../assets/icon-reminders.svg'
import planning from '../assets/icon-planning.svg'




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
            <nav className={`text-MediumGray flex justify-between items-center ${screenWidth > 768 ? `py-[1.5rem]`:`py-[1.3rem]`} ${screenWidth > 768 ? `px-[2.7rem]`:`px-[1rem]`} text-[1.3rem]`}>
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
                            {menuOpen ? <img className="fixed right-4 top-5" src={close} width={25}/> : <img src={menu} width={27}/> }
                        </button> 
                    }
                </div>
                {
                    screenWidth<768 && menuOpen?
                    <>
                    <div className="fixed right-0 bg-gray-400 opacity-70 w-full h-[192vh] z-10"></div>
                    <div className="fixed right-0 bg-white w-2/3 h-[192vh] z-20 pt-[3.5rem] px-[2rem]"> 
                        <div className="mt-[40rem] flex flex-col gap-3 items-start"> 
                            <NavContent/>
                        </div>
                        <div className="flex flex-col items-center mt-[3rem] gap-4">
                        <button className="hover:text-AlmostBlack">Login</button>
                        <button className="border outline-none hover:text-AlmostBlack hover:border-AlmostBlack w-full py-[0.5rem] rounded-2xl">Register</button>
                        </div>
                    </div>
                    </>
                    :null
                }
            </nav>
    )
}




const reducer = (state, action) => {
    switch (action.type) {
      case 'showFeatures':
        return {...state,showFeatures:!state.showFeatures};
      case 'showCompany':
        return {...state,showCompany:!state.showCompany};
      case 'screenWidth':
        return {...state,width: window.innerWidth}
      default:
        throw new Error();
    }
  }
export function NavContent() {
    const [state, dispatch] = useReducer(reducer, {showFeatures:false,showCompany:false,width:window.innerWidth});

    const Features = [
    {name:'Todo List', source : todolist},
    {name:'Calendar', source : calendar},
    {name:'Reminders', source : reminders},
    {name:'Planning', source : planning},
    ]
    
    const Company = ['History', 'Our Team','Blog']

    return (
        <>
         <div>
            <button className="navbtn" onClick={()=>{dispatch({type:'showFeatures'})}}>Features <img className={`mt-1 ${state.showFeatures & true? `-rotate-180 transition ease-in-out duration-300 `:``}`} src={arrowDown} alt="" /></button>
            { state.showFeatures &&  <ul className={`bg-white px-8 py-6 rounded-xl ${state.width > 768 ? `fixed shadow-2xl left-[9rem] mt-3`:``}`}>
                {Features.map((Features,key)=>{
                return  <li className={`navLi ${state.width > 768 ? `mt-1`:`mb-4`}`}><img src={Features.source} width={19} alt="icon" /> <a href="#">{Features.name}</a></li>
                })}
            </ul>
            }
         </div>
         <div>
         <button className="navbtn" onClick={()=>{dispatch({type:'showCompany'})}}>Company <img className={`mt-1 ${state.showCompany & true? `-rotate-180 transition ease-in-out duration-300 `:``}`} src={arrowDown} alt="" /></button>
           {state.showCompany && <ul className={`bg-white px-8 py-6 rounded-xl ${state.width > 768 ? `fixed shadow-2xl mt-3`:``}`}>
                {Company.map((Company,key)=>{
                return   <li className={`navLi ${state.width > 768 ? `mt-1`:`mb-4`}`}><a href="#">{Company}</a></li>
                })}
            </ul>
           }
         </div>
         <button className="hover:text-AlmostBlack mt-[0.1rem]">Careers</button>
         <button className="hover:text-AlmostBlack mt-[0.1rem]">About</button>
        </>
    );
}


export function LoginOrSignUp() {
    return (
        <div className={`flex gap-[3rem]`}>
            <button className="hover:text-AlmostBlack">Login</button>
            <button className="border outline-none hover:text-AlmostBlack hover:border-AlmostBlack px-[1.5rem] py-[0.5rem] rounded-2xl">Register</button>
        </div>
    );
}