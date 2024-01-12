import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DonutProps {
  changed?: boolean;
}

const DonutChart = ({ changed }: DonutProps) => {
  const [avgData, setAvgData] = useState([72, 28]);
  const [topData, setTopData] = useState([95, 5]);
  const [meData, setMeData] = useState([59, 41]);

    useEffect(()=>{
        const generateRandomData = () => {
            const firstValue = Math.random() * 100;
            const secondValue = 100 - firstValue;
            return [Math.round(firstValue), Math.round(secondValue)];
          };
      
          // Set the random data for each state variable
          setAvgData(generateRandomData());
          setTopData(generateRandomData());
          setMeData(generateRandomData());
    }, [changed])

  // CSS styles to control the layout and size of the donut charts
  const chartStyle = {
    width: "100px", // Adjust the size of the donut chart as needed
    height: "100px",
    
  };
  const data1 = {
    labels: ["Them", "Me"],
    datasets: [
      {
        label: "Average",
        data: avgData,
        backgroundColor: ["rgb(70, 207, 107)", "rgb(162, 250, 186)"],
        borderColor: ["rgba(4, 201, 57)", "rgba(20, 255, 84)"],
        borderWidth: 1,
      },
    ],
  };
  const data2 = {
    labels: ["Them", "Me"],
    datasets: [
      {
        label: "Top",
        data: topData,
        backgroundColor: ["rgb(70, 207, 107)", "rgb(162, 250, 186)"],
        borderColor: ["rgba(4, 201, 57)", "rgba(20, 255, 84)"],
        borderWidth: 1,
      },
    ],
  };
  const data3 = {
    labels: ["Them", "Me"],
    datasets: [
      {
        label: "Me",
        data: meData,
        backgroundColor: ["rgb(70, 207, 107)", "rgb(162, 250, 186)"],
        borderColor: ["rgba(4, 201, 57)", "rgba(20, 255, 84)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex justify-center items-center gap-2 sm:gap-4 sm:mr-8">
      <div style={chartStyle} className="relative">
        <Doughnut
          data={data1}
          options={{
            cutout: "70%",
            plugins: {
              legend: {
                display: false, // Hide the legend and labels
              },
              tooltip: {
                enabled: false,
              }
            }, // Adjust the cutout value to control the size of the donut
          }}
        />

        <p className="text-center font-semibold text-xs text-gray-500 mt-4">
          Average
        </p>
        <span className="absolute text-2xl font-semibold top-9 left-7 text-gray-600">
          {avgData[0]}%
        </span>
      </div>
      <div style={chartStyle} className="relative">
        <Doughnut
          data={data2}

          options={{
            
            cutout: "70%",
            plugins: {
              legend: {
                display: false, // Hide the legend and labels
              },
              tooltip: {
                enabled: false,
              }
            }, // Adjust the cutout value to control the size of the donut
          }}
        />
        <p className="text-center font-semibold text-xs text-gray-500 mt-4">
          Top
        </p>
        <span className="absolute text-2xl font-semibold top-9 left-7 text-gray-600">
          {topData[0]}%
        </span>
      </div>
      <div style={chartStyle} className="relative">
        <Doughnut
          data={data3}
          options={{
            cutout: "70%",
            plugins: {
              legend: {
                display: false, // Hide the legend and labels
              },
              tooltip: {
                enabled: false,
              }
            }, // Adjust the cutout value to control the size of the donut
          }}
        />
        <p className="text-center font-semibold text-xs text-gray-500 mt-4">
          Me
        </p>
        <span className="z-10 absolute text-2xl font-semibold top-9 left-7 text-gray-600">
          {meData[0]}%
        </span>{" "}
      </div>
    </div>
  );
};

export default DonutChart;

// const data1 = {
//     labels: ['Them', 'Me'],
//     datasets: [
//       {
//         label: '# of Votes',
//         data: [72,],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };
//   const data2 = {
//     labels: ['Them', 'Me'],
//     datasets: [
//       {
//         label: '# of Votes',
//         data: [95, 5],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };
//   const data3 = {
//     labels: ['Them', 'Me'],
//     datasets: [
//       {
//         label: '# of Votes',
//         data: [59, 41],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };
