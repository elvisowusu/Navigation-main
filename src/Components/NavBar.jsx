import React,{useEffect, useReducer, useState} from "react";
import logo from '../assets/logo.svg'
import menu from '../assets/icon-menu.svg'
import close from '../assets/icon-close-menu.svg'
import arrowDown from '../assets/icon-arrow-down.svg'
import todolist from '../assets/icon-todo.svg'
import calendar from '../assets/icon-calendar.svg'
import reminders from '../assets/icon-reminders.svg'
import planning from '../assets/icon-planning.svg'
import Aos from "aos";




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
            <nav className={`text-MediumGray flex justify-between items-center ${screenWidth > 768 ? `py-[1.5rem]`:`py-[1.3rem]`} ${screenWidth > 768 ? `px-[2.7rem]`:`px-[1rem]`} text-[1.3rem] xl:bg-black`}>
                <div className="flex gap-[4rem] items-start">
                <img className="md:w-[9rem] lg:w-[9.5rem]" src={logo} width={80}/>
                {
                    screenWidth>768?
                    <div className={`flex md:gap-[2rem] lg:gap-[3rem] z-40`}>
                        <NavContent/>
                    </div>:null
                }
                </div>
                <div className="flex lg:gap-[2.8rem]">
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
                    <div className="fixed right-0 bg-gray-400 opacity-70 w-full h-[193vh] z-10"></div>
                    <div data-aos="fade-left" className="fixed right-0 bg-white w-2/3 h-[193vh] z-20 pt-[3.5rem] px-[2rem]"> 
                        <div className="mt-[45rem] flex flex-col gap-3 items-start"> 
                            <NavContent/>
                        </div>
                        <div className="flex flex-col items-center mt-[3rem] gap-4">
                        <button className="hover:text-AlmostBlack text-sm md:text-base">Login</button>
                        <button className="border outline-none hover:text-AlmostBlack hover:border-AlmostBlack w-full py-[0.5rem] rounded-2xl text-sm md:text-base">Register</button>
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
    useEffect(()=>{
        window.addEventListener('resize',()=>{dispatch({type:'screenWidth'})})
        return ()=>{window.removeEventListener('resize',()=>{dispatch({type:'screenWidth'})})}
    },[state.width])
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
            { state.showFeatures &&  <ul className={`bg-white px-8 py-6 rounded-xl ${state.width > 768 ? `fixed shadow-2xl left-[9rem] xl:left-[11.3rem] mt-3 xl:mt-6`:``}`}>
                {Features.map((Features,key)=>{
                return  <li className={`navLi md:mt-1 mb-3`}><img src={Features.source} width={17} alt="icon" /> <a href="#">{Features.name}</a></li>
                })}
            </ul>
            }
         </div>
         <div>
         <button className="navbtn" onClick={()=>{dispatch({type:'showCompany'})}}>Company <img className={`mt-1 ${state.showCompany & true? `-rotate-180 transition ease-in-out duration-300 `:``}`} src={arrowDown} alt="" /></button>
           {state.showCompany && <ul className={`bg-white px-8 py-6 rounded-xl ${state.width > 768 ? `fixed shadow-2xl mt-3 xl:mt-6`:``}`}>
                {Company.map((Company,key)=>{
                return   <li className={`navLi ${state.width > 768 ? `mt-1`:`mb-4`}`}><a href="#">{Company}</a></li>
                })}
            </ul>
           }
         </div>
         <button className="hover:text-AlmostBlack transition duration-200 ease-in text-base lg:text-lg xl:text-xl">Careers</button>
         <button className="hover:text-AlmostBlack transition duration-200 ease-in text-base lg:text-lg xl:text-xl">About</button>
        </>
    );
}


export function LoginOrSignUp() {
    return (
        <div className={`flex md:gap-[2rem] lg:gap-[3rem] mb-3`}>
            <button className="hover:text-AlmostBlack transition duration-300 ease-in text-sm md:text-base lg:text-lg xl:text-xl">Login</button>
            <button className="border outline-none text-sm md:text-base xl:text-xl hover:text-AlmostBlack hover:border-AlmostBlack transition duration-300 ease-in px-[1.5rem] py-[0.5rem] rounded-2xl lg:text-lg xl:py-[0.8rem] xl:px-[2rem]">Register</button>
        </div>
    );
}