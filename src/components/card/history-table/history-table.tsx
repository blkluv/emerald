import { RootState } from "@/app/store";
import { DirectListingV3 } from "@thirdweb-dev/sdk";
import React from "react";
import { useSelector } from "react-redux";
import Detail from "../details-grid/detail";


const HistoryTable: React.FC = () => {
    const { singleListing } = useSelector((state: RootState) => state.Marketplace) as {
        singleListing: DirectListingV3 | null;
      };
    
      
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          
        </thead>
        <tbody>
            <Detail title={"Price"} value={`${singleListing?.currencyValuePerToken.displayValue} Matic`}/>
            
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;
