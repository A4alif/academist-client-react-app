import React, { useContext, useEffect, useState } from 'react'

import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { toast } from "react-toastify";
import useAxios from '../../hooks/useAxios';
const ViewSolution = () => {
    const [assignment, setAssignment] = useState({});
    const [open, setOpen] = useState(false);
  
    const [loading, setLoading] = useState(false);
    const axios = useAxios();
    const { id } = useParams();
    const navigate = useNavigate();
  
    const { user } = useContext(AuthContext);

    const onOpenModal = () => {
        setOpen(true);
      };
      const onCloseModal = () => setOpen(false);
  
    useEffect(() => {
      setLoading(true);
      axios.get(`/submit-assignments/${id}`).then((res) => {
        setAssignment(res.data);
        setLoading(false);
      });
    }, []);
    const {_id, title, thumbnail, sumitUserName, submitUserEmail, status, getmarks, driveLink, author} = assignment || {}

    const handleGiveMarks = (e) => {
        e.preventDefault();
        const form = e.target;
        const newMarks = form.yourmarks.value;
        const updatedAssignmentInfo = {
            status: 'completed',
            getmarks: newMarks
        }

        axios.put(`/submit-assignments/${id}`, updatedAssignmentInfo)
        .then(res => {
           if(res.data.modifiedCount > 0){
            toast.success('Give Marks Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                navigate("/assignments")
           } else {
            toast.error('Something Went Wrong !!!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
           }
        })
        
       
    }

    
  return (
    <> 
         <div>
        <div className="container mx-auto px-6 py-24">
          <div className="flex flex-col lg:flex-row  items-center lg:items-start space-y-8 lg:space-y-0">
            <div className=" w-full lg:flex-1  ">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
                  View Assignment Solution
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
                  <h2 className="text-xl md:text-2xl lg:text-3xl ">{title}</h2>
                  <div className="flex items-center space-x-4 text-md">
                    <p className="py-6">
                      Submitted By:{" "}
                      <span className="text-green-600 font-bold">{sumitUserName}</span>{" "}
                    </p>
                    <p>
                      Status:{" "}
                      <span className="text-green-600 font-bold">
                        {" "}
                        {status}
                      </span>{" "}
                    </p>
                    <p>
                     Total Marks:{" "}
                      <span className="text-green-600 font-bold"> 100</span>{" "}
                    </p>
                    <p>
                     Your Marks:{" "}
                      <span className="text-green-600 font-bold"> {getmarks}</span>{" "}
                    </p>
                  </div>
                  <div>
                    <p className="text-justify leading-7">Solution:   </p>
                    <p className='text-blue-700' ><Link to={driveLink} target='_blank'>Google Drive Link</Link></p>
                  </div>
                  <div className="pb-8">
                    <button
                      onClick={onOpenModal}
                      className=" pb text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 mt-6"
                    >
                      Give Marks
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal section */}
      <Modal open={open} onClose={onCloseModal} center>
        <div className="py-16 px-6 ">
          <form onSubmit={handleGiveMarks} >
            <h2 className="pb-6 text-xl">
              Give your marks for this assignment
            </h2>
            <div className="w-3/4">
              <label
                className="block text-lg font-semibold mb-4"
                htmlFor="yourmarks"
              >
                Your Marks
              </label>
              <input
                className="bg-gray-200 w-full py-3 px-2 rounded-lg focus:outline-none"
                type="number"
                name="yourmarks"
                id="yourmarks"
                required
              />
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  )
}

export default ViewSolution