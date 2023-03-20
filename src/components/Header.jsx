import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import Logo from "../img/uzum.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const { isActive, setIsActive } = useState(false);
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);


  return (
    <header className={`${isActive ? 'bg-none py-6' : 'bg-white py-2 shadow-md'} fixed w-full z-10 transition-all mb-7`}>
      <div className="container mx-auto flex items-center  h-full">
        <Link to={"/"}>
          <div className=" mr-5">
            <img className="w-[190px] h-[60px]" src={Logo} alt="" />
          </div>
        </Link>
        <div className="mx-0 p-0 m-0 mr-[1000px]">
          <ul className="flex gap-x-4">
            <li className="text-sm font-medium uppercase">
              <Link to="/products">Products</Link>
            </li>
            <li className="text-sm font-medium uppercase">
              <Link to={"/"}>Shop</Link>
            </li>
            <li className="text-sm font-medium uppercase">
              <Link to={"/"}>About</Link>
            </li>
            </ul>
        </div>
        <div
          className="cursor-pointer flex relative "
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;