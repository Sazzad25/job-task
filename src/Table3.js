import React, { useEffect, useState } from "react";

const Table3 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("tableData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="overflow-x-auto w-full mt-10 p-5">
      <h3 className="text-2xl text-center">Table No 3</h3>
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>Email Address</th>
            <th>Joining Date</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dat) => (
            <tr>
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

export default Table3;
