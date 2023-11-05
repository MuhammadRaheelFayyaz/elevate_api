import React from 'react';

const TabContent = ({ selectedTab, tabComponents }) => {
  const SelectedComponent = tabComponents[selectedTab];
  return (
    <div className="tab-content">
      <SelectedComponent />
    </div>
  );
};

export default TabContent;

