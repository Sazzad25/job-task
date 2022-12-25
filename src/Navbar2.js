import React from 'react';

const Navbar2 = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <h2 className='font-semibold'>Back to Jobs</h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 justify-between">
      <li><a>Search Jobs</a></li>
      <li><a>Applied</a></li>
      <li><a>Saved Jobs</a></li>
    </ul>
  </div>
</div>
    );
};

export default Navbar2;