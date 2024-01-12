import React, {useEffect, useState} from "react";
import Charts from "../UI/Charts";
import { AiOutlineDown } from "react-icons/ai";
import DonutChart from "../UI/DonutCharts";

type Props = {};

let ages = ["Under 30", "Under 40", "Under 50"];
let salaries = ["30k", "40k", "50k"];
let genders = ["Male", "Female", "Other"];

const RetirementIncomeComponent = (props: Props) => {
  const [isShowAges, setIsShowAges] = React.useState(false);
  const [isShowSalary, setIsShowSalary] = React.useState(false);
  const [isShowGender, setIsShowGender] = React.useState(false);
  
  const [age, setAge] = React.useState("Under 30");
  const [salary, setSalary] = React.useState("30k");
  const [gender, setGender] = React.useState("Male");

  const [changed, setChanged] = useState(false);

  useEffect(() => {
    setChanged(!changed);
  }, [age, salary, gender]);

  return (
    <div className="h-fit px-6 sm:px-8 md:px-12 sm:py-12 bg-white text-gray-800 flex flex-col gap-8 sm:w-[45%] ">
      <div className="year-details justify-start">
        <p className="text-indigo-600 text-sm font-semibold font-sans">
          Retirement Income
        </p>
        <p className="text-xl font-semibold font-sans mb-8">
          Starting Year 2056
        </p>
        <div className="flex gap-4 sm:gap-20 flex-wrap">
          <div className="w-full sm:w-fit flex flex-col border-b border-indigo-600 pb-3">
            <p className="text-2xl font-semibold font-sans">$300,000</p>
            <p className="text-xs text-gray-400 font-medium">My Goal</p>
          </div>
          <div className="sm:w-fit flex flex-col border-b border-indigo-600 pb-3">
            <p className="text-2xl font-semibold font-sans">59%</p>
            <p className="text-xs text-gray-400 font-medium">Goal Acheived</p>
          </div>
          <div className=" sm:w-fit flex flex-col border-b border-indigo-600 pb-3">
            <p className="text-2xl font-semibold font-sans">$300</p>
            <p className="text-xs text-gray-400 font-medium">
              Est. Monthly Income
            </p>
          </div>
        </div>
      </div>
      <Charts />
      <div className="compare mt-2">
        <p className="text-lg font-semibold font-sans">
          How do I compare to my peers?
        </p>
        <p className="text-xs text-gray-500 font-light">
          These numbers represents current goal achievements
        </p>
        <div className="inputs-donut flex items-center justify-between mt-8 gap-4 sm:gap-2 flex-col sm:flex-row w-full">
          <div className="inputs flex flex-row sm:flex-col gap-2 w-full sm:w-fit justify-center">
            <div
              className="input1 flex gap-2 cursor-pointer relative"
              onClick={() => {
                setIsShowAges(!isShowAges);
              }}
            >
              <p className="text-xs font-medium pb-2 border-b border-gray-300 flex gap-2 truncate">
                <span className="font-semibold">Age: </span>
                <span className="text-gray-600">
                  {age} <AiOutlineDown size={10} className="inline-block" />
                </span>
              </p>
              {isShowAges && (
                <div className="z-50 absolute left-10 mt-6 bg-white border border-gray-300 rounded-lg shadow-lg w-[100px] cursor-pointer">
                  <div className="flex flex-col gap-4 p-2 items-start">
                    {ages.map((item: any, index: any) => {
                      return (
                        <div
                          className="border-b border-gray-300 pb-2 hover:bg-gray-100 w-full hover:rounded-md p-1"
                          key={index}
                          onClick={() => {
                            setAge(item);
                            setIsShowAges(false);
                          }}
                        >
                          <p className="text-gray-500 text-xs peer-hover:text-indigo-600">
                            {item}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            <div
              className="input2 flex gap-2 cursor-pointer relative"
              onClick={() => {
                setIsShowSalary(!isShowSalary);
              }}
            >
              <p className="text-xs font-medium pb-2 border-b border-gray-300 flex gap-2 truncate">
                <span className="font-semibold">Salary: </span>
                <span className="text-gray-600">
                  {" "}
                  {salary} <AiOutlineDown size={10} className="inline-block" />
                </span>
              </p>
              {isShowSalary && (
                <div className="z-50 absolute left-10 mt-6 bg-white border border-gray-300 rounded-lg shadow-lg w-[100px] cursor-pointer">
                  <div className="flex flex-col gap-4 p-2 items-start">
                    {salaries.map((item: any, index: any) => {
                      return (
                        <div
                          className="border-b border-gray-300 pb-2 hover:bg-gray-100 w-full hover:rounded-md p-1"
                          key={index}
                          onClick={() => {
                            setSalary(item);
                            setIsShowSalary(false);
                          }}
                        >
                          <p className="text-gray-500 text-xs peer-hover:text-indigo-600">
                            {item}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            <div
              className="input3 flex gap-2 cursor-pointer relative"
              onClick={() => {
                setIsShowGender(!isShowGender);
              }}
            >
              <p className="text-xs font-medium  flex gap-2 border-b border-gray-300 truncate">
                <span className="font-semibold">Gender: </span>
                <span className="text-gray-600">
                  {" "}
                  {gender} <AiOutlineDown size={10} className="inline-block" />
                </span>
              </p>
              {isShowGender && (
                <div className="z-50 absolute left-10 mt-6 bg-white border border-gray-300 rounded-lg shadow-lg w-[100px] cursor-pointer">
                  <div className="flex flex-col gap-4 p-2 items-start">
                    {genders.map((item: any, index: any) => {
                      return (
                        <div
                          className="border-b border-gray-300 pb-2 hover:bg-gray-100 w-full hover:rounded-md p-1"
                          key={index}
                          onClick={() => {
                            setGender(item);
                            setIsShowGender(false);
                          }}
                        >
                          <p className="text-gray-500 text-xs peer-hover:text-indigo-600">
                            {item}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="donuts">
            <DonutChart changed={changed} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetirementIncomeComponent;
