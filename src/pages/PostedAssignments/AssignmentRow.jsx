import React from "react";
import { AiFillDelete } from "react-icons/ai";
const AssignmentRow = ({ assignment, handleDelete }) => {
  const {
    _id,
    title,
    thumbnail,
    marks,
    description,
    dueDate,
    difficultyLevel,
    author,
  } = assignment;

  return (
    <>
      {/* row 1 */}
      <tr>
        <th>
          <button onClick={() => handleDelete(_id)}>
            <AiFillDelete className="hover:text-red-500" size={40} />
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
        <td>{dueDate}</td>
        <td>{marks}</td>
        <td>{difficultyLevel}</td>
        <td>{author}</td>
        
      </tr>
    </>
  );
};

export default AssignmentRow;
