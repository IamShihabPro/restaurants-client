import React from "react";
import { MdDelete } from "react-icons/md";


const UsersTable = ({user, i, handleMakeAdmin, handleDelete}) => {

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
          <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-xs hover:bg-transparent">  
              {
                user.role === 'admin' ? <h1 className="text-white bg-green-500 px-4 py-2 rounded-xl">Admin</h1> : <h1 className="text-white bg-red-500 px-4 py-2 rounded-xl">Make Admin</h1>
              }
          </button>
        </th>

        <th>
          <button onClick={() => handleDelete(user)} className="btn btn-sm btn-outline hover:bg-red-600 hover:border-none hover:text-white rounded-sm"> <MdDelete /> </button>
        </th>
      </tr>
    </>
  );
};

export default UsersTable;
