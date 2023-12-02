import { useEffect, useReducer } from "react"


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
            <div></div>
            <div><h1>Make remote work</h1></div>
        </div>
    )
}