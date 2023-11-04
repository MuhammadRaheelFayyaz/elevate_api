import React, {useState} from "react";
import Card from "@/components/Crad/Card";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Typography from "@/components/Typegraphy/Typography";
import Dropdown from "@/components/Dropdown/Dropdown";
import PageLayout from "@/components/HubLayout/HubLayout";
import HubListingLayout from "@/components/HubListingLayout/HubListingLayout";

export default function Home() {
    const [selectedOption, setSelectedOption] = useState('');
    const options = ['Option 1', 'Option 2', 'Option 3'];

    const handleSelect = (option) => {
        setSelectedOption(option);
    };
    return (
      <HubListingLayout>
              <div className='mx-3 md:mx-10 w-[70%] my-8'>
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
              <div className='mx-3 md:mx-10 md:w-[70%] my-8'>
                  <Typography variant='h2' text='Firewall Setting' className='mb-4 text-blue-500'/>
                  <Typography
                      variant='body'
                      text='Protect your API by blocking requests that are not from the RapidAPI infrastructure. RapidAPI adds the “X-RapidAPI-Proxy-Secret” header on every request. This header has a unique value for each API.'
                      className='mb-10'
                  />
                  <Typography variant='h2' text='X-PROXY_SECRET' className='mb-3'/>
                  <div className='w-full flex justify-between items-end'>
                      <div className='w-[70%] md:w-[80%] mb-0'>
                          <Input
                              placeholder='custom input'
                              value='key here'
                              label='X-RapidAPI-Proxy-Secret'
                              type="password"
                          />
                      </div>
                      <div className='w-[20%] md:w-[10%] mb-4'>
                          <Button text='Copy' className='w-full justify-center'/>
                      </div>
                  </div>
                  <Typography variant='body' text='Whitelist RapidAPI IPs to allow request only from RapidAPI.'/>
              </div>
              <div className="max-w-5xl">
                  <div className='mx-3 md:mx-10 my-8 mb-8'>
                      <Typography variant='h2' text='Threat Protection' className='mb-6 text-blue-500'/>
                      <Card className='m-0 flex justify-between items-center'>
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
                          <div className='w-[7%] mb-3'>
                              {/*<ToggleButton />*/}
                          </div>
                      </Card>
                  </div>
                  <div className='mx-3 md:mx-10 my-8'>
                      <Typography variant='h2' text='Request Schema Validation' className='mb-6 text-blue-500'/>
                      <Card className='m-0 flex justify-between items-center'>
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
                  <div className='mx-3 md:mx-10 my-8'>
                      <Typography variant='h2' text='Request Configurations' className='mb-6 text-blue-500'/>
                      <Card className='m-0'>
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
                                          className="!mb-1 py-[10px] w-[300px] md:w-auto"
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
                      <Card className='mt-10'>
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
      </HubListingLayout>
    )
}
