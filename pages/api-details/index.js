import { useEffect, useState } from "react";
import TabContent from "@/components/AnalyticsComponent/TabsContent";
import EndpointTab from "@/components/EndpointTab";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import TabsNavbar from "@/components/TabsNavbar";
import Typography from "@/components/Typegraphy/Typography";
import { useRouter } from "next/router";

const tabs = ["Endpoints", "Pricing"];

const APIDetail = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const router = useRouter();
  const handleTabClick = (index) => {
    if (index === 1) {
      router.push("/pricing");
    }
    setSelectedTab(index);
  };
  // const tabComponents = [
  //   EndpointTab,
  //   EndpointTab,
  //   EndpointTab,
  //   EndpointTab,
  //   EndpointTab,
  // ];
  // const SelectedTab = tabComponents[selectedTab];

  
  return (
    <div>
      <Navbar />
      <div className="w-full border-b-[1px] border-gray-300 py-3">
        <div className="w-full max-w-[1200px] px-6 mx-auto flex justify-center min-[845px]:justify-between items-center flex-wrap gap-3">
          <div className="flex justify-center gap-3 flex-wrap">
            <div className="w-[60px] h-[60px]">
              <img src="/images/logo.webp" alt="" className="w-full h-full" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Typography variant="h2" text="Show API Name" />
                <img src="/icons/bookmark.svg" alt="" />
                <p className="bg-gray-200 text-xs px-1 py-0.5 rounded-md min-w-fit">
                  FREEMIUM
                </p>
              </div>
              <p className="text-sm">
                Updated 5 months ago | <span className="">Sports</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap md:flex-nowrap">
            <div className="p-3 rounded-md bg-blue-200">
              <div className="flex gap-1 items-center mb-1">
                <img src="/icons/trending_up.svg" alt="trending_up" />
                <Typography variant="small " text="Popularity" />
              </div>
              <Typography
                variant="h2"
                className="text-center"
                text="9.9 / 10"
              />
            </div>
            <div className="p-3 rounded-md bg-blue-200">
              <div className="flex gap-1 items-center mb-1">
                <img src="/icons/clock.svg" alt="clock" />
                <Typography variant="small " text="Popularity" />
              </div>
              <Typography variant="h2" className="text-center" text="251 ms" />
            </div>
            <div className="p-3 rounded-md bg-blue-200">
              <div className="flex gap-1 items-center mb-1">
                <img src="/icons/tick.svg" alt="" />
                <Typography variant="small " text="Popularity" />
              </div>
              <Typography variant="h2" className="text-center" text="100%" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1200px] px-6 mx-auto">
        <TabsNavbar
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={handleTabClick}
        />
      </div>
      <TabContent>
        <EndpointTab />
      </TabContent>
      {/*<div className="fixed bottom-0 z-20 bg-white w-full mt-5">*/}
      {/*  <Footer />*/}
      {/*</div>*/}
    </div>
  );
};

export default APIDetail;
