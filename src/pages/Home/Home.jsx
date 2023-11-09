import React from "react";
import Banner from "../../components/Banner/Banner";
import MarqueImage from "../../components/MarqueImage/MarqueImage";
import Faq from "../../components/Faq/Faq";
import Feature from "../../components/Feature/Feature";

const Home = () => {
  return (
    <>
      <div>
        <Banner />
      </div>
      <div
        className="py-14"
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/7LfgJg6j/main-background-3.jpg)",
        }}
      >
        <MarqueImage />
      </div>
      <div>
        <Feature />
      </div>
      <div>
        <Faq />
      </div>
    </>
  );
};

export default Home;
