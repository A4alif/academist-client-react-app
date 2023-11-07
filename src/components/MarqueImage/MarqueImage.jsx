import React from "react";
import Marquee from "react-fast-marquee";

const MarqueImage = () => {
  return (
    <>
      <div>
        <div className="container mx-auto">
          <div >
            <Marquee pauseOnHover={true} speed={55} >
              <div className="flex space-x-8" >
                <div>
                  <img
                    src="https://i.postimg.cc/SNh712Tz/main-clients-1.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://i.postimg.cc/Y2gzxf3H/main-clients-2.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://i.postimg.cc/jd46pxm3/main-clients-3.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://i.postimg.cc/SxQLk0pS/main-clients-4.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://i.postimg.cc/2SHQ5Hz4/main-clients-5.png"
                    alt=""
                  />
                </div>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarqueImage;
