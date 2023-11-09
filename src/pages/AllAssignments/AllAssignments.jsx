import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import SingleAssignment from "./SingleAssignment";

const AllAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [level, setLevel] = useState("");
  const [loading, setLoading] = useState(false);
  const axios = useAxios();
  useEffect(() => {
    setLoading(true);
    axios.get(`/all-assignments?difficultyLevel=${level}`).then((res) => {
      setAssignments(res.data);
      setLoading(false);
    });
  }, [level]);

  return (
    <>
      <div>
        <div className="container mx-auto px-6 py-24">
          <div className="flex justify-between border-2 border-green-500 py-9 px-6 rounded-lg ">
            <div>
              <h2 className="text-3xl font-normal">
                Filter Assignments based on Difficulty
              </h2>
            </div>
            <div>
              <label
                htmlFor="assignmentType"
                className="font-semibold text-lg mr-4"
              >
                Select Difficulty Level{" "}
              </label>
              <select
                onChange={(e) => setLevel(e.target.value)}
                className="w-40 py-2 bg-gray-200 rounded-md focus:outline-none"
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

          {loading && (
            <>
              <div className="text-center py-14 text-green-700">
                <span className="loading loading-bars loading-lg"></span>
              </div>
            </>
          )}
          {/* show all assignments */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-14 pb-9">
            {assignments?.map((assignment) => (
              <SingleAssignment key={assignment?._id} assignment={assignment} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllAssignments;
