import React from 'react';
import image5 from "../src/Images/image5.png";
import Blue from "../src/Images/Blue.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <img className='mr-3' src={Blue} alt="" />
    <img src={image5} alt="" />
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Candidates</a></li>
      <li><a>Companies</a></li>
      <li><a>Jobs</a></li>
      <li><a>Notifications</a></li>
      <li><a>User Name</a></li>
    </ul>
  </div>
</div>
  );
};

export default Navbar;