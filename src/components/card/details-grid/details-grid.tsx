import React, { useEffect, useState } from "react";
import Detail from "@/components/card/details-grid/detail";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { DirectListingV3 } from "@thirdweb-dev/sdk";

const DetailsGrid = () => {


    const { singleListing, quantityOwned, quantityAvailable } = useSelector((state: RootState) => state.Marketplace) as unknown as {
        singleListing: DirectListingV3 | null;
        quantityOwned : number | null;
        quantityAvailable : number | null ;
      };

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          
        </thead>
        <tbody>
            <Detail title={"Price"} value={`${singleListing?.currencyValuePerToken.displayValue} Matic`}/>
            <Detail title={"Quantity Available"} value={`${quantityAvailable}`}/>
            <Detail title={"Owned by you"} value={`${quantityOwned}`}/>
            {
                singleListing?.asset.attributes?.map((attribute: { trait_type: string; value: string; }) =>
                    <Detail title={attribute.trait_type} value={attribute.value}/>
                )
            }
        </tbody>
      </table>
    </div>
  );
};

export default DetailsGrid;
