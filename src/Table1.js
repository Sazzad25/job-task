import React from "react";
import image1 from "../src/Images/image1.png";
const Table1 = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 p-4">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={image1} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-extrabold">Architectural Designer</h2>
          <p>Black Mountain Architecture</p>
          <p>Posted 07/27/2022</p>
          {/* <div className="card-actions justify-end"> */}
          {/* <button className="btn btn-primary">Apply on Archslate</button> */}
          {/* <button className="btn btn-wide">Apply on Archslate</button> */}
         
          {/* </div> */}
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
         
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
          <button className="btn btn-success">Status: Accepting Applications</button>
          </div>
          <div className="card-actions justify-end">
          <button className="btn btn-active btn-secondary">Apply on Archslate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table1;
