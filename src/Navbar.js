import React from 'react';

import wobot1 from "../src/Images/wobot1.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-200 mt-5">
  <div className="flex-1">
    <img className='mr-3' src={wobot1} alt="" />
  </div>
</div>
  );
};

export default Navbar;