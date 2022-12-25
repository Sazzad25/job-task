import React from "react";

const Table2 = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 mt-4 p-4">
      <div className="card w-96  bg-base-100 text-neutral-content mr-8">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-black">Software Skills</h2>
          <div className="card-actions justify-end">
          <button className="btn">Rhino</button>
          <button className="btn">Sketchup</button>
          </div>
          <div className="card-actions justify-end">
         
          <button className="btn">Vectorworks</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 text-neutral-content ml-16 mr-15">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-black">Experience</h2>
          <h2 className="text-black text-2xl">Associate</h2>
          <h2 className="text-black text-2xl">3+ years</h2>
        </div>
      </div>
      <div className="card w-96 bg-base-100 text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-black">$  Rate</h2>
          <h2 className="text-black text-2xl">$55-$65/hour</h2>
        </div>
      </div>
      <div className="card w-96 bg-base-100 text-neutral-content ml-16">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-black">Location</h2>
          <h2 className="text-black text-2xl">Bozeman, MT</h2>
          <h2 className="text-black text-2xl">USA</h2>
          <button className="btn btn-secondary">On-Site</button>
        </div>
      </div>
    </div>
  );
};

export default Table2;
