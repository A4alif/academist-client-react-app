import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import SingleAssignment from "../../pages/AllAssignments/SingleAssignment";

const Feature = () => {
    const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const axios = useAxios();

  useEffect(() => {
    setLoading(true);
    axios.get("/all-assignments").then((res) => {
      setAssignments(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <>
      <div className="pt-24 pb-9">
        <div className="container mx-auto px-6">
          <h2 className="text-6xl font-semibold text-center text-green-600">
            Feature Assignments
          </h2>
          {loading && (
            <>
              <div className="text-center py-14 text-green-700" >
              <span className="loading loading-bars loading-lg"></span>
              </div>
            </>
          )}
            {/* show feature assignment */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-14 pb-9">
            {assignments?.slice(0, 3)?.map((assignment) => (
              <SingleAssignment key={assignment?._id} assignment={assignment} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
