import React from "react";
import wobot2 from "../src/Images/Wobot2.png";

const Table1 = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="text-center ml-16 pl-16">
                <img className="" src={wobot2} alt="" />
              </div>
              <h1 className="text-2xl font-semibold text-center">
                It's a delight to have you <br />
                onboard
              </h1>
              <p className="text-center text-xs">Help us know you better.</p>
              <p className="text-xs	">(This is how we optimize Wobot as per your business needs)</p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Company name</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Example Inc"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Industry</span>
                </label>
                <select className="select w-full max-w-xs input input-bordered">
                  <option className="" disabled selected>
                    Select
                  </option>
                  <option>Homer</option>
                  <option>Marge</option>
                  <option>Bart</option>
                  <option>Lisa</option>
                  <option>Maggie</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Company size</span>
                </label>
                <div className="text-sm">
                  <ul className="flex">
                    <li className="bg-gray-200">
                      <>1-20</>
                    </li>
                    <li className="ml-3 mr-3 bg-gray-200">
                      <>21-50</>
                    </li>
                    <li className="bg-primary text-white">51-200</li>
                    <li className="ml-3 mr-3 bg-gray-200">201-500</li>
                    <li className="bg-gray-200">500+</li>
                  </ul>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table1;
