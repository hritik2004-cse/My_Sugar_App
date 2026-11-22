"use client";

import Logo from "./Logo";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import AddModel from "./AddModel";

const Navbar = () => {
  const [showModel, setShowModel] = useState<boolean>(false);
  return (
    <>
      <nav className="w-full flex items-center justify-between py-5 px-3 shadow-lg border-b border-white/5">
        <Logo />
        <button
          className="bg-accent-primary hover:brightness-125 transition px-5 py-2 rounded-md flex items-center capitalize text-sm font-semibold justify-center gap-1 text-foreground"
          onClick={() => setShowModel(true)}
        >
          <IoMdAdd className="text-base" /> add
        </button>
      </nav>
      {showModel && <AddModel onClose={() => setShowModel(false)} />}
    </>
  );
};

export default Navbar;
