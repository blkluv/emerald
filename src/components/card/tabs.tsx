import React, { useState } from "react";
import HistoryTable from "./history-table/history-table";
import DetailsGrid from "./details-grid/details-grid";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Details");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="mb-10 mt-5 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "Details" ? "border-blue-500" : "border-transparent"
              }`}
              id="Details-tab"
              data-tabs-target="#Details"
              type="button"
              role="tab"
              aria-controls="Details"
              aria-selected={activeTab === "Details"}
              onClick={() => handleTabClick("Details")}
            >
              Details
            </button>
          </li>
         {/*<li className="mr-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                activeTab === "History" ? "border-blue-500" : ""
              }`}
              id="History-tab"
              data-tabs-target="#History"
              type="button"
              role="tab"
              aria-controls="History"
              aria-selected={activeTab === "History"}
              onClick={() => handleTabClick("History")}
            >
              History
            </button>
            </li>*/}
          
        </ul>
      </div>
      <div id="myTabContent">
        <div
          className={`${
            activeTab === "Details" ? "block" : "hidden"
          }  rounded-lg bg-gray-50 dark:bg-gray-800`}
          id="Details"
          role="tabpanel"
          aria-labelledby="Details-tab"
        >
          <DetailsGrid></DetailsGrid>
        </div>
        <div
          className={`${
            activeTab === "History" ? "block" : "hidden"
          }  rounded-lg bg-gray-50 dark:bg-gray-800`}
          id="History"
          role="tabpanel"
          aria-labelledby="History-tab"
        >
          <HistoryTable></HistoryTable>
        </div>
       
        
      </div>
    </>
  );
};

export default Tabs;
