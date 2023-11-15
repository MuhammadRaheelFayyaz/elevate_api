import Dropdown from "@/components/Dropdown/Dropdown";
import Typography from "@/components/Typegraphy/Typography";
import {useState} from "react";
import Table from "@/components/custom-table/table";
import UserChart from "@/components/Charts/UserChart";

const graphResultCardsData = [
  {
    id: 1,
    title: 'Endpoints',
    count: "0",
  },
  {
    id: 2,
    title: 'Consumers',
    count: "0",
  },
  {
    id: 3,
    title: 'Versions',
    count: "0",
  },
  {
    id: 3,
    title: 'Methods',
    count: "0",
  },
  {
    id: 3,
    title: 'Responses',
    count: "0",
  },
  {
    id: 3,
    title: 'Locations',
    count: "0",
  }
];

const UsersAnalytics = () => {
  const timeOptions = ["GMT +00:00", "GMT +01:00", "GMT +02:00", "GMT +03:00", "GMT +04:00"]
  const data = ["1hr", "3hr", "12hr", "24h", "7d", "30d", "90d"]
  const [selectedIndex, setSelectedIndex] = useState(4);
  const leftYData = [2, 0, 0, 0, 0]; // Example data for the left y-axis
  // const rightYData = [0, 0, 0, 0, 0];
  const dateLabels = ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05'];

  const handleItemClick = (index) => {
    setSelectedIndex(index);
  };



  return (
    <div className="px-8">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-3 my-5 ">

        <div className="flex justify-end gap-3 flex-col sm:flex-row w-full">
          <Dropdown options={timeOptions} className="min-w-[170px] max-w-[170px] !mb-0"
                    onSelect={(option) => console.log(option)} placeholder='GMT +00:00'/>
          <ul className="border rounded-[5px] flex items-center min-w-fit max-w-fit flex-wrap">
            {data.map((item, index) => (
              <li key={item}
              className={`h-[38px] px-3 border-r-[1px] rounded-[5px] flex flex-auto justify-center items-center text-sm cursor-pointer ${selectedIndex === index ? 'bg-blue-500 text-white' : ''}`}
                  onClick={() => handleItemClick(index)}>{item} </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full border rounded-[8px] h-fit flex justify-center items-center p-2 mb-6">
        <UserChart leftYData={leftYData} dateLabels={dateLabels}/>
      </div>
    </div>
  )
}

export default UsersAnalytics;