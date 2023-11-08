import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useParams } from "react-router-dom";

const AssignmentDetails = () => {
  const [assignment, setAssignment] = useState({});
  const axios = useAxios();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/all-assignments/${id}`).then((res) => {
      setAssignment(res.data);
    });
  }, []);

  return (
    <>
      <div>
        <h2>{assignment.title}</h2>
      </div>
    </>
  );
};

export default AssignmentDetails;
