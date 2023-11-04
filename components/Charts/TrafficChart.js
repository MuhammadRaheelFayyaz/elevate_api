import React from 'react';
import Chart from 'chart.js/auto';
import "chartjs-adapter-moment";

import { Line } from 'react-chartjs-2';
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

const TrafficChart = ({ data, dateLabels }) => {
  const chartData = {
    labels: dateLabels,
    datasets: [
      {
        label: 'Users',
        data: data,
        borderColor: 'blue',
        borderWidth: 2,
        fill: false,
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
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Line data={chartData} options={options} width={400} height={200} />
    </div>
  );
};

export default TrafficChart;
