import { WhyChooseBlockType } from "@/Types/WhyChooseUsBlockType"
import React from "react"

const WhyChooseUsBlock:React.FC<WhyChooseBlockType> =({heading,content})=>{
return(
    <>
    <div className="whyChooseUsBlock">
        <h1 className="whyChooseUsBlock__heading">
            {heading}
        </h1>
        <p className="text-slate-500">
            {content}
        </p>
    </div>
    </>
)
}

const WhyChooseUs = ()=>{
    const whyChooseUsBlockData = [
        {
            heading:"24 Hour Service - When second counts, we make difference",
            content:"We provide our services round the clock and assist patients during their emergencies irrespective of time and place."
        },
        {
            heading:"Quality - Trust Us! We are doctors on wheels",
            content:"With our professional drivers, medical staff and leading edge medical equipments, we deliver the highest quality service to all our patients."
        },
        {
            heading:"Swift & affordable - Exceptional service with quick response",
            content:"In case of emergencies, our ambulances shall try to reach the patient's place within 15 to 30 minutes. If required, we also provide a professional medical staff to assist."
        },
        {
            heading:"Equipped Ambulance – We always dare to fight the extreme",
            content:"Our ambulances are always equipped with the required medical equipment to treat the patients and help them to reach the hospital safely."
        },
    ]
    return(
        <div className="whyChooseUs__outer">
            <div className="whyChooseUs__outerlayer z-10"></div>
        <section className="col_10 mx-auto z-20">
            <div className="whyChooseUs">
                <h1 className="whyChooseUs__heading">Why Prefer Us</h1>
            </div>
            <div className="row z-20">
                {whyChooseUsBlockData.map((v,i)=>{
                    return(
                        <>
                        <div className="whyChooseus__outer">
                            <WhyChooseUsBlock heading={v.heading}
                            content={v.content} 
                            />
                        </div>
                        </>
                    )
                })}
            </div>
        </section>
        </div>
    )
}

export default WhyChooseUs;