import React from "react";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-rango-luxury">
      <h1 className="flex-1 text-4xl font-bold ">
        Rango<span className="text-[#983621]">Todo</span>
      </h1>
      <Link to="/" className="flex-none">
        <HiArrowRightOnRectangle fontSize={30} />
      </Link>
    </div>
  );
};

export default Header;
