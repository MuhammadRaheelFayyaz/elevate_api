import React from 'react';
import TraficAnalytics from './TraficAnalytics';

const tabComponents = [TraficAnalytics, TraficAnalytics, TraficAnalytics, TraficAnalytics];

const TabContent = ({ selectedTab }) => {
  const SelectedComponent = tabComponents[selectedTab];
  return (
    <div className="tab-content">
      <SelectedComponent />
    </div>
  );
};

export default TabContent;

