import React from "react";
import { TiTick } from "react-icons/ti";
import { Chart as ChartJS, registerables } from "chart.js";
import { Line, Bar, Doughnut, Pie, PolarArea, Scatter } from "react-chartjs-2";
ChartJS.register(...registerables);

const StackedBarChart: React.FC = () => {
  const isSmallScreen = window.innerWidth <= 768;
  const data = {
    labels: [20, "", 30, "", 40, "", 50, "", 60, ""],
    datasets: [
      {
        label: "Employer",
        data: isSmallScreen ? [70, 100, 23, 60] :[5, 10, 20, 12, 30, 40, 20, 20, 25, 20],
        backgroundColor: [
          "#043087",
          "#043087",
          "#043087",
          "#043087",
          "#043087",
          "#043087",
          "#043087",
          "#043087",
          "#043087",
        ],
        barPercentage: 0.5, // Set the width of each bar (0.2 means 20% width of the available space)
      },
      {
        label: "Employee",
        data: isSmallScreen ? [40, 80, 63, 100] :[15, 10, 5, 30, 15, 20, 10, 35, 14, 55],
        backgroundColor: [
          "#195de6",
          "#195de6",
          "#195de6",
          "#195de6",
          "#195de6",
          "#195de6",
          "#195de6",
          "#195de6",
          "#195de6",
        ],
        barPercentage: 0.5,
      },
      {
        label: "Interest",
        data: isSmallScreen ? [41, 60, 53, 90] :[5, 10, 15, 10, 20, 25, 20, 15, 50, 40],
        backgroundColor: [
          "#6698fa",
          "#6698fa",
          "#6698fa",
          "#6698fa",
          "#6698fa",
          "#6698fa",
          "#6698fa",
          "#6698fa",
          "#6698fa",
        ],
        barPercentage: 0.5,
      },
    ],
  };

  // Set the breakpoint for smaller screens
  const visibleLabels = isSmallScreen
    ? [20, 30, 40, 50]
    : [20, "", 30, "", 40, "", 50, "", 60, ""];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        grid: {
          drawOnChartArea: false, // Remove grid lines for the data points
          //make the line dashed
        },
      },
      y: {
        stacked: true,
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 4, // Reduce the maximum number of ticks
          // Include a dollar sign in the ticks
          callback: function (value: any, index: any, values: any) {
            if (value >= 1000) {
              return "$" + value / 1000 + "k";
            } else {
              return "$" + value;
            }
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        labels: {
          usePointStyle: true, // Use a circle as a legend symbol
        },
      },
    },
  };

  return (
    <div className="w-full max-w-screen-lg">
      <p className="text-lg font-semibold font-sans mb-4">
        Contribution Overtime
      </p>
      <div className="legends mb-2 flex flex-wrap gap-2 items-between justify-between ">
        <div className="legend-item flex flex-col sm:flex-row sm:items-center gap-2 ">
          <div className="w-3 h-2 bg-[#043087] rounded-full"></div>
          <p className="text-xs text-gray-500 font-semibold">Employer</p>
          <p className="tracking-wide text-xs font-bold">K 73,500</p>
        </div>
        <div className="legend-item flex flex-col sm:flex-row sm:items-center gap-2 ">
          <div className="w-3 h-2 bg-[#195de6] rounded-full"></div>
          <p className="text-xs text-gray-500 font-semibold">Employee</p>
          <p className="tracking-wide text-xs font-bold">K 23,480</p>
        </div>
        <div className="legend-item flex flex-col sm:flex-row sm:items-center gap-2 ">
          <div className="w-3 h-2 bg-[#6698fa] rounded-full"></div>
          <p className="text-xs text-gray-500 font-semibold">Interest</p>
          <p className="tracking-wide text-xs font-bold">$ 4,000</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg">
        <div className="px-6 py-4 h-70 sm:h-[20rem] relative">
          {/* @ts-ignore */}
          <Bar data={{ ...data, labels: visibleLabels }} options={options} />
          <div className="absolute w-4 h-4 bg-green-500 rounded-full border-2 border-white text-center flex items-center right-9 top-1/3">
            <TiTick className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackedBarChart;
