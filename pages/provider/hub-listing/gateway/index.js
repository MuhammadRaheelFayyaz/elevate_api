import React, {useState} from "react";
import Card from "@/components/Crad/Card";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Typography from "@/components/Typegraphy/Typography";
import Dropdown from "@/components/Dropdown/Dropdown";
import PageLayout from "@/components/HubLayout/HubLayout";
import HubListingLayout from "@/components/HubListingLayout/HubListingLayout";
import SearchInput from "@/components/Search/Search";
import Table from "@/components/custom-table/table";


const columns = [
  {key: 'action', label: 'Action'},
  {key: 'key', label: 'Key'},
  {key: 'valueType', label: 'Value Type'},
  {key: 'value', label: 'Value'},
  {key: 'condition', label: 'Condition'},
  {key: 'scope', label: 'Scope'},
  {key: 'plans', label: 'Plans'},
];

const rowsData = [
  {
    'action': 'Login',
    'key': 'username',
    'valueType': 'String',
    'value': 'john_doe123',
    'condition': 'Equals',
    'scope': 'Admin',
    'plans': 'Plan A'
  },
  {
    'action': 'Update Profile',
    'key': 'email',
    'valueType': 'Email',
    'value': 'john.doe@example.com',
    'condition': 'Contains',
    'scope': 'User',
    'plans': 'Plan B'
  },
  {
    'action': 'Create Account',
    'key': 'password',
    'valueType': 'Password',
    'value': '********',
    'condition': 'Matches Regex',
    'scope': 'User',
    'plans': 'Plan C'
  },
];

const options = ['Option 1', 'Option 2', 'Option 3'];
const options2 = ['v1 Current', 'Manage Versions'];
const options3 = ['HEADER', 'QUERY'];
const data = ["All (0)", "Request (0)", "Response (0)"]

