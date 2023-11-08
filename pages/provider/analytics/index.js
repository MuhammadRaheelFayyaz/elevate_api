import React, {useState} from "react";
import PageLayout from "@/components/HubLayout/HubLayout";
import TabsNavbar from "@/components/TabsNavbar";
import TabContent from "@/components/AnalyticsComponent/TabsContent";
import TrafficAnalytics from "@/components/AnalyticsComponent/TraficAnalytics";
import UsersAnalytics from "@/components/AnalyticsComponent/UsersAnalytics";
import RevenueAnalytics from "@/components/AnalyticsComponent/RevenueAnalytics";

const tabs = ["Traffic Analytics", "User Analytics", "Revenue Analytics"];
const tabComponents = [TrafficAnalytics, UsersAnalytics, RevenueAnalytics];

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
