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
                           selectedRoute,
                           selectedValue
                         }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    hljs.highlightAll();
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [selectedValue, xrapidApiKeyOption, xrapidApiHostOption, allDropdownOption, selectedRoute,]); // Listen to changes in selectedValue


  return (
    <div>
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
  const [rapidApiOption, setRapidApiOption] = useState(rapidApiOptions[0]);
  const [requestUrlOption, setRequestUrlOption] = useState(requestUrlOptions[0]);
  const [xrapidApiKeyOption, setXrapidApiKeyOption] = useState(XrapidApiKeyOptions[0]);
  const [xrapidApiHostOption, setXrapidApiHostOption] = useState(XrapidApiHostOptions[0]);
  const [allDropdownOption, setallDropdownOption] = useState(allDropdownOptions[0]);
  const [selectedRoute, setSelectedRoute] = useState("/v4/sports",)
  const [selectedValue, setSelectedValue] = useState("Node.js");
  const handleSelect = (value) => {
    setSelectedValue(value);
  };


  const handleEndPointClick = (endPoint) => {
    setSelectedRoute(endPoint)
  }

  return (
        <div className="flex  border-t-[1px] border-gray-200 flex-wrap">
          <div className='w-full max-w-[1440px] mx-auto px-6 '>
            <div className='w-full h-fit mb-3 p-3 bg-blue-200 rounded-lg'>
              <div className="py-[11px] mb-2">
                <SearchInput placeholder="Search Endpoints"/>
              </div>
              <Accodian title='Show Api Name'>
                {filesNames.map((item, index) => {
                  return (
                    <div key={`'live1-${index}'`} className="px-3 py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer"
                          onClick={() => handleEndPointClick(item.fileName)}>
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
              <Accodian title='Show Api Name'>
                {filesNames.map((item, index) => {
                  return (
                    <div key={`'live2-${index}'`} className="px-3 py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer"
                          onClick={() => handleEndPointClick(item.fileName)}>
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
                  <div key={`'live3-${index}'`} className="px-3 py-2 hover:bg-gray-300 cursor-pointer"
                        onClick={() => handleEndPointClick(item.fileName)}>
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
            <div className="w-full flex flex-col md:flex-row items-center border ">
              <div className="w-full md:w-1/2 border-b-[1px] md:border-b-0 md:border-r-[1px] border-gray-300 h-[470px] no-scrollbar overflow-auto">
                <div className="p-3 flex items-center justify-between gap-3 bg-gray-100">
                  <p className="text-xs">
                    <span className="text-base text-green-700">GET</span> /v4/sports
                  </p>
                </div>
                <div className="h-full ">
                  <div className="px-3 pt-2 pb-6 border-b-[1px] border-gray-200 flex-wrap">
                      <div className='w-full sm:w-2/3 mb-6'>
                          <Dropdown
                            options={rapidApiOptions}
                            className="min-w-[170px] !mb-0"
                            onSelect={(value) => setRapidApiOption(value)}
                            placeholder="default-application_7097837"
                            label='ElevateAPI App'
                          />
                          <p className="uppercase text-blue-500 mt-0.5 text-[10px]">
                            Required
                          </p>
                      </div>
                      <div className="w-full sm:w-2/3">
                        <Dropdown
                          options={requestUrlOptions}
                          className="min-w-[170px] !mb-0"
                          onSelect={(value) => setRequestUrlOption(value)}
                          placeholder="elevateapi.com"
                          label='Request URL'
                        />
                        <p className="uppercase text-blue-500 mt-0.5 text-[10px]">
                          Required
                        </p>
                    </div>
                  </div>
                  <div className="Accordion1">
                    <div className="flex gap-2 bg-gray-300 p-2 cursor-pointer">
                      <Typography variant="small" text="Header Parameters"/>
                    </div>
                    <div>
                      <div className="w-full px-3 pt-2 pb-6 border-b-[1px] border-gray-200">
                        <div className="mb-6 w-full sm:w-2/3">
                          <Dropdown
                            label='API-Key'
                            options={XrapidApiKeyOptions}
                            className="min-w-[170px] !mb-0"
                            onSelect={(value) => setXrapidApiKeyOption(value)}
                            placeholder="38e6a2fcd7msh619634bb6f8edddp155610jsn2d24f69c922f"
                          />
                          <p className="uppercase text-blue-500 mt-0.5 text-[10px]">
                            Required
                          </p>
                        </div>
                        <div className="w-full sm:w-2/3">
                          <Dropdown
                            label='Api-Host'
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
                  <div className="Accordion2 border-b-0 p-4 ">
                      {/*<div className="flex gap-2 w-full px-3 pt-2 pb-12 border-gray-200">*/}
                        <Dropdown
                          label="All"
                          options={allDropdownOptions}
                          className="min-w-[170px] md:w-[170px]"
                          onSelect={(value) => setallDropdownOption(value)}
                          placeholder="True"
                        />
                    {/*</div>*/}
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 no-scrollbar' style={{minHeight:"400px"}}>
                <div className='flex justify-end px-4 mt-4'>
                  <NestedDropdown
                    options={nestedOptions}
                    onSelect={handleSelect}
                    placeholder="Select an option"
                    className="max-w-[250px]"
                  />
                </div>
                <HighlightedHTML
                  rapidApiOption={rapidApiOption}
                  requestUrlOption={requestUrlOption}
                  xrapidApiKeyOption={xrapidApiKeyOption}
                  xrapidApiHostOption={xrapidApiHostOption}
                  allDropdownOption={allDropdownOption}
                  selectedValue={selectedValue}
                  selectedRoute={selectedRoute}
                />
              </div>
            </div>
          </div>
        </div>
  );
};

export default EndpointTab;
