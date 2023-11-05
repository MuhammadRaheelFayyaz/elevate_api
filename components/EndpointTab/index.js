import Dropdown from "../Dropdown/Dropdown"
import Typography from "../Typegraphy/Typography"

const dropdownOptions = ["v4 (Current)", "v1"]

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
                <div className="flex min-h-[400px]">
                    <div className="w-[20%]">left</div>
                    <div className="w-[40%] border-l-2 border-r-2 border-gray-200">center</div>
                    <div className="w-[40%]">right</div>
                </div>
            </div>
        </div>
    )
}

export default EndpointTab