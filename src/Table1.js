import React, { useEffect, useState } from "react";
import TableCard1 from "./Table2";

const Table1 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("tableData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="overflow-x-auto w-full mt-10 p-5">
      <h2 className="text-2xl text-center">Table No 1</h2>
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Email Address</th>
            <th>Joining Date</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dat) => (
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={dat.person.avatar} alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{dat.person.name}</div>
                  </div>
                </div>
              </td>
              <td>{dat.city}</td>
              <td>{dat.email}</td>
              <th>
                <button className="btn btn-ghost btn-xs">
                  {dat.joiningDate}
                </button>
              </th>
              <td>{dat.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table1;
