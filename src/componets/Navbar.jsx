import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiCoffee } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { AiOutlinePause } from "react-icons/ai";
import Menu from "./Menu";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <nav className=" absolute top-0 w-full h-16 center justify-between py-2 px-4 text-white z-20">
      <div className="center w-1/2 sm:w-1/3 justify-between">
        <Link to="/" className="hover:animate-pulse hover:text-red-500 z-30">
          <BiCoffee className="h-8 w-8 " />
        </Link>
        <span className="hidden xs:block">Feature in the blog</span>
      </div>

      <div className="relative">
        <div className="z-50" onClick={()=> setOpen(!open)}>
          {open ? <IoIosClose className="h-8 w-8 "/> : <AiOutlinePause className="h-8 w-8 rotate-90 z-50" />}
        </div>
        {open ?
        <div className="fixed top-0 right-0 w-full sm:w-2/4 h-screen">
           <Menu open={open} setOpen={setOpen}/>
        </div>
        : null}
      </div>

    </nav>
  );
};

export default Navbar;
