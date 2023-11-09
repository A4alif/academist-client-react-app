import React, { useContext, useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import AssignmentRow from "./AssignmentRow";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
const PostedAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(false);
  const axios = useAxios();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    axios.get(`/all-assignments?email=${user?.email}`).then((res) => {
      setAssignments(res.data);
      setLoading(false);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/all-assignments/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Assignment Deleted Successfully",
        });
      }
      const remaining = assignments.filter(
        (assignment) => assignment._id !== id
      );
      setAssignments(remaining);
    });
  };

  return (
    <div>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center py-9">
          My Posted Assignments : {assignments?.length}
        </h2>
        {loading && (
          <>
            <div className="flex justify-center">
              <span className="loading loading-spinner text-secondary loading-lg"></span>
            </div>
          </>
        )}
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="text-xl">
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Assignments</th>
                  <th>Due Date</th>
                  <th>Marks</th>
                  <th>Difficulty Level</th>
                  <th>Posted By</th>
                </tr>
              </thead>
              <tbody>
                {assignments?.map((assignment) => (
                  <AssignmentRow
                    key={assignment?._id}
                    assignment={assignment}
                    handleDelete={handleDelete}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostedAssignments;
