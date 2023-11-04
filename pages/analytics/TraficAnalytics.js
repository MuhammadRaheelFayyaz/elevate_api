import Button from "@/components/Button/Button";
import Dropdown from "@/components/Dropdown/Dropdown";
import Typography from "@/components/Typegraphy/Typography";
import { useState } from "react";
import Table from "@/components/custom-table/table";

const TraficAnalytics = ()=>{
    const endpointsOptions = ["Disabled"]
    const timeOptions = ["GMT +00:00", "GMT +01:00", "GMT +02:00", "GMT +03:00", "GMT +04:00"]
    const data = ["1hr", "3hr", "12hr", "24h", "7d", "30d", "90d"]
    const dropdownData = ["No Results"]
    const [selectedIndex, setSelectedIndex] = useState(4);

    const handleItemClick = (index) => {
        setSelectedIndex(index);
    };
    const columns = [
        {key: 'date/time', label: 'Date/Time'},
        {key: 'consumers', label: 'Consumers'},
        {key: 'endpoind', label: 'Endpoind'},
        {key: 'apiversion', label: 'API Version'},
        {key: 'method', label: 'Method'},
        {key: 'response', label: 'Response'},
        {key: 'location', label: 'Location'},
        {key: 'latency', label: 'Latency'},
    ];

    const rowsData = [
        {
          'date/time': '2023-11-01 10:30 AM',
          consumers: 'User1',
          endpoind: '/api/data',
          apiversion: 'v1',
          method: 'GET',
          response: '200 OK',
          location: 'New York',
          latency: '50ms'
        },
        {
          'date/time': '2023-11-02 02:15 PM',
          consumers: 'User2',
          endpoind: '/api/users',
          apiversion: 'v2',
          method: 'POST',
          response: '201 Created',
          location: 'London',
          latency: '75ms'
        },
        {
          'date/time': '2023-11-03 08:45 AM',
          consumers: 'User3',
          endpoind: '/api/orders',
          apiversion: 'v1',
          method: 'GET',
          response: '200 OK',
          location: 'Berlin',
          latency: '40ms'
        },
        {
          'date/time': '2023-11-04 04:20 PM',
          consumers: 'User4',
          endpoind: '/api/products',
          apiversion: 'v2',
          method: 'PUT',
          response: '204 No Content',
          location: 'Tokyo',
          latency: '60ms'
        },
        {
          'date/time': '2023-11-05 11:55 AM',
          consumers: 'User5',
          endpoind: '/api/settings',
          apiversion: 'v1',
          method: 'PATCH',
          response: '200 OK',
          location: 'Sydney',
          latency: '55ms'
        }
      ];
      
    return (
        <div className="px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-3 my-5 ">
                <Dropdown options={endpointsOptions} className="w-full min-w-[250px] max-w-[800px] !mb-0" onSelect={(option)=>console.log(option)} placeholder='All Endpoints (Default)'/>
                <div className="flex gap-3 flex-col sm:flex-row">
                    <Dropdown options={timeOptions} className="w-[170px] !mb-0" onSelect={(option)=>console.log(option)} placeholder='GMT +00:00'/>
                    <ul className="border rounded-[5px] overflow-hidden flex items-center w-fit h-[38px]">
                        {data.map((item, index) => (
                            <li key={item} className={`h-[38px] px-3 border-r-[1px] flex justify-center items-center text-sm cursor-pointer ${selectedIndex === index ? 'bg-gray-200' : ''}`}
                            onClick={() => handleItemClick(index)} >{item} </li>
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
            <div className="w-full border rounded-[8px] h-[500px] flex justify-center items-center mb-6">
                <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-3" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                    <Typography text="You don't have any endpoints yet" variant="h2" className="mb-2" />
                    <Typography text="Add endpoints to start gathering analytics data" variant="small" className="mb-2" />
                    <Button className="bg-white !text-black border border-gray-300 mx-auto" text="Add Endpoints" />
                </div>
            </div>
            <Typography text="Logs" variant="h3" />
            <Table columns={columns} data={rowsData} />
        </div>
    )
}

export default TraficAnalytics;