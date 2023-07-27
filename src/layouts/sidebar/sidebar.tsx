import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import the icons
import emeraldLogo from "@/assets/images/emeraldlogo-mini.png";
import Image from "next/image";
import Link from "next/link";

const Sidebar = ({ className }: { className?: string }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={`fixed top-0 left-0 bg-dark text-white transition-transform duration-300 ease-in-out ${
        collapsed ? "-translate-x-full w-30" : "translate-x-0 w-64"
      } h-screen ${className}`}
      style={{ zIndex: 50 }} // Set the z-index to 50
    >
      {/* Hamburger icon */}
      {/* Sidebar content */}
      <div className="flex flex-col h-full">
        
        <div className="flex items-center justify-between px-4 py-2 bg-dark">
          <h1 className="text-lg text-gold">Menu</h1>
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none focus:ring"
          >
            {collapsed ? (
              <Image src={emeraldLogo} alt="" className="h-10 w-10 mt-2 ml-3 w-1/8 h-1/8" />
            ) : (
              <Image src={emeraldLogo} alt="" className="h-10 w-10 mt-2 ml-3 w-1/8 h-1/8" />
            )}
          </button>
        </div>
        <div className={`py-4 px-2 ${collapsed ? "pl-8" : ""}`}>
          <Link href="/marketplace" className="block text-white my-2 hover:bg-gold hover:text-black rounded-full py-2 px-4">
            Marketplace
          </Link>
          <Link href="/portfolio" className="block text-white my-2 hover:bg-gold hover:text-black rounded-full py-2 px-4">
            Portfolio
          </Link>
          <Link href="/link3" className="block text-white my-2 hover:bg-gold hover:text-black rounded-full py-2 px-4">
            Company
          </Link>
        </div>
      </div>
      {/* Handlebar */}
      <div
        className={`absolute top-0 right-0 h-12 bg-dark cursor-pointer w-20 ${
          collapsed ? "translate-x-full" : "-translate-x-2"
        }`}
        onClick={toggleSidebar}
      >
        {collapsed ? (
          <Image src={emeraldLogo} alt="" className="h-10 w-10 mt-7 ml-3 w-1/8 h-1/8" />
        ) : (
          <Image src={emeraldLogo} alt="" className="h-8 w-8 ml-7 mt-3 w-1/8 h-1/8" />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
