import {useEffect, useState} from "react";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import SearchInput from "../Search/Search";
import Typography from "../Typegraphy/Typography";
import UserDropdown from "../UserDropdown";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import TabsNavbar from "@/components/TabsNavbar";
import TabContent from "@/components/AnalyticsComponent/TabsContent";
import NestedDropdown from "@/components/NestedDropdown";
import apiCode from "@/lib/apiCode";
import Accodian from "@/components/Accodian";

const nestedOptions = [
  {label: "Clojure"},
  {label: "C#"},
  {label: "Go"},
  {label: "HTTP"},
  {label: "Java"},
  {label: "JavaScript"},
  {label: "Kotlin"},
  {label: "Node.js"},
  {label: "Objective-C"},
  {label: "OCaml"},
  {label: "PHP"},
  {label: "PowerShell"},
  {label: "Python"},
  {label: "R"},
  {label: "RapidQl"},
  {label: "Ruby"},
  {label: "Shell"},
  {label: "swift"},
];

function HighlightedHTML({
                           rapidApiOption,
                           requestUrlOption,
                           xrapidApiKeyOption,
                           xrapidApiHostOption,
                           allDropdownOption,
                           selectedRoute
                         }) {
  const [selectedValue, setSelectedValue] = useState("Node.js");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    hljs.highlightAll();
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [selectedValue, xrapidApiKeyOption, xrapidApiHostOption,allDropdownOption, selectedRoute]); // Listen to changes in selectedValue

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <div className="px-3">
        <NestedDropdown
          options={nestedOptions}
          onSelect={handleSelect}
          placeholder="Select an option"
          className="my-4 max-w-[250px]"
        />
      </div>
      {!loading && (
        <div
          dangerouslySetInnerHTML={{
            __html: `<pre><code>${apiCode[selectedValue](rapidApiOption, requestUrlOption, xrapidApiKeyOption, xrapidApiHostOption, allDropdownOption, selectedRoute).replace(/^\s*/gm, '').replace(/^/gm, ' ')}</code></pre>`,
          }}
        />
      )}
    </div>
  );
}


const dropdownOptions = ["v4 (Current)", "v1"];
const filesNames = [
  {
    type: "GET",
    fileName: "/v4/sports",
  },
  {
    type: "GET",
    fileName: "/v4/sports/{sport}/odds",
  },
  {
    type: "GET",
    fileName: "/v4/sports/{sport}/scores",
  },

];
const options = [
  {
    name: "John Doe",
    avatar: "/images/profile.jpeg",
    accountType: "Personal Account",
  },
  {name: "Create new Organization", avatar: "/icons/plus.svg"},
];

const rapidApiOptions = ["default-application_7097837", "default1-application_7097837"];
const requestUrlOptions = ["elevateapi.com", "elevateapi-test.com"];
const XrapidApiKeyOptions = ["38e6a2fcd7msh619634bb6f8edddp155610jsn2d24f69c922f", "6a2fcd7msh619634bb6f8edddp155610jsn2d24f69c922f"];
const XrapidApiHostOptions = ["odds.p.elevateapi.com", "odds.test.p.elevateapi.com"]
const allDropdownOptions = ["True", "False"];
const tabs = ["Code snippets", "Example Responses", "Results"];

