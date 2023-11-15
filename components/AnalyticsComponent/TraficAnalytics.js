import Dropdown from "@/components/Dropdown/Dropdown";
import Typography from "@/components/Typegraphy/Typography";
import { useState } from "react";
import Table from "@/components/custom-table/table";
import TrafficChart from "@/components/Charts/TrafficChart";

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

const TrafficAnalytics = ()=>{
    const endpointsOptions = ["Disabled"]
    const timeOptions = ["GMT +00:00", "GMT +01:00", "GMT +02:00", "GMT +03:00", "GMT +04:00"]
    const data = ["1hr", "3hr", "12hr", "24h", "7d", "30d", "90d"]
    const dropdownData = ["No Results"]
    const [selectedIndex, setSelectedIndex] = useState(4);
    const leftYData = [0, 0,0, 0, 0]; // Example data for the left y-axis
    const rightYData = [0, 0, 0, 0, 0];
    const dateLabels = ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05'];

    const handleItemClick = (index) => {
        setSelectedIndex(index);
    };
    const columns = [
        {key: 'date/time', label: 'Date/Time'},
        {key: 'consumers', label: 'Consumers'},
        {key: 'endpoints', label: 'endpoints'},
        {key: 'apiVersion', label: 'API Version'},
        {key: 'method', label: 'Method'},
        {key: 'response', label: 'Response'},
        {key: 'location', label: 'Location'},
        {key: 'latency', label: 'Latency'},
    ];

    const rowsData = [
        {
          'date/time': '2023-11-01 10:30 AM',
          consumers: 'User1',
          endpoints: '/api/data',
          apiVersion: 'v1',
          method: 'GET',
          response: '200 OK',
          location: 'New York',
          latency: '50ms'
        },
        {
          'date/time': '2023-11-02 02:15 PM',
          consumers: 'User2',
          endpoints: '/api/users',
          apiVersion: 'v2',
          method: 'POST',
          response: '201 Created',
          location: 'London',
          latency: '75ms'
        },
        {
          'date/time': '2023-11-03 08:45 AM',
          consumers: 'User3',
          endpoints: '/api/orders',
          apiVersion: 'v1',
          method: 'GET',
          response: '200 OK',
          location: 'Berlin',
          latency: '40ms'
        },
        {
          'date/time': '2023-11-04 04:20 PM',
          consumers: 'User4',
          endpoints: '/api/products',
          apiVersion: 'v2',
          method: 'PUT',
          response: '204 No Content',
          location: 'Tokyo',
          latency: '60ms'
        },
        {
          'date/time': '2023-11-05 11:55 AM',
          consumers: 'User5',
          endpoints: '/api/settings',
          apiVersion: 'v1',
          method: 'PATCH',
          response: '200 OK',
          location: 'Sydney',
          latency: '55ms'
        }
      ];
    const pageData=[...rowsData, ...rowsData,...rowsData,...rowsData, ...rowsData ]
    return (
        <div className="px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-3 my-5 flex-wrap">
                <Dropdown options={endpointsOptions} className="w-full min-w-[250px] max-w-[800px] !mb-0" onSelect={(option)=>console.log(option)} placeholder='All Endpoints (Default)'/>
                <div className="flex justify-end gap-3 flex-col sm:flex-row w-fit">
                    <Dropdown options={timeOptions} className="min-w-[170px] max-w-[170px] !mb-0" onSelect={(option)=>console.log(option)} placeholder='GMT +00:00'/>
                    <ul className="border rounded-[5px] flex items-center min-w-fit max-w-fit flex-wrap">
                        {data.map((item, index) => (
                            <li key={item} className={`h-[38px] px-3 border-r-[1px] rounded-[5px] flex flex-auto justify-center items-center text-sm cursor-pointer ${selectedIndex === index ? 'bg-blue-500 text-white' : ''}`}
                            onClick={() => handleItemClick(index)}>{item} </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex flex-wrap gap-5 mb-4">
                <Dropdown options={dropdownData} className="min-w-[170px] max-w-[170px] !mb-0" onSelect={(option)=>console.log(option)} placeholder='All consumers'/>
                <Dropdown options={dropdownData} className="min-w-[170px] max-w-[170px] !mb-0" onSelect={(option)=>console.log(option)} placeholder='All versions'/>
                <Dropdown options={dropdownData} className="min-w-[170px] max-w-[170px] !mb-0" onSelect={(option)=>console.log(option)} placeholder='All methods'/>
                <Dropdown options={dropdownData} className="min-w-[170px] max-w-[170px] !mb-0" onSelect={(option)=>console.log(option)} placeholder='All responses'/>
                <Dropdown options={dropdownData} className="min-w-[170px] max-w-[170px] !mb-0" onSelect={(option)=>console.log(option)} placeholder='All locations'/>
            </div>
            <div className="w-full border rounded-[8px] h-fit flex justify-center items-center p-2 mb-6">
              <TrafficChart leftYData={leftYData} rightYData={rightYData} dateLabels={dateLabels} />
                {/*<div className="text-center">*/}
                {/*    <img src='/icons/info.svg' alt='info-icon'  className="mx-auto mb-3" />*/}
                {/*    <Typography text="You don't have any endpoints yet" variant="h2" className="mb-2" />*/}
                {/*    <Typography text="Add endpoints to start gathering analytics data" variant="small" className="mb-2" />*/}
                {/*    <Button className="bg-white !text-black border border-gray-300 mx-auto" text="Add Endpoints" />*/}
                {/*</div>*/}
            </div>
            <div>
            <div className='flex items-center p-1 gap-2 flex-wrap mb-4'>
              {graphResultCardsData.map((card)=>{
                  return(
                    <div key={card.id} className={`p-3 rounded-md w-full hover:bg-gray-100 text-white hover:text-gray-500 max-w-[200px] border border-gray-200 bg-blue-500`}>
                      <Typography variant="small" text={card.title} />
                      <p className='text-[24px] font-bold'>{card.count}<span className='ml-1'>{card.countType}</span></p>
                    </div>
                  )
              })}
            </div>
            </div>
            <Typography text="Logs" variant="h3" />
            <Table columns={columns} data={pageData} havePagination={true} />
        </div>
    )
}

export default TrafficAnalytics;