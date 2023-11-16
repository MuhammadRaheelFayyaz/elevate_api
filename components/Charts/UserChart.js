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

const UsersCahrt = ({leftYData, dateLabels}) => {
const graphCardsData = [
  {
    id: 1,
    title: 'Active Users',
    count: "0",
    selected: false
  },
  {
    id: 2,
    title: 'Total Users',
    count: "2",
    selected: false
  },
];


  const [selectedCard, setSelectedCard] = useState(1);
  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  const chartData = {
    labels: dateLabels,
    datasets: [
      {
        label: "Users",
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
        ticks: {
          min: 0,
          callback: (value) => `${value} ms`, // Add "ms" to the left y-axis values
        },
      },
     
    },
  };

  

  return (
    <div className="w-full h-full">
      <div className='flex items-center p-1 gap-1 w-full '>
        {graphCardsData.map((card, index)=>{
            const isSelected = selectedCard === index;
            return(
              <div key={card.id} onClick={() => handleCardClick(index)} className={`p-3 hover:bg-gray-100 w-1/2 rounded-md cursor-pointer ${isSelected ? 'bg-gray-200' : ''}`}>
                <Typography variant="small" className='text-gray-500' text={card.title} />
                <p className='text-[24px] font-bold'>{card.count}<span className='text-gray-400 ml-1'>{card.countType}</span></p>
              </div>
            )
        })}
      </div>
      <div className='max-w-[1000px]'>
        <Line data={chartData} options={options} width={400} height={200}/>
      </div>
    </div>
  );
};

export default UsersCahrt;
