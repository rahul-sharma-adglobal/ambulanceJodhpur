import { FloatingButtonsType } from "@/Types/FloatingButtonsType"
import React from "react"

const FloatingButton:React.FC<FloatingButtonsType> =({imgsrc,link})=>{
    return(
        <>
        <button className="floatingBtn" type="button">
            <a href={link}>
            <img src={imgsrc} />
            </a>
        </button>
        </>
    )
}

const FloatingButtons =()=>{
    return(
        <>
        <div className="floatingButtons">
            <div>
            <FloatingButton imgsrc="/assets/images/call.svg" link="tel:9509098811"/>
            </div>
            <div>
            <FloatingButton imgsrc="/assets/images/whatsapp.svg" link="https://wa.me/9509098811?text=Want%20to%20book%20an%20ambulance"/>
            </div>
        </div>
        </>
    )
}

export default FloatingButtons