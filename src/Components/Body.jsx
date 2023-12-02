import { useEffect, useReducer } from "react"
import mobile from '../assets/image-hero-mobile.png'
import desktop from '../assets/image-hero-desktop.png'
import audiophile from '../assets/client-audiophile.svg'
import databiz from '../assets/client-databiz.svg'
import maker from '../assets/client-maker.svg'
import meet from '../assets/client-meet.svg'



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
        window.addEventListener('resize',()=>{dispatch({type:'screenWidth'})})
        return ()=>{window.removeEventListener('resize',()=>{dispatch({type:'screenWidth'})})}
    },[state.width])

    const image =[databiz,audiophile,meet,maker]

    return(
        <div className="flex flex-col lg:flex-row-reverse lg:justify-center lg:items-center lg:h-[89vh]">
            <div className="lg:w-[30rem]">{state.width > 1024 ? <img src={desktop} alt="destop img"/>:<img className="md:w-full" src={mobile} alt="destop img"/>}</div>
            <div className="flex flex-col items-center lg:items-start">
                <h1 className={`text-[2.5rem] sm:text-[5rem] md:text-[6.5rem] font-extrabold text-AlmostBlack mt-[2rem] sm:mt-[1.5rem]`}>Make remote work</h1>
                <p className={`text-center lg:text-left text-MediumGray text-[1.1rem] sm:text-[1.7rem] md:text-[2rem] w-[21rem] sm:w-[29rem] md:w-[44rem] mt-[1rem] sm:mt-[0.7rem]`}>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <button className={`bodybtn`}>Learn more</button>
                <div className={`flex items-center justify-between w-[22rem] sm:w-[36rem] md:w-[50rem] lg:w-[30rem] mt-[2rem] sm:mt-[1.5rem] sm:mb-[2rem]`}>
                    {
                        image.map((image,key)=>{
                            return <img className="w-[4rem] sm:w-[5rem]" key={key} src={image} alt="icon" />
                        })
                    }
                </div>
            </div>
        </div>
    )
}