export default function Gateway() {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [count, setCount] = useState(1)

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleItemClick = (index) => {
    setSelectedIndex(index);
  };


  return (
    <HubListingLayout>
      <div className="mx-3">
        <div className='w-full md:w-[60%] my-8'>
          <Typography variant='h1' text='Gateway DNS' className='mb-4 text-blue-500'/>
          <Typography
            variant='h4'
            text='The gateway developers use to make request to the API'
            className='mb-10'
          />
          <Dropdown
            options={options}
            onSelect={handleSelect}
            placeholder={'select the item'}
            icon={'/icon/list.svg'}
          />
        </div>
        <div className='w-full md:w-[60%] my-8'>
          <Typography variant='h2' text='Firewall Setting' className='mb-4 text-blue-500'/>
          <Typography
            variant='body'
            text='Protect your API by blocking requests that are not from the Elevate-API infrastructure. Elevate-API adds the “X-Elevate-API-Proxy-Secret” header on every request. This header has a unique value for each API.'
            className='mb-10'
          />
          <Typography variant='h2' text='X-PROXY_SECRET' className='mb-3'/>
          <div className='w-full flex justify-between items-end'>
            <div className='w-[70%] md:w-[80%] mb-0'>
              <Input
                placeholder='custom input'
                value='key here'
                label='X-Elevate-API-Proxy-Secret'
                type="password"
              />
            </div>
            <div className='w-[20%] md:w-[10%] mb-4'>
              <Button text='Copy' className='w-full justify-center'/>
            </div>
          </div>
          <Typography variant='body' text='Whitelist Elevate-API IPs to allow request only from Elevate-API.'/>
        </div>
        <div className="w-full md:w-[60%]">
          <div className='my-8 mb-8'>
            <Typography variant='h2' text='Threat Protection' className='mb-6 text-blue-500'/>
            <Card className='m-0 flex justify-between items-center shadow-lg border'>
              <div className='w-[90%] mb-3'>
                <Typography
                  variant='h3'
                  text='Protects API from SQL or Javascript injection attacks'
                  className='mb-4 font-semibold'
                />
                <Typography
                  variant='body'
                  text='Automatically compare the paths, parameters, headers, and body (application/json, application/x-www-form-urlencoded, and non-binary data in multipart/form-data only) of all requests against pre-defined RegEx patterns, and block matching requests from reaching your servers.'
                  className='mb-4'
                />
              </div>
              {/* <div className='w-[7%] mb-3'>
                <ToggleButton />
              </div> */}
            </Card>
          </div>
          <div className='my-8'>
            <Typography variant='h2' text='Request Schema Validation' className='mb-6 text-blue-500'/>
            <Card className='m-0 flex justify-between items-center shadow-lg border'>
              <div className='w-[90%] mb-3'>
                <Typography
                  variant='h3'
                  text='Automatically validate the path, query and header parameters on run time and block all invalid requests'
                  className='mb-4 font-semibold'
                />
                <Typography
                  variant='body'
                  text='This requires “Content-Type” header in requests with a body.'
                  className=' mb-4'
                />
              </div>
              <div className='w-[7%] mb-3'>
                {/*<ToggleButton />*/}
              </div>
            </Card>
          </div>
          <div className='my-8'>
            <Typography variant='h2' text='Request Configurations' className='mb-6 text-blue-500'/>
            <Card className='m-0 shadow-lg border'>
              <div className='flex flex-col md:flex-row justify-between items-center '>
                <div className='w-full md:w-[50%] mb-3'>
                  <Typography variant='h3' text='Request Size Limit' className=' mb-4 font-semibold '/>
                  <Typography
                    variant='body'
                    text='Configure the request message size'
                    className='mb-4'
                  />
                </div>
                <div className='w-full md:w-[30%] mb-3 flex justify-between items-center flex-wrap'>
                  <div className='w-full md:w-[60%]'>
                    <Input type='number' className='w-full' placeholder='custom input' value='0'/>
                  </div>
                  <div className='w-full md:w-[37%]'>
                    <Dropdown
                      className="!mb-4 w-[300px] md:w-auto"
                      options={options}
                      onSelect={handleSelect}
                      placeholder={'MB'}
                    />
                  </div>
                  <Typography
                    variant='body'
                    text='Max value in mb'
                    className='mb-4 text-grey-300'
                  />
                </div>
              </div>
            </Card>
            <Card className='mt-10 shadow-lg border'>
              <div
                className='flex flex-col md:flex-row justify-between md:items-center flex-wrap md:flex-nowrap'>
                <div className='w-full md:w-[50%] mb-3'>
                  <Typography
                    variant='h3'
                    text='Proxy TimeoutProxy Timeout'
                    className='mb-4 font-semibold text-grey-300'
                  />
                  <Typography
                    variant='body'
                    text='Configure the timeout between the proxy and the target endpoints'
                    className='mb-4'
                  />
                </div>
                <div className='w-full md:w-[60%] mb-3 flex justify-between items-center'>
                  <div className='w-full md:w-[60%] md:ml-auto'>
                    <Input placeholder='custom input' type='number'/>
                    <Typography variant='body' text='Max value in mb' className=' mb-4'/>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className='my-3 border border-gray-400 overflow-hidden rounded-lg w-full md:w-[80%]'>
          <div className="flex items-center flex-wrap gap-1 p-3 bg-blue-200">
            <img src="/icons/info.svg" alt="info"/>
            <Typography text='Version Specific' className='min-w-fit' variant='h3'/>
            <Typography text='Changes will apply only to' className='min-w-fit' variant='small'/>
            <Dropdown options={options2} onSelect={handleSelect} className='!mb-0 max-w-[180px] min-w-[180px]'
                      placeholder={'Version v1 Current'}/>
          </div>
          <div className="p-4">
            <Typography variant='body' className='mb-2' text='Authorization'/>
            <Typography variant='xs' className='mb-4' text="ElevateAPI implements a single secret key per developer application across all APIs to minimize friction in testing and implementing APIs.
                  If your API requires additional layer of authorization, go to 'Definitions' => 'Security' and setup your security scheme."/>
            <Typography variant='body' className='mb-2' text='Secret Headers & Parameters'/>
            <Typography variant='xs' className='mb-4'
                        text="Secret request headers and parameters will be transparently added to every request made by a client"/>
            <div>
              {Array.from({length: count}, (_, index) => index + 1).map((item,index) => (
                <div key={`'gateway1-${index}'`} className="flex gap-3 items-center border rounded-md px-3 flex-wrap border-gray-200 py-2 mb-1">
                  <Input placeholder='Name' wrapperClassname='!mb-0 max-w-[250px]' className='!h-[38px]'/>
                  <Input placeholder='Value' wrapperClassname='!mb-0  max-w-[250px]' className='!h-[38px]'/>
                  <Dropdown placeholder='HEADER' className='!mb-0  max-w-[250px]' options={options3}/>
                  <Input placeholder='Description (Optional)' wrapperClassname='!mb-0  max-w-[250px]' className='!h-[38px]'/>
                  <img src='/icons/delete.svg' onClick={() => setCount(count > 1 ? count - 1 : count)}/>
                </div>
              ))}
              <Button text="Add More" className="mt-3 mx-auto" onClick={() => setCount(count + 1)} />
              {/* <div className="flex gap-3 flex-wrap items-center border-b-[1px] border-gray-200 py-2"
                  onClick={() => setCount(count + 1)}>
                <Typography text='Add' className='w-[250px] pl-1' variant='small'/>
                <Typography text='Value' className='w-[250px] pl-1' variant='small'/>
                <Typography text='Type' className='w-[250px] pl-1' variant='small'/>
                <Typography text='Description (optional)' className='w-[250px] pl-1' variant='small'/>
              </div> */}
            </div>
            <div className="mt-3">
              <Typography variant='body' className='mb-2' text='Transformations'/>
              <p className="text-xs">Transformations can be used to remove, remap or add parameters in a request or a
                response via ElevateAPI proxy. <span
                  className="text-blue-500 cursor-pointer"> View transformation examples</span> or <span
                  className="text-blue-500 cursor-pointer">learn more</span> in documentation. </p>
              <div className="flex gap-2 items-center justify-between flex-wrap my-3">
                <div className="flex gap-2 items-center flex-wrap">
                  <div className="min-w-[245px]">
                    <SearchInput placeholder="Search by key and action" onChange={() => console.log("search")}/>
                  </div>
                  <ul
                    className="border rounded-[5px] overflow-hidden flex items-center min-w-fit max-w-fit h-[42px] opacity-60 ">
                    {data.map((item, index) => (
                      <li key={item}
                          className={`h-[38px] px-3 border-r-[1px] flex justify-center items-center text-sm cursor-pointer ${selectedIndex === index ? 'bg-gray-200' : ''}`}
                          onClick={() => handleItemClick(index)}>{item} </li>
                    ))}
                  </ul>
                </div>
                <Button text='Add Transformation' className='bg-white border border-gray-300 !text-black '
                        icon='/icons/plus.svg'/>
              </div>
              <Table columns={columns} data={rowsData}/>
            </div>
          </div>
        </div>
      </div>
    </HubListingLayout>
  )
}
