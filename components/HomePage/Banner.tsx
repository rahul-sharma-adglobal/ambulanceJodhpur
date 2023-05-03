const Banner = () => {
  return (
    <>
    <section>
      <div className="banner">
        <div className="row h-full">
          <div className="banner__leftSection">
            <div className="col_7 ml-auto mr-0 h-full">
              <div className="pt-10 md:pt-44">
              <p className="text-2xl md:text-3xl font-bold">
              Your One Step Solution For <span className="block font-extrabold text-4xl md:text-5xl animate-pulse" style={{color:"#d80027"}}>24*7</span> Ambulance Service 
              </p>
              <h4 className="md:text-xl font-bold">
                At Your Doorstep!
                </h4>
              <button className="callUs">
                <a href="tel:9509098811">
                Call Us At +91 95090 98811
                </a>
                </button>
              </div>
            </div>
          </div>
          <div className="col banner__rightSection">
            {/* <img src="assets/images/banner.svg" /> */}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Banner;
