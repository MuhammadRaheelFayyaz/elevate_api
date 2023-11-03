import React, {useState} from "react";
import PageLayout from "@/components/HubLayout/HubLayout";
import Typography from "@/components/Typegraphy/Typography";
import DashboardCard from "@/components/DashboardCard/DashboardCard";
import Input from "@/components/Input/Input";
import Dropdown from "@/components/Dropdown/Dropdown";
import CountCard from "@/components/CountCard/CountCard";
import Table from "@/components/custom-table/table";

export default function Dashboard() {
  const [selectedCard, setSelectedCard] = useState(0);

  const statisticsOptions = ["Total API calls (Default)", "Average API calls", "Calls per second", "Max API calls", "Min API calls"]
  const timeRangeOptions = ["Last hour", "Last 3 hour", "Last 6 hour", "Last 9 hour", "Last 24 hour", "Last 7 days", "Last 30 days", "Last 365 days"]
  const periodOptions = ["Hours", "Days"]
  const timezoneOptions = ["GMT+14:00 Line Islands Time (Pacific/Kiritimati)", "GMT+14:00 Line Islands Time (Pacific/Kiritimati)", "GMT+14:00 Line Islands Time (Pacific/Kiritimati)", "GMT+14:00 Line Islands Time (Pacific/Kiritimati)"]

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };
  const columns = [
    {key: 'endpoints', label: 'Endpoints'},
    {key: 'method', label: 'Method'},
    {key: 'action', label: 'Action'},
  ];
  const data = [
    {
      endpoints: 'First call',
      method: 'REST API',
      action: 'Edit',
    },
    {
      endpoints: 'Second call',
      method: 'REST API',
      action: 'Edit',
    },
    {
      endpoints: 'Third Call',
      method: 'REST API',
      action: 'Edit',
    },

  ];
  return (
    <PageLayout>
      <div className="max-sm:px-0 p-6 pb-8">
        <Typography variant="h1" text="Dashboard" />
      </div>
      <div className="flex gap-2.5 flex-wrap">
        <DashboardCard heading={"Recent Payments"} description={"You haven't made any payment"} />
        <DashboardCard heading={"Top API By Quota Usage"} description={"You haven't subscribed to any paid/freemium plans yet"} />
      </div>
      <div className="flex items-center gap-2.5 px-3 mt-6 md:mb-[60px]">
        <Input placeholder={"API name"} />
        <div className="w-[42px] h-[42px] border rounded flex justify-center items-center mb-2">
          <img src={"/icons/refresh.svg"} alt={'refresh -icon'} />
        </div>
      </div>
      <div className="flex justify-between md:justify-end gap-2 mb-3 flex-wrap">
        <Dropdown label="Statistics" options={statisticsOptions} className="w-full md:w-[49%] 2xl:w-[270px]" onSelect={(option)=>console.log(option)} placeholder='Total API calls (Default)'/>
        <Dropdown label="Time Range" options={timeRangeOptions} className="w-full md:w-[49%] 2xl:w-[160px]" onSelect={(option)=>console.log(option)} placeholder='Last 7 Days'/>
        <Dropdown label="Period" options={periodOptions} className="w-full md:w-[49%] 2xl:w-[160px]" onSelect={(option)=>console.log(option)} placeholder='Days'/>
        <Dropdown label="Time Zone" options={timezoneOptions} className="w-ful md:w-[49%] 2xl:w-[500px]" onSelect={(option)=>console.log(option)} placeholder='GMT+14:00 Line Islands Time (Pacific/Kiritimati)'/>
      </div>
      <div className='flex mb-6 border-b-[1px] flex-wrap'>
        <CountCard heading="API Calls" subHeading="Total API Calls (Default)"  count="0" onClick={() => handleCardClick(0)} selected={selectedCard === 0}/>
        <CountCard heading="Errors" subHeading="Average Error Rate (Default)"  count="0%" onClick={() => handleCardClick(1)} selected={selectedCard === 1}/>
        <CountCard heading="Latency" subHeading="Average Latency (Default)"  count="0 ms" onClick={() => handleCardClick(2)} selected={selectedCard === 2}/>
      </div>
      <div className='px-6'>
        <Table columns={columns} data={data} />
        <div className='flex justify-between w-full items-center border-t-[1px] py-1'>
          <Typography variant='small' text='0' />
          <Typography variant='small' text='auto' />
        </div>
      </div>
    </PageLayout>
  )
}
