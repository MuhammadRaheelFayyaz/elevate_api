import React, { useState } from 'react';
import "chartjs-adapter-moment";
import {Line} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const graphCardsData = [
  {
    id: 1,
    title: 'Total Paid',
    count: "$0.00",
    selected: false
  },
];

const ErrorsChart = ({leftYData, dateLabels}) => {



  const chartData = {
    labels: dateLabels,
    datasets: [
      {
        label: "Error Incidents",
        data: leftYData,
        borderColor: 'blue',
        borderWidth: 2,
        fill: false,
        yAxisID: 'left-y-axis', // Assign this dataset to the left y-axis
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
          displayFormats: {
            day: 'YYYY-MM-DD',
          },
        },
      },
      'left-y-axis': {
        position: 'left',
        beginAtZero: true,
        max: 10,
        ticks: {
          beginAtZero: true,
          stepSize: 1,
          callback: (value) => `${value}`, // Add "ms" to the left y-axis values
        },
      },

    },
  };

  return (
    <div className="w-full h-full max-w-[1000px] mx-auto">
      <Line data={chartData} options={options} width={400} height={200}/>
    </div>
  );
};

export default ErrorsChart;
