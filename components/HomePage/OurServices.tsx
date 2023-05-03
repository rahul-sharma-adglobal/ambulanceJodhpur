import { AmbulanceCarType } from "@/Types/AmbulanceCarType"
import React from "react"

const AmbulanceCar:React.FC<AmbulanceCarType> =({carModel,withNursing,price})=>{
    return(
        <>
        <div className="ambulanceCar">
            <h1 className="ambulanceCar__model">{carModel}</h1>
            <p className="ambulanceCar__price">{price} /km</p>
            <p className="ambulanceCar__withNursing">{withNursing?"with Nursing Staff":"Nursing Staff 3000/day"}</p>
        </div>
        </>
    )
}
const OurServices =()=>{
    const carModels=[
        {
            model:"Eco Ambulance",
            price:13,
            withNursing:false
        },
        {
            model:"Bolero Ambulance",
            price:13,
            withNursing:false
        },
        {
            model:"Tavera Ambulance",
            price:13,
            withNursing:false
        },
        {
            model:"Inova Ambulance",
            price:13,
            withNursing:false
        },
        {
            model:"Winger Ambulance",
            price:25,
            withNursing:true
        },
        {
            model:"Force Ambulance",
            price:25,
            withNursing:true
        }]
    const extrasevices = "morchy ambulance with deep freeze 22/km"
    const extra ="3k/day nersing staff"
    return(
        <div className="ourServices__outer">
            <div className="bg-slate-400 bg-opacity-75 pb-10">
                
        <section className="col_10 mx-auto">
            <div className="whyChooseUs">
                <h1 className="whyChooseUs__heading">Types of Ambulances</h1>
            </div>
            <div className="row justify-center items-stretch">
                {carModels.map((v,k)=>{
                    return(
                        <>
                        <div className="ambulanceCar__outer">
                    <AmbulanceCar carModel={v.model} price={v.price} withNursing={v.withNursing} />
                </div>
                        </>
                    )
                })}
            </div>
        </section>
            </div>
        </div>
    )
}

export default OurServices;