import React from "react";
import { FcCloseUpMode } from "react-icons/fc";
import { MdOutlineSearch } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { FaRegNewspaper, FaRegUser } from "react-icons/fa";
import { BsCardText, BsBell } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { FiUser, FiLogOut } from "react-icons/fi";

type Props = {};

const navItemsTop = [
  {
    name: "Search",
    icon: <MdOutlineSearch className="w-6 h-6" />,
    link: "/search",
  },
  {
    name: "Home",
    icon: <GoHome className="w-6 h-6" />,
    link: "/home",
  },
  {
    name: "News",
    icon: <FaRegNewspaper className="w-6 h-6" />,
    link: "/news",
  },
  {
    name: "Blogs",
    icon: <BsCardText className="w-6 h-6" />,
    link: "/blogs",
  },
  {
    name: "Account",
    icon: <FiUser className="w-6 h-6" />,
    link: "/account",
  },
];

const Sidebar = (props: Props) => {
  let navigate = useNavigate();
  let location = useLocation();
  return (
    <div
      className={`px-4 sm:h-screen sm:flex sm:w-[60px] sm:relative transition-all duration-300 z-50 flex-col items-center sm:py-4 py-2 gap-6 fixed bottom-0 w-full bg-white`}
    >
      <div className="logo cursor-pointer hidden sm:block">
        <FcCloseUpMode size={30} className="" />
      </div>
      <div className="navIcons flex justify-around sm:justify-start sm:flex-col gap-4">
        {navItemsTop.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className={`${
                item.name === "Search" ? "sm:mb-6 hidden sm:block" : ""
              } rounded-lg items-center justify-center transition-all ease-in-out duration-300 p-2 ${
                `/${location.pathname?.split("/")[1]}` === item.link
                  ? "text-white bg-indigo-600 shadow-lg shadow-slate-400 "
                  : "text-gray-500 hover:text-indigo-600"
              } `}
              onClick={() => {
                let link = item.link;
                item.link.includes("http")
                  ? window.open(item.link, "_blank")
                  : navigate(link);
              }}
            >
              <div className={`cursor-pointer `}>{item.icon}</div>
            </div>
          );
        })}

        {/* //? I could have done row reversed to acheive the same */}

        <div
          className={`block sm:hidden rounded-lg items-center justify-center transition-all ease-in-out duration-300 p-2 ${
            `/${location.pathname?.split("/")[1]}` === "/search"
              ? "text-white bg-indigo-600"
              : "text-gray-500 hover:text-indigo-600"
          }`}
          onClick={() => {
            navigate("/search");
          }}
        >
          <div className={`cursor-pointer `}>
            <MdOutlineSearch className="w-6 h-6" />
          </div>
        </div>
      </div>
      <div className="hidden sm:flex navIcons justify-around sm:justify-start sm:flex-col gap-8 mt-auto mb-8 text-gray-500 cursor-pointer">
        <div className="relative">
          <span className="absolute rounded-full h-3 w-3 bg-blue-500 border-2 border-white -top-2 -right-1"></span>
          <BsBell className="w-6 h-6" />
        </div>
        <FiLogOut className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Sidebar;
