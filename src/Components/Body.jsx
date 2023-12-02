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
            <div><h1>Make remote work</h1></div>
        </div>
    )
}