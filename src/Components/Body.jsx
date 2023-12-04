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
        <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between lg:h-[89vh] lg:px-[3rem] xl:px-[15rem] lg:py-[27rem]">
            <div >{state.width > 1024 ? <img className="lg:w-[31.25rem] xl:w-[32rem]" src={desktop} alt="destop img" />:<img className="md:w-full" src={mobile} alt="destop img"/>}</div>
            <div className="flex flex-col items-center lg:items-start lg:mt-[5.5rem]">
                <h1 className={`text-[2.5rem] sm:text-[5rem] md:text-[6.5rem] lg:leading-[5rem] lg:w-[36rem] font-extrabold text-AlmostBlack mt-[2rem] sm:mt-[1.5rem] lg:mb-[2.5rem]`}>Make remote work</h1>
                <p className="paragraph">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <button className="bodybtn">Learn more</button>
                <div className={`flex items-center justify-between w-[22rem] sm:w-[36rem] md:w-[50rem] lg:w-[34rem] mt-[2rem] sm:mt-[1.5rem] sm:mb-[2rem] lg:mb-0`}>
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