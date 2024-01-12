import React from "react";
import profileImage from "../../assets/profile-picture.jpeg"; // Update the path as necessary
import { BiSolidUpArrow, BiSolidDownArrow, BiChevronRight } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import SliderComponent from "../UI/Slider";
import Button from "../UI/Button";
type Props = {};

const StrategyComponent = (props: Props) => {
  return (
    <div className="px-4 py-4 bg-gray-50 text-gray-800 flex flex-col gap-8 w-full mx-auto sm:w-[30vh] h-fit rounded-3xl sm:rounded-lg sm:mt-12 mb-[80px] mt-16">
      <div className="px-4 profile flex flex-col justify-center gap-2 rounded-md">
        <h1 className="font-semibold font-sans mb-4">Retirement Strategy</h1>
        <div className="slider1 flex flex-col">
          <p className="text-sm">Employee Contribution</p>
          <SliderComponent min={0} max={100} step={1} />
        </div>
        <div className="slider2 flex flex-col pb-4 border-b border-gray-300">
          <p className="text-sm">Retirement Age</p>
          <SliderComponent min={25} max={70} step={1} />
        </div>
      </div>
      <div className="px-4 w-full mx-auto flex flex-col gap-2">
        <div className="slider1 flex justify-between">
          <p className="text-sm">Employee Contribution</p>
          <span className="text-sm">8.4%</span>
        </div>
        <div className="slider1 flex justify-between">
          <p className="text-sm">Interest Rate</p>
          <span className="text-sm">5%</span>
        </div>
        <div className="my-4 mx-auto">
        <Button
          content={
            <p className="flex gap-2 items-center w-36 justify-center">
              Upgrade{" "}
            </p>
          }
          showDropDown={false}
          wFull={true}
        />
        </div>
        <span className="text-xs text-indigo-600 font-medium text-center flex gap-1 items-center justify-center cursor-pointer">View Help & Docs <BiChevronRight size={20}/> </span>
      </div>
      <div className="px-4 profile flex flex-col justify-center gap-2 border-l border-indigo-600">
        <p className="text-sm">Are you considering a <span className="text-gray-800 font-semibold">Housing Advance</span></p>
        <p className="text-xs text-gray-400">Limited time reduced interest</p>
        <span className="text-xs text-indigo-600 font-medium text-center flex gap-1 items-center cursor-pointer">Learn More <BiChevronRight size={20}/> </span>
      </div>
    </div>
  );
};

export default StrategyComponent;
