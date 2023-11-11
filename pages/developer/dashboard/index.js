import React, {useState} from "react";
import PageLayout from "@/components/HubLayout/HubLayout";
import Typography from "@/components/Typegraphy/Typography";
import DashboardCard from "@/components/DashboardCard/DashboardCard";
import Input from "@/components/Input/Input";
import Dropdown from "@/components/Dropdown/Dropdown";
import CountCard from "@/components/CountCard/CountCard";
import Table from "@/components/custom-table/table";
import AppsLayout from "@/components/AppsLayout/AppsLayout";
import ErrorsChart from "@/components/Charts/ErrorsChart";
import SearchInput from "@/components/Search/Search";

export default function Dashboard() {
  const [selectedCard, setSelectedCard] = useState(0);

  const statisticsOptions = ["Total Default API Calls", "Average API calls", "Calls per second", "Max API calls", "Min API calls"]
  const timeRangeOptions = ["Last hour", "Last 3 hour", "Last 6 hour", "Last 9 hour", "Last 24 hour", "Last 7 days", "Last 30 days", "Last 365 days"]
  const periodOptions = ["Hours", "Days"]
  const timezoneOptions = ["GMT+14:00 Line Islands Time (Pacific/Kiritimati)", "GMT+14:00 Line Islands Time (Pacific/Kiritimati)", "GMT+14:00 Line Islands Time (Pacific/Kiritimati)", "GMT+14:00 Line Islands Time (Pacific/Kiritimati)"]

  const leftYData = [0, 2, 0, 0, 0]; // Example data for the left y-axis
  const dateLabels = ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05'];
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
    <AppsLayout>
      <div className="p-6 pb-8">
        <Typography variant="h1" text="Dashboard" />
      </div>
      <div className="flex gap-2.5 flex-wrap">
        <DashboardCard heading="Latest Transactions" description="No Payments Made Yet" />
        <DashboardCard heading="Top API Usage by Quota" description="You haven't enrolled in any paid or freemium plans yet." />
      </div>
      <div className="mt-6 ml-auto md:max-w-[300px] mb-6">
        <SearchInput />
        {/*<Input placeholder={"API name"} />*/}
        {/*<div className="w-[42px] h-[42px] border rounded flex justify-center items-center mb-4">*/}
        {/*  <img src={"/icons/refresh.svg"} alt={'refresh -icon'} />*/}
        {/*</div>*/}
      </div>
      <div className="flex justify-between md:justify-end gap-2 mb-3 flex-wrap">
        <Dropdown label="Metrics Overview" options={statisticsOptions} className="w-full md:w-[49%] 2xl:w-[270px]" onSelect={(option)=>console.log(option)} placeholder='Total Default API Calls'/>
        <Dropdown label="Temporal Scope" options={timeRangeOptions} className="w-full md:w-[49%] 2xl:w-[160px]" onSelect={(option)=>console.log(option)} placeholder='Last 7 Days'/>
        <Dropdown label="Time Frame" options={periodOptions} className="w-full md:w-[49%] 2xl:w-[160px]" onSelect={(option)=>console.log(option)} placeholder='Days'/>
        <Dropdown label="Temporal Zone" options={timezoneOptions} className="w-ful md:w-[49%] 2xl:w-[500px]" onSelect={(option)=>console.log(option)} placeholder='GMT+14:00 Line Islands Time (Pacific/Kiritimati)'/>
      </div>

      <div className='flex mb-6 border-b-[1px] flex-wrap'>
        <CountCard heading="API Requests" subHeading="Total Default API Calls" count="0" onClick={() => handleCardClick(0)} selected={selectedCard === 0}/>
        <CountCard heading="Error Incidents" subHeading="Average Error Rate (Default)" count="0%" onClick={() => handleCardClick(1)} selected={selectedCard === 1}/>
        <CountCard heading="Response Time" subHeading="Average Latency (Default)" count="0 ms" onClick={() => handleCardClick(2)} selected={selectedCard === 2}/>
      </div>
      <ErrorsChart leftYData={leftYData} dateLabels={dateLabels}/>
      <div className='px-6'>
        <Table columns={columns} data={data} havePagination={true} />
        {/*<div className='flex justify-between w-full items-center border-t-[1px] py-1'>*/}
        {/*  <Typography variant='small' text='0' />*/}
        {/*  <Typography variant='small' text='auto' />*/}
        {/*</div>*/}
      </div>
    </AppsLayout>
  )
}
