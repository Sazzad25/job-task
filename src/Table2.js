import React, { useEffect, useState } from "react";

const Table2 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("tableData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="overflow-x-auto w-full mt-10 p-5">
      <h2 className="text-2xl text-center">Table No 2</h2>
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email Address</th>
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
              <td>{dat.email}</td>
              <td>{dat.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table2;
