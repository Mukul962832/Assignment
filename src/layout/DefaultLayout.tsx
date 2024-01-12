import React, { useState, useEffect } from "react";
import AppContent from "../components/AppContent";
import Sidebar from "../components/Sidebar";
import { Navigate, useNavigate } from "react-router-dom";
const DefaultLayout = () => {
  //   const [isOpen, setIsOpen] = useState(false);
  let navigate = useNavigate();
  return (
    <div className="flex flex-row w-full">
      <div>
        <Sidebar />
      </div>
      <AppContent />{" "}
      {/* <div className="relative w-[calc(100%_-_65px)] sm:w-[calc(100%_-_90px)]">
        <NavBar />
        <div
          style={{
            height: "calc(100vh - 70px)",
          }}
          className="mt-[70px] w-full p-4 overflow-y-auto"
        >
        <div className="w-full h-full">
          
        </div>
        </div>
      </div> */}
    </div>
  );
};

export default DefaultLayout;
