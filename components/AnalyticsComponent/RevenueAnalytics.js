import Dropdown from "@/components/Dropdown/Dropdown";
import {useState} from "react";
import RevenueChart from "@/components/Charts/RevenueChart";


const RevenueAnalytics = () => {
  const timeOptions = ["GMT +00:00", "GMT +01:00", "GMT +02:00", "GMT +03:00", "GMT +04:00"]
  const data = ["3 Months", "6 Months", "12 Months"]
  const [selectedIndex, setSelectedIndex] = useState(0);
  const leftYData = [0, 0, 0, 0, 0]; // Example data for the left y-axis
  const dateLabels = ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05'];

  const handleItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="md:px-8">
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
        <RevenueChart leftYData={leftYData} dateLabels={dateLabels}/>
      </div>
    </div>
  )
}

export default RevenueAnalytics;