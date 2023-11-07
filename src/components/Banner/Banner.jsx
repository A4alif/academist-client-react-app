import React from "react";
import { Link } from "react-router-dom";
import BannerCarousel from "../BannerCarousel/BannerCarousel";

const Banner = () => {
  return (
    <>
      <div>
        <div className="container mx-auto px-6 py-28">
          <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 ">
            <div className="flex-1 ">
              <div className="flex flex-col items-center md:items-start">
                <h2 className=" text-5xl  md:text-7xl font-bold">
                  Learn & <span className="text-green-600">Discover</span>{" "}
                </h2>
                <p className="py-9 leading-7 font-light text-gray-500">
                  Ready to learn and have fun? Find a <br /> perfect assignment
                  and join us today
                </p>
                <div className="divider"></div>
                <div>
                  <Link to={"/assignments"}>
                    <button className=" text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 mt-6">
                      See Assignments
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div>
                <img
                  className="w-full h-[450px] object-cover"
                  src="https://i.postimg.cc/VLM3hgbF/banner-Two.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
