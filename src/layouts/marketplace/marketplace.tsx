import { RootState } from "@/app/store";
import { DirectListingV3, ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";

import Card from "@/components/card/card";
import { onChangeListing } from "@/app/features/marketplaceMachine";

export const MarketplaceComponent = () => {
   
    const dispatch = useDispatch();
    const { listings } = useSelector((state: RootState) => state.Marketplace);

    useEffect(() => {
        const initializeSDK = async () => {
            try {
                const sdk = new ThirdwebSDK("mumbai", {
                    clientId: "76d52242f5c4eacdf3b7ef104005365f",
                });
                const contract = await sdk.getContract("0xA95122DdCDee7d1d67ee5d59D97B4940F1B4c59E");
                const listing = await contract.directListings.getAllValid();
               
                dispatch(onChangeListing(listing))
                console.log('listing ', listing, ' listings ', listings)
               
            } catch (error) {
                console.log('Error initializing SDK:', error);
            }
        };
        initializeSDK();
        //console.log(' listings ', listings)
    }, []);

    return (
        <>
            <div className="flex flex-col h-full justify-evenly">
                <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-20'}>
                    {
                        listings?.map((nft) => (
                            <Card 
                                id={Number(nft.id)} 
                                name={nft.asset.name} 
                                description={nft.asset.description} 
                                imageUrl={nft.asset.image} 
                                price={nft.currencyValuePerToken.displayValue}
                                contractAddress={nft.assetContractAddress}
                                />
                        ))
                    }
                </div>
            </div>
        </>
    );
};
