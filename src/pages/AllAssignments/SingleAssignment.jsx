import React from "react";
import { Link } from "react-router-dom";

const SingleAssignment = ({ assignment }) => {
  const {
    _id,
    title,
    thumbnail,
    marks,
    description,
    dueDate,
    difficultyLevel,
  } = assignment;
  

  return (
    <>
      <div>
        <div className="card  bg-base-100 shadow-xl">
          <div className="relative">
            <figure className="py-6 ">
              <img
                className="h-[350px] w-[450px] object-cover  "
                src={thumbnail}
                alt="Shoes"
              />
            </figure>
          </div>
          <div className="px-8 pb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-md font-bold ">{title}</h2>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-400">
                {description.length > 100
                  ? description.slice(0, 100) + "..."
                  : description}
              </p>
            </div>
            <div className="mt-4">
              <p className="text-lg text-gray-500 font-bold">
                Total Marks : {marks}
              </p>
            </div>
            <div className="flex justify-around mt-4">
              <div>
                <Link to={`/assignmentdetails/${_id}`} >
                  {" "}
                  <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    See Details
                  </button>
                </Link>
              </div>
              <div>
                <Link to={"/update-assignment"}>
                  <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    Update Info{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleAssignment;
