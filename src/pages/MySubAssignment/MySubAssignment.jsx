import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxios from "../../hooks/useAxios";
import MySubAssignmentRow from "./MySubAssignmentRow";
const MySubAssignment = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(false);
  const axios = useAxios();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/submit-assignments?submitUserEmail=${user?.email}`)
      .then((res) => {
        setAssignments(res.data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center py-9">
            My Submitted Assignments : {assignments?.length}
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
                    <th>Submit By</th>
                    <th>View Solution</th>
                    <th>Status</th>
                    <th>Marks</th>
                  </tr>
                </thead>
                <tbody>
                  {assignments?.map((assignment) => (
                    <MySubAssignmentRow
                      key={assignment?._id}
                      assignment={assignment}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MySubAssignment;
