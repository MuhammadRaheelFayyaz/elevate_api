import React, {useState} from "react";
import PageLayout from "@/components/HubLayout/HubLayout";
import TabsNavbar from "@/components/TabsNavbar";
import TabContent from "@/components/AnalyticsComponent/TabsContent";

const tabs = ["Traffic Analytics", "User Analytics", "Revenue Analytics", "Alerts"];

export default function Analytics() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <PageLayout>
      <TabsNavbar tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <TabContent selectedTab={selectedTab} />
    </PageLayout>
  )
}
