import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
const UpdateAssignment = () => {
  const [assignment, setAssignment] = useState({});
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const axios = useAxios();

  useEffect(() => {
    axios.get(`/all-assignments/${id}`).then((res) => {
      setAssignment(res.data);
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

  const handleUpdateAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const thumbnail = form.photourl.value;
    const marks = form.marks.value;
    const description = form.description.value;
    const dueDate = form.dueDate.value;
    const difficultyLevel = form.assignmentType.value;

    const assignmentInfo = {
      title,
      thumbnail,
      marks,
      description,
      dueDate,
      difficultyLevel,
      author: user?.displayName,
      email: user?.email,
    };

    axios.put(`/update-assignment/${id}`, assignmentInfo)
    .then( res => {
      if(res.data.modifiedCount > 0){
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Assignment Updated Successfully",
          
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: "Something Went Wrong",
          
        });
      }
    })


  };
  return (
    <>
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row  items-center lg:items-start space-y-8 lg:space-y-0">
          <div className=" w-full lg:flex-1  ">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                Update an Assignment
              </h2>
              <div className="h-[450px] w-full flex justify-center ">
                <img
                  className="h-full w-full lg:w-3/4 object-cover"
                  src="https://i.postimg.cc/X7bkLkKF/post-assignment.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className=" w-full lg:flex-1 bg-base-200 shadow-lg">
            <form onSubmit={handleUpdateAssignment}>
              <div className="flex justify-center pt-6">
                <div className=" w-3/4  lg:w-3/4 ">
                  <label
                    className="block text-xl font-semibold mb-4"
                    htmlFor="title"
                  >
                    Assignment Title
                  </label>
                  <input
                    defaultValue={title}
                    name="title"
                    id="title"
                    className="py-2 px-2 rounded-lg focus:outline-none w-full"
                    type="text"
                    placeholder="Assignment Title"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-center pt-6">
                <div className="  w-3/4  lg:w-3/4 ">
                  <label
                    className="block text-xl font-semibold mb-4"
                    htmlFor="photourl"
                  >
                    Thumbnail
                  </label>
                  <input
                    defaultValue={thumbnail}
                    name="photourl"
                    id="photourl"
                    className="py-2 px-2 rounded-lg focus:outline-none w-full"
                    type="text"
                    placeholder="photo url"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-center pt-6">
                <div className="  w-3/4 lg:w-3/4 ">
                  <label
                    className="block text-xl font-semibold mb-4"
                    htmlFor="marks"
                  >
                    Marks
                  </label>
                  <input
                    defaultValue={marks}
                    name="marks"
                    id="marks"
                    className="py-2 px-2 rounded-lg focus:outline-none w-full"
                    type="number"
                    placeholder="total marks"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-center pt-6">
                <div className=" w-3/4  lg:w-3/4 ">
                  <label
                    className="block text-xl font-semibold mb-4"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <textarea
                    defaultValue={description}
                    name="description"
                    id="description"
                    cols="10"
                    rows="3"
                    className="py-2 px-2 rounded-lg focus:outline-none w-full"
                    placeholder="Description"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-center pt-6">
                <div className=" w-3/4  lg:w-3/4 ">
                  <label
                    className="block text-xl font-semibold mb-4"
                    htmlFor="dueDate"
                  >
                    Due Date
                  </label>
                  <input
                    defaultValue={dueDate}
                    name="dueDate"
                    id="dueDate"
                    className="py-2 px-2 rounded-lg focus:outline-none w-full text-gray-400"
                    type="date"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-center pt-6 pb-9">
                <div className=" w-3/4  lg:w-3/4 ">
                  <label
                    htmlFor="assignmentType"
                    className="font-semibold text-lg mr-4"
                  >
                    Select Difficulty Level{" "}
                  </label>
                  <select
                    className="w-40 py-2 rounded-md focus:outline-none"
                    name="assignmentType"
                    id="assignmentType"
                    required
                  >
                    <option value="">Select Type</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-center pt-6 pb-6">
                <div className="  lg:w-3/4 ">
                  <button
                    type="submit"
                    className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Update Assignment
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateAssignment;
