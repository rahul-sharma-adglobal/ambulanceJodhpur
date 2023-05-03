import Banner from "./Banner";
import FloatingButtons from "./FloatingButtons";
import Header from "./Header";
import OurServices from "./OurServices";
import WhyChooseUs from "./WhyChooseUs";

const HomePage = ()=>{
    return(
        <>
        {/* header start */}
        <Header />
        {/* header end */}
        {/* body start */}
        <Banner />
        <WhyChooseUs />
        <OurServices />
        {/* body end */}
        {/* Floating Button start */}
        <FloatingButtons />
        {/* Floating Button end */}
        {/* footer start */}
<div className="bg-slate-500 p-2"></div>
        {/* footer end */}
        </>
    )
}
export default HomePage;