import React, {useState} from "react";
import PageLayout from "@/components/HubLayout/HubLayout";
import TabsNavbar from "@/components/TabsNavbar";
import TabContent from "@/components/AnalyticsComponent/TabsContent";
import TrafficAnalytics from "@/components/AnalyticsComponent/TraficAnalytics";
import UsersAnalytics from "@/components/AnalyticsComponent/UsersAnalytics";
const tabs = ["Traffic Analytics", "User Analytics", "Revenue Analytics", "Alerts"];
const tabComponents = [TrafficAnalytics, UsersAnalytics, TrafficAnalytics, TrafficAnalytics];

export default function Analytics() {
  const [selectedTab, setSelectedTab] = useState(0);
  const SelectedTab = tabComponents[selectedTab];

  return (
    <PageLayout>
      <TabsNavbar tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <TabContent selectedTab={selectedTab} >
        <SelectedTab />
      </TabContent>
    </PageLayout>
  )
}
