import React from "react";
import { FcDownRight } from "react-icons/fc";
import { Link } from "react-router-dom";
const MySubAssignmentRow = ({ assignment }) => {
  const {
    _id,
    author,
    driveLink,
    getmarks,
    status,
    submitUserEmail,
    sumitUserName,
    thumbnail,
    title,
  } = assignment || {};

  return (
    <>
      {/* row 1 */}
      <tr>
        <th>
          <button>
            <FcDownRight className="hover:text-red-500" size={40} />
          </button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-24 h-24">
                {thumbnail && (
                  <img
                    className="w-full h-full object-cover"
                    src={thumbnail}
                    alt="Avatar Tailwind CSS Component"
                  />
                )}
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
            </div>
          </div>
        </td>

        <td className="font-bold text-green-600">{sumitUserName}</td>
        <td>
          {" "}
          <Link to={`/view-solution/${_id}`}> <button className="btn btn-primary btn-sm">View Solution</button></Link>{" "}
        </td>
        <td>
          <span className="bg-green-200 p-2 rounded-full text-green-900">
            {status}
          </span>
        </td>
        <td>
          {" "}
          <span className="font-bold">{getmarks}</span> / 100
        </td>
      </tr>
    </>
  );
};

export default MySubAssignmentRow;
