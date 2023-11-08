import React from 'react';
import Chart from 'chart.js/auto';
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

const TrafficChart = ({leftYData, rightYData, dateLabels}) => {
  const chartData = {
    labels: dateLabels,
    datasets: [
      {
        label: "API Calls",
        data: leftYData,
        borderColor: 'blue',
        borderWidth: 2,
        fill: false,
        yAxisID: 'left-y-axis', // Assign this dataset to the left y-axis
      },
      {
        label: 'Errors',
        data: rightYData,
        borderColor: 'red',
        borderWidth: 2,
        fill: false,
        yAxisID: 'right-y-axis', // Assign this dataset to the right y-axis
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
        ticks: {
          min: 0,
          callback: (value) => `${value} ms`, // Add "ms" to the left y-axis values
        },
      },
      'right-y-axis': {
        beginAtZero: true,
        position: 'right',
        ticks: {
          min: 0,
          callback: (value) => `${value}`, // Add "ms" to the y-axis values
        },
      },
    },
  };

  return (
    <div className="w-full h-full">
      <Line data={chartData} options={options} width={400} height={200}/>
    </div>
  );
};

export default TrafficChart;
