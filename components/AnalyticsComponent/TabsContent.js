import React from 'react';
import TrafficAnalytics from './TraficAnalytics';

const tabComponents = [TrafficAnalytics, TrafficAnalytics, TrafficAnalytics, TrafficAnalytics];

const TabContent = ({ selectedTab }) => {
  const SelectedComponent = tabComponents[selectedTab];
  return (
    <div className="tab-content">
      <SelectedComponent />
    </div>
  );
};

export default TabContent;

