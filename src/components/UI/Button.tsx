import React, { useState } from "react";

interface ButtonProps {
  content: any;
  showDropDown: boolean;
  wFull?: boolean;
}
let dropdownItems = [
  {
    name: "Invest Long-term",
    description: "Low risk, low reward",
  },
  {
    name: "Mutual Funds",
    description: "Moderate risk, high reward",
  },
  {
    name: "Short-term Trading",
    description: "High risk, high reward",
  },
];
const Button = ({ content, showDropDown, wFull }: ButtonProps) => {
  console.log(wFull);
  const [isShowDropDown, setIsShowDropDown] = useState(false);
  return (
    <div className={`relative ${wFull ? "min-w-full sm:w-auto" : ""}`}>
      <button
        className={`bg-indigo-600 text-white rounded-lg px-4 py-3 text-sm font-medium tracking-wider flex items-center justify-center gap-2 ${
          wFull ? "w-full sm:w-auto" : ""
        }`}
        onClick={() => {
          if (!showDropDown) return;
          setIsShowDropDown(!isShowDropDown);
        }}
      >
        {content}
        {/* {showDropDown && <span className="text-white"><BiSolidUpArrow size={15} /></span>} */}
      </button>
      {isShowDropDown && (
        <div
          // initial={{ x: 20, y: -10, scale: 0.8 }}
          // animate={{ x: 0, y: 0, scale: 1 }}
          // transition={{
          //   duration: 0.4,
          //   ease: [0, 0.71, 0.2, 1.01],
          // }}
          className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg py-2 w-[200px] cursor-pointer"
        >
          <div className="flex flex-col gap-4 p-2 items-start">
            {dropdownItems.map((item: any, index: any) => {
              return (
                <div
                  className="border-b border-gray-300 pb-2 hover:bg-gray-100 w-full hover:rounded-md p-1"
                  key={index}
                >
                  <p className="font-semibold text-sm peer">{item.name}</p>
                  <p className="text-gray-500 text-xs peer-hover:text-indigo-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Button;
