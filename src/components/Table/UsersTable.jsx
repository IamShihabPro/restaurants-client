import React from "react";
import { MdDelete } from "react-icons/md";


const UsersTable = ({user, i}) => {

    return (
    <>
      <tr className="bg-gray-50 text-lg">
        <td className="text-lg">{i+1}</td>
        <td>
          <div className="flex items-center justify-center gap-3">
            <div className="avatar">
              <div className="mask w-12 h-12">
                <img
                  src={user.photo} className="rounded-sm"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
          </div>
        </td>
        <td>{user.name}</td>
        <td>{user.email}</td>

        <th>
          <button className="btn btn-ghost btn-xs">Make Admin</button>
        </th>

        <th>
          <button className="btn btn-sm btn-outline hover:bg-red-600 hover:border-none hover:text-white rounded-sm"> <MdDelete /> </button>
        </th>
      </tr>
    </>
  );
};

export default UsersTable;
