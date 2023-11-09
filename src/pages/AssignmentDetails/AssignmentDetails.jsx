import React, { useContext, useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { toast } from "react-toastify";

const AssignmentDetails = () => {
  const [assignment, setAssignment] = useState({});
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const axios = useAxios();
  const { id } = useParams();

  const { user } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    axios.get(`/all-assignments/${id}`).then((res) => {
      setAssignment(res.data);
      setLoading(false);
    });
  }, []);
  const {
    title,
    author,
    description,
    difficultyLevel,
    dueDate,
    marks,
    thumbnail,
  } = assignment || {};

  const assignmentInfo = {
    title,
    author,
    submitUserEmail: user?.email,
    sumitUserName: user?.displayName,
    thumbnail,
    getmarks: 0,
    status: "pending",
  };

  // modal
  const onOpenModal = () => {
    setOpen(true);
  };
  const onCloseModal = () => setOpen(false);

  const handleTakeAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const driveLink = form.drivelink.value;
    const newAssignmentInfo = {
      ...assignmentInfo,
      driveLink,
    }
    
    axios.post("/submit-assignments", newAssignmentInfo)
    .then(res => {
      if(res.data.insertedId){
        toast.success('Assignment Submitted', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          setOpen(false)
      } else {
        toast.error('Something Went Wrong', {
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
  };

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
                  <h2 className="text-xl md:text-2xl lg:text-3xl ">{title}</h2>
                  <div className="flex items-center space-x-4 text-md">
                    <p className="py-6">
                      Posted by:{" "}
                      <span className="text-green-600 font-bold">{author}</span>{" "}
                    </p>
                    <p>
                      Due Date:{" "}
                      <span className="text-green-600 font-bold">
                        {" "}
                        {dueDate}
                      </span>{" "}
                    </p>
                    <p>
                      Marks:{" "}
                      <span className="text-green-600 font-bold"> {marks}</span>{" "}
                    </p>
                  </div>
                  <div>
                    <p className="text-justify leading-7">{description}</p>
                  </div>
                  <div className="pb-8">
                    <button
                      onClick={onOpenModal}
                      className=" pb text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 mt-6"
                    >
                      Take Assignment
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
          <form onSubmit={handleTakeAssignment}>
            <h2 className="pb-6 text-xl">
              Submit Your Assignment by providing Google Drive Link
            </h2>
            <div className="w-3/4">
              <label
                className="block text-lg font-semibold mb-4"
                htmlFor="drivelink"
              >
                Drive Link
              </label>
              <input
                className="bg-gray-200 w-full py-3 px-2 rounded-lg focus:outline-none"
                type="text"
                name="drivelink"
                id="drivelink"
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
  );
};

export default AssignmentDetails;
