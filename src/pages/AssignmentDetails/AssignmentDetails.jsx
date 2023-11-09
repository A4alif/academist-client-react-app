import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useParams } from "react-router-dom";

const AssignmentDetails = () => {
  const [assignment, setAssignment] = useState({});
  const [loading, setLoading] = useState(false)
  const axios = useAxios();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`/all-assignments/${id}`).then((res) => {
      setAssignment(res.data);
      setLoading(false)
    });
  }, []);
  const {title, author, description, difficultyLevel, dueDate, marks, thumbnail} = assignment || {}
  return (
    <>
      <div>
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row  items-center lg:items-start space-y-8 lg:space-y-0">
          <div className=" w-full lg:flex-1  ">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                Assignment Details
              </h2>
              <div className="h-[450px] w-full flex justify-center ">
                <img
                  className="h-full w-full lg:w-3/4 object-cover"
                  src={thumbnail}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className=" w-full lg:flex-1 bg-base-200 shadow-lg">
            
              <div className="flex justify-center pt-6">
                <div className=" w-3/4  lg:w-3/4 ">
                  <h2 className="text-xl md:text-2xl lg:text-3xl " >{title}</h2>
                 <div className="flex items-center space-x-4 text-md" >
                 <p className="py-6">Posted by: <span className="text-green-600 font-bold" >{author}</span> </p>
                 <p>Due Date: <span className="text-green-600 font-bold" > {dueDate}</span> </p>
                 <p>Marks: <span className="text-green-600 font-bold" > {marks}</span> </p>
                 </div>
                  <div>
                    <p className="text-justify leading-7">{description}</p>
                  </div>
                  <div className="pb-8">
                  <button className=" pb text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 mt-6">
                      Take Assignment
                    </button>
                  </div>
                </div>
              </div>
             
            
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default AssignmentDetails;
