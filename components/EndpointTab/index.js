import Button from "../Button/Button"
import Dropdown from "../Dropdown/Dropdown"
import SearchInput from "../Search/Search"
import Typography from "../Typegraphy/Typography"
import UserDropdown from "../UserDropdown"

const dropdownOptions = ["v4 (Current)", "v1"]
const filesNames =[
    {
        type:"GET",
        fileName:"/v4/sports"
    },
    {
        type:"GET",
        fileName:"/v4/sports/{sport}/odds"
    },
    {
        type:"GET",
        fileName:"/v4/sports/{sport}/scores"
    },
]
const options = [
    { name: 'John Doe', avatar: '/images/profile.jpeg', accountType:"Personal Account" },
    { name: 'Create new Organization', avatar: '/icons/plus.svg' },
  ];
  const option2 = ["default-application_7097837", "Add New App"]
  const option3 = ["rapidapi.com"]
  const option4 = ["38e6a2fcd7msh619634bb6f8edddp155610jsn2d24f69c922f"]
  const option5 = ["odds.p.rapidapi.com"]
  const option6 = ["True", "False", "Do not include in request"]


const EndpointTab = ()=>{

    return(
        <div>
            <div className="flex items-center gap-2 w-full max-w-[1200px] mx-auto px-5 py-3">
                <Typography variant='small' text='Odds data API for NFL, NBA, MLB, EPL, AFL and loads more, from US, UK, EU and Aussie bookmakers. Get' />
                <p className="text-xs text-blue-500 cursor-pointer">Show more ...</p>
            </div>
            <div>
                <div className="flex items-center justify-between p-4 bg-gray-100">
                    <Dropdown options={dropdownOptions} className="max-w-[250px] min-w-[250px] !mb-0"
                    onSelect={(option) => console.log(option)} placeholder='v4 (Current)'/>
                    <img src="/icons/fullscreen.svg" alt="fullscreen" />
                </div>
                <div className="flex min-h-[400px] border-t-[1px] border-gray-200">
                    <div className="w-[20%]">
                        <div className="px-3 py-[11px] bg-gray-100">
                            <SearchInput placeholder="Search Endpoints" />
                        </div>
                        {filesNames.map((item)=>{
                            return(
                                <div className="px-3 py-2 bg-gray-200 hover:bg-gray-300">
                                    <p className="text-xs"><span className="text-[10px] text-green-700">{item.type}</span> {item.fileName}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="w-[40%] border-l-2 border-r-2 border-gray-200">
                        <div className="p-3 flex items-center justify-between gap-3 bg-gray-100">
                            <p className="text-xs"><span className="text-base text-green-700">GET</span> /v4/sports</p>
                            <Button text='Subscribe to test' />
                        </div>
                        <div className="overflow-y-auto h-full max-h-[386px]">
                            <div className="p-3 border-b-[1px] border-gray-200">
                                <p>Returns a list of available sports and tournaments. Use the <span className="bg-blue-200 px-2 py-1 rounded-md">sports_key</span> in requests for /odds and /scores endpoints.</p>
                            </div>
                            <div className='max-w-[250px] m-3'>
                                <UserDropdown options={options} onSelect={(option) => console.log(option)} placeholder="Select a person"/>
                            </div>
                            <div className="flex gap-2 w-full px-3 pt-2 pb-12 border-b-[1px] border-gray-200">
                                <div className="w-[30%]">
                                    <Typography variant='small' text='RapidAPI App' />
                                </div>
                                <div className="w-[70%]">
                                    <Dropdown options={option2}  className="min-w-[170px] !mb-0" onSelect={(option)=>console.log(option)} placeholder='default-application_7097837'/>
                                    <p className="uppercase text-blue-500 mt-0.5 text-[10px]">Required</p>
                                </div>
                            </div>
                            <div className="flex gap-2 w-full px-3 pt-2 pb-12 border-b-[1px] border-gray-200">
                                <div className="w-[30%]">
                                    <Typography variant='small' text='Request URL' />
                                </div>
                                <div className="w-[70%]">
                                    <Dropdown options={option3}  className="min-w-[170px] !mb-0" onSelect={(option)=>console.log(option)} placeholder='rapidapi.com'/>
                                    <p className="uppercase text-blue-500 mt-0.5 text-[10px]">Required</p>
                                </div>
                            </div>
                            <div className="Accordion1">
                                <div className="flex gap-2 bg-gray-300 p-2 cursor-pointer">
                                    <img src="/icons/arrowRight.svg" alt="Arrow Right" />
                                    <Typography variant='small' text='Header Parameters' />
                                </div>
                                <div>
                                    <div className="flex gap-2 w-full px-3 pt-2 pb-12 border-b-[1px] border-gray-200">
                                        <div className="w-[30%]">
                                            <Typography variant='small' text='X-RapidAPI-Key' />
                                            <Typography variant='small' className='mt-1 !text-gray-400' text='ENUM' />
                                        </div>
                                        <div className="w-[70%]">
                                            <Dropdown options={option4}  className="min-w-[170px] !mb-0" onSelect={(option)=>console.log(option)} placeholder='38e6a2fcd7msh619634bb6f8edddp155610jsn2d24f69c922f'/>
                                            <p className="uppercase text-blue-500 mt-0.5 text-[10px]">Required</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 w-full px-3 pt-2 pb-12 border-b-[1px] border-gray-200">
                                        <div className="w-[30%]">
                                            <Typography variant='small' text='X-RapidAPI-Host' />
                                            <Typography variant='small' className='mt-1 !text-gray-400' text='STRING' />
                                        </div>
                                        <div className="w-[70%]">
                                            <Dropdown options={option5}  className="min-w-[170px] !mb-0" onSelect={(option)=>console.log(option)} placeholder='odds.p.rapidapi.com'/>
                                            <p className="uppercase text-blue-500 mt-0.5 text-[10px]">Required</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Accordion2">
                                <div className="flex gap-2 bg-gray-300 p-2 cursor-pointer">
                                    <img src="/icons/arrowRight.svg" alt="Arrow Right" />
                                    <Typography variant='small' text='Optional Parameters' />
                                </div>
                                <div>
                                    <div className="flex gap-2 w-full px-3 pt-2 pb-12 border-b-[1px] border-gray-200">
                                        <div className="w-[30%]">
                                            <Typography variant='small' text='all' />
                                            <Typography variant='small' className='mt-1 !text-gray-400' text='BOOLEAN' />
                                        </div>
                                        <div className="w-[70%]">
                                            <Dropdown options={option6}  className="min-w-[170px] !mb-0" onSelect={(option)=>console.log(option)} placeholder='True'/>
                                            <div className="flex gap-2">
                                                <p className="uppercase text-blue-500 mt-0.5 text-[10px]">optional</p>
                                                <p className="text-xs">When excluded, only recently updated (in-season) sports appear. Include this paramter to see all available sports</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[40%]">right</div>
                </div>
            </div>
        </div>
    )
}

export default EndpointTab