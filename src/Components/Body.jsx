import { useEffect, useReducer } from "react"
import mobile from '../assets/image-hero-mobile.png'
import desktop from '../assets/image-hero-desktop.png'

const reducer=(state,action)=>{
    switch(action.type){
        case 'screenWidth':
            return {...state,width:window.innerWidth};
        default:
            throw new Error();
    }
}

export const Body =()=>{

    const [state,dispatch]=useReducer(reducer,{width: window.innerWidth});
    useEffect(()=>{
        dispatch({type:'screenWidth'})
    },[state.width])

    return(
        <div className="h-screen">
            <div>{state.width > 768 ? <img src={desktop} alt="destop img"/>:<img src={mobile} alt="destop img"/>}</div>
            <div className="flex flex-col items-center">
                <h1 className="text-[2.5rem] md:text-left font-extrabold text-AlmostBlack">Make remote work</h1>
                <p className="text-center md:text-left text-MediumGray text-[1.1rem] w-[21rem]">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <button className="hover:border hover:border-AlmostBlack outline-none text-AlmostWhite hover:text-AlmostBlack bg-AlmostBlack hover:bg-AlmostWhite px-[1.5rem] py-[0.6rem] rounded-xl text-sm md:text-base">Learn more</button>
                <div>

                </div>
            </div>
        </div>
    )
}