const EndpointTab = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [rapidApiOption, setRapidApiOption] = useState(rapidApiOptions[0]);
  const [requestUrlOption, setRequestUrlOption] = useState(requestUrlOptions[0]);
  const [xrapidApiKeyOption, setXrapidApiKeyOption] = useState(XrapidApiKeyOptions[0]);
  const [xrapidApiHostOption, setXrapidApiHostOption] = useState(XrapidApiHostOptions[0]);
  const [allDropdownOption, setallDropdownOption] = useState(allDropdownOptions[0]);
  const [selectedRoute, setSelectedRoute] = useState("/v4/sports",)
  const tabComponents = [HighlightedHTML, HighlightedHTML, HighlightedHTML];
  const SelectedTab = tabComponents[selectedTab];

  const handleEndPointClick=(endPoint)=>{
    setSelectedRoute(endPoint)
  }

  return (
    <div>
      <div className="flex items-center gap-2 w-full max-w-[1200px] mx-auto px-5 py-3">
        <Typography
          variant="small"
          text="Odds data API for NFL, NBA, MLB, EPL, AFL and loads more, from US, UK, EU and Aussie bookmakers. Get"
        />
        <p className="text-xs text-blue-500 cursor-pointer">Show more ...</p>
      </div>
      <div>
        <div className="flex items-center justify-between p-4 bg-gray-100">
          <Dropdown
            options={dropdownOptions}
            className="max-w-[250px] min-w-[250px] !mb-0"
            onSelect={(option) => console.log(option)}
            placeholder="v4 (Current)"
          />
          {/*<img src="/icons/fullscreen.svg" alt="fullscreen"/>*/}
        </div>
        <div className="flex h-[calc(100vh_-_429px)] border-t-[1px] border-gray-200 flex-wrap">
          <div className="w-full md:w-[20%] h-full overflow-y-auto">
            <div className="px-3 py-[11px] bg-gray-100">
              <SearchInput placeholder="Search Endpoints"/>
            </div>
            <Accodian title='Live Sports'>
              {filesNames.map((item, index) => {
                return (
                  <div key={`'live1-${index}'`} className="px-3 py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer" onClick={()=>handleEndPointClick(item.fileName)}>
                    <p className="text-xs">
                    <span className="text-[10px] text-green-700">
                      {item.type}
                    </span>{" "}
                      {item.fileName}
                    </p>
                  </div>
                );
              })}
            </Accodian>
            <Accodian title='Live Sports Copy'>
              {filesNames.map((item, index) => {
                return (
                  <div key={`'live2-${index}'`} className="px-3 py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer" onClick={()=>handleEndPointClick(item.fileName)}>
                    <p className="text-xs">
                    <span className="text-[10px] text-green-700">
                      {item.type}
                    </span>{" "}
                      {item.fileName}
                    </p>
                  </div>
                );
              })}
            </Accodian>
            {filesNames.map((item, index) => {
              return (
                <div key={`'live3-${index}'`} className="px-3 py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer" onClick={()=>handleEndPointClick(item.fileName)}>
                  <p className="text-xs">
                    <span className="text-[10px] text-green-700">
                      {item.type}
                    </span>{" "}
                    {item.fileName}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="w-full md:w-[40%] border-l-2 border-r-2 border-gray-200 h-full">
            <div className="p-3 flex items-center justify-between gap-3 bg-gray-100">
              <p className="text-xs">
                <span className="text-base text-green-700">GET</span> /v4/sports
              </p>
              <Button text="Subscribe to test"/>
            </div>
            <div className="overflow-y-auto h-full ">
              <div className="p-3 border-b-[1px] border-gray-200">
                <p>
                  Returns a list of available sports and tournaments. Use the{" "}
                  <span className="bg-blue-200 px-2 py-1 rounded-md">
                    sports_key
                  </span>{" "}
                  in requests for /odds and /scores endpoints.
                </p>
              </div>
              <div className="max-w-[250px] m-3">
                <UserDropdown
                  options={options}
                  onSelect={(option) => console.log(option)}
                  placeholder="Select a person"
                />
              </div>
              <div className="flex gap-2 w-full px-3 pt-2 pb-12 border-b-[1px] border-gray-200">
                <div className="w-[30%]">
                  <Typography variant="small" text="ElevateAPI App"/>
                </div>
                <div className="w-[70%]">
                  <Dropdown
                    options={rapidApiOptions}
                    className="min-w-[170px] !mb-0"
                    onSelect={(value) => setRapidApiOption(value)}
                    placeholder="default-application_7097837"
                  />
                  <p className="uppercase text-blue-500 mt-0.5 text-[10px]">
                    Required
                  </p>
                </div>
              </div>
              <div className="flex gap-2 w-full px-3 pt-2 pb-12 border-b-[1px] border-gray-200">
                <div className="w-[30%]">
                  <Typography variant="small" text="Request URL"/>
                </div>
                <div className="w-[70%]">
                  <Dropdown
                    options={requestUrlOptions}
                    className="min-w-[170px] !mb-0"
                    onSelect={(value) => setRequestUrlOption(value)}
                    placeholder="elevateapi.com"
                  />
                  <p className="uppercase text-blue-500 mt-0.5 text-[10px]">
                    Required
                  </p>
                </div>
              </div>
              <div className="Accordion1">
                <div className="flex gap-2 bg-gray-300 p-2 cursor-pointer">
                  <img src="/icons/arrowRight.svg" alt="Arrow Right"/>
                  <Typography variant="small" text="Header Parameters"/>
                </div>
                <div>
                  <div className="flex gap-2 w-full px-3 pt-2 pb-12 border-b-[1px] border-gray-200">
                    <div className="w-[30%]">
                      <Typography variant="small" text="X-RapiElevateAPI-Key"/>
                      <Typography
                        variant="small"
                        className="mt-1 !text-gray-400"
                        text="ENUM"
                      />
                    </div>
                    <div className="w-[70%]">
                      <Dropdown
                        options={XrapidApiKeyOptions}
                        className="min-w-[170px] !mb-0"
                        onSelect={(value) => setXrapidApiKeyOption(value)}
                        placeholder="38e6a2fcd7msh619634bb6f8edddp155610jsn2d24f69c922f"
                      />
                      <p className="uppercase text-blue-500 mt-0.5 text-[10px]">
                        Required
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 w-full px-3 pt-2 pb-12 border-b-[1px] border-gray-200">
                    <div className="w-[30%]">
                      <Typography variant="small" text="X-ElevateAPI-Host"/>
                      <Typography
                        variant="small"
                        className="mt-1 !text-gray-400"
                        text="STRING"
                      />
                    </div>
                    <div className="w-[70%]">
                      <Dropdown
                        options={XrapidApiHostOptions}
                        className="min-w-[170px] !mb-0"
                        onSelect={(value) => setXrapidApiHostOption(value)}
                        placeholder="odds.p.elevateapi.com"
                      />
                      <p className="uppercase text-blue-500 mt-0.5 text-[10px]">
                        Required
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Accordion2">
                <div className="flex gap-2 bg-gray-300 p-2 cursor-pointer">
                  <img src="/icons/arrowRight.svg" alt="Arrow Right"/>
                  <Typography variant="small" text="Optional Parameters"/>
                </div>
                <div>
                  <div className="flex gap-2 w-full px-3 pt-2 pb-12 border-b-[1px] border-gray-200">
                    <div className="w-[30%]">
                      <Typography variant="small" text="all"/>
                      <Typography
                        variant="small"
                        className="mt-1 !text-gray-400"
                        text="BOOLEAN"
                      />
                    </div>
                    <div className="w-[70%]">
                      <Dropdown
                        options={allDropdownOptions}
                        className="min-w-[170px] !mb-0"
                        onSelect={(value) => setallDropdownOption(value)}
                        placeholder="True"
                      />
                      <div className="flex gap-2">
                        <p className="uppercase text-blue-500 mt-0.5 text-[10px]">
                          optional
                        </p>
                        <p className="text-xs">
                          When excluded, only recently updated (in-season)
                          sports appear. Include this paramter to see all
                          available sports
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[40%] h-full overflow-scroll">
            <TabsNavbar
              tabs={tabs}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
            <TabContent>
              <SelectedTab
                rapidApiOption={rapidApiOption}
                requestUrlOption={requestUrlOption}
                xrapidApiKeyOption={xrapidApiKeyOption}
                xrapidApiHostOption={xrapidApiHostOption}
                allDropdownOption={allDropdownOption}
                selectedRoute={selectedRoute}
              />
            </TabContent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndpointTab;
