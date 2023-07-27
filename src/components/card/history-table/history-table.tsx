import { RootState } from "@/app/store";
import { DirectListingV3 } from "@thirdweb-dev/sdk";
import React from "react";
import { useSelector } from "react-redux";
import Detail from "../details-grid/detail";


const HistoryTable: React.FC = () => {
  const { singleListing, quantityOwned, quantityAvailable } = useSelector(
    (state: RootState) => state.Marketplace
  ) as {
    singleListing: DirectListingV3 | null;
    quantityOwned: number | null;
    quantityAvailable: number | null;
  };
  
     // Type assertion for attributes array
  const attributes = singleListing?.asset?.attributes as Array<{ trait_type: string; value: string }> | undefined;
      
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          {/* ... */}
        </thead>
        <tbody>
          <Detail title={"Price"} value={`${singleListing?.currencyValuePerToken.displayValue} Matic`} key={singleListing?.id || 'price'} />
          <Detail title={"Quantity Available"} value={`${quantityAvailable}`} key="quantity-available" />
          <Detail title={"Owned by you"} value={`${quantityOwned}`} key={singleListing?.id || 'owned-by-you'} />
          {attributes?.map((attribute: { trait_type: string; value: string }, index: number) => (
            <Detail title={attribute.trait_type} value={attribute.value} key={`attribute-${index}`} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;
