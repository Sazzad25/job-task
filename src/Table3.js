import React from "react";
import man from "../src/Images/man.png";
const Table3 = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 p-4">
      <div className="">
        <h2 className="text-2xl font-semibold">About This Role</h2>
        <p className="text-2xl mt-5">
          Short overview about job and the way that the candidate would fit into
          the company. Can also include extra instructions for the application
          process if any exit.
        </p>
        <h2 className="text-2xl font-semibold mt-3 mb-3">Responsibilities</h2>
        <ol className="text-2xl pl-8">
          <li>* specific day to day task</li>
          <li>* deliverables</li>
          <li>* work environment requirements</li>
          <li>* role within the current team</li>
          <li>* etc.</li>
        </ol>
        <h2 className="text-2xl font-semibold mt-3 mb-3">Skills</h2>
        <ul className="text-2xl pl-8">
          <li>* software skills</li>
          <li>* technical skills</li>
          <li>* soft skills</li>
          <li>* other</li>
        </ul>
        <h2 className="text-2xl font-semibold">Qualifications</h2>
        <h4 className="text-2xl mt-3">Required</h4>
        <ul className="text-2xl pl-8">
          <li>* education</li>
          <li>* licenses and certifications</li>
          <li>* experiences needed</li>
        </ul>
        <h4 className="text-2xl mt-3">Bonus</h4>
        <ul className="text-2xl pl-8">
          <li>* education</li>
          <li>* licenses and certifications</li>
          <li>* experiences needed</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-3 mb-3">Rate</h2>
        <ul>
          <li className="text-2xl pl-8">* if available</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-3 mb-3">Time Estimate</h2>
        <ul>
          <li className="text-2xl pl-8">* if applicable</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-3 mb-3">Work Autoriation</h2>
        <ul>
          <li className="text-2xl pl-8">* tbd</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-3 mb-3">About Company</h2>
        <p className="text-2xl mb-4">
          Description of company with any uniform info or disclaimers - equal
          hiring opportunity, etc.
        </p>
        <div>
          <button className="btn btn-active btn-secondary">
            Apply on Archslate
          </button>
          <button className="btn m-5">Save</button>
          <button className="btn">Share & Refer</button>
        </div>
      </div>
      <div className="ml-80">
        <h1 className="text-2xl font-bold">Job Poster</h1>
       <div className="flex items-center space-x-3">
       <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={man} alt="" />   
          </div>
        </div>
        <div>
           <h2 className="text-black text-2xl">John Carlos</h2>
           <h2 className="text-2xl font-semibold">Project Manager</h2>
        </div>
       </div>
       <button className="btn btn-wide mt-5">Message</button>
      </div>
    </div>
  );
};

export default Table3;
