import React, { useContext, useState } from "react";
// images
import Logo from "../img/logo.png";
// icons
import { BsBriefcaseFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
// link
import { Link } from "react-router-dom";
// components
import SearchForm from "../components/SearchForm";
import CategoryNavMobile from "../components/CategoryNavMobile";
import Cart from "../components/Cart";
// cart context
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { isOpen, setIsOpen, itemsAmount } = useContext(CartContext);
  const [catNavMobile, setCatnavMobile] = useState(false);
  return (
    <header className="bg-primary py-6 fixed w-full top-0 z-40 lg:relative xl:mb-[30px]">
      <div className="container mx-auto">
        <div className="flex flex-row gap-4 lg:items-center justify-between mb-4 xl:mb-0">
          {/* menu */}
          <div
            onClick={() => setCatnavMobile(true)}
            className="text-3xl py-2 xl:hidden cursor-pointer"
          >
            <FiMenu />
          </div>
          {/* category nav mobile */}
          <div
            className={`${
              catNavMobile ? "left-0" : "-left-full"
            } fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200`}
          >
            <CategoryNavMobile setCatnavMobile={setCatnavMobile} />
          </div>
          {/* logo */}
          <Link to={"/"}>
            <img src={Logo} alt="" />
          </Link>
          {/* searchform - show only on desktop */}
          <div className="hidden w-full xl:flex xl:max-w-[734px]">
            <SearchForm />
          </div>
          {/* phone & cart */}
          <div className="flex items-center gap-x-[10px]">
            {/* phone */}
            <div className="hidden xl:flex uppercase m-4">
              <Link to={"/vision"}> Our Vision </Link>
            </div>
            <div className="hidden xl:flex uppercase m-4">
              <Link to={"/products/31"}>Products</Link>
            </div>

            {/* <div className='hidden xl:flex uppercase m-4'>
             <Link to={'/myprofile'}>Profile</Link>
            </div> */}
            <div className="hidden xl:flex uppercase m-4">
              <Link to={"/contactus"}>Contact Us</Link>
            </div>
            {/* cart icon */}
            <div className="relative cursor-pointer ml-4 xl:hidden">
              <Link to={"/products/31"}>
                <BsBriefcaseFill className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
        {/* searchform - show on mobile only */}
        <div className="xl:hidden">
          <SearchForm />
        </div>
      </div>
    </header>
  );
};

export default Header;
