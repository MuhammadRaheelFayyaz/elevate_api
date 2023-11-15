import React, { useState } from 'react';
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
import Typography from '../Typegraphy/Typography';

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
const graphCardsData = [
  {
    id: 1,
    title: 'Total API calls',
    count: "0",
    countType: "",
    selected: false
  },
  {
    id: 2,
    title: 'Average Error Rate',
    count: "0",
    countType: "%",
    selected: false
  },
  {
    id: 3,
    title: 'Average Latency',
    count: "0",
    countType: "ms",
    selected: false
  }
];


  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

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
      <div className='flex justify-end items-center p-1 gap-1'>
        {graphCardsData.map((card, index)=>{
            const isSelected = selectedCard === index;
            return(
              <div key={card.id} onClick={() => handleCardClick(index)} className={`p-3 hover:bg-gray-100 w-fit rounded-md cursor-pointer border-2 hover:border-gray-500 ${isSelected ? 'bg-gray-200 border-gray-500 hover:bg-gray-200' : ''}`}>
                <Typography variant="small" className='text-gray-500' text={card.title} />
                <p className='text-[24px] font-bold'>{card.count}<span className='text-gray-400 ml-1'>{card.countType}</span></p>
              </div>
            )
        })}
      </div>
      <Line data={chartData} options={options} width={400} height={200}/>
    </div>
  );
};

export default TrafficChart;
