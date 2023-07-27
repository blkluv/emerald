import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { onChangeSingleListing, onChangeQuantityOwned, onChangeQuantityAvailable } from "@/app/features/marketplaceMachine";
import { onOpenCheckout, stepEnum } from "@/app/features/ui.slice";
import { RootState } from "@/app/store";
import { Checkout } from "@/components/checkout/checkout";
import Tabs from "@/components/card/tabs";
import { useAddress } from "@thirdweb-dev/react";
import Image from "next/image";


export default function Minter() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { contractAddress, id } = router.query as {
    contractAddress: string;
    id: string;
  };
  const { singleListing, step } = useSelector(
    (state: RootState) => state.Marketplace
  );
  const { checkoutOpen } = useSelector((state: RootState) => state.UI);
  const sdkRef = useRef<ThirdwebSDK | null>(null);
  const address = useAddress();
  console.log(' address ', address );
  
  const initializeSDK = useCallback(async (): Promise<void> => {
    try {
      const sdk = ThirdwebSDK.fromPrivateKey(
        '19b1913e5a422a48bb6541d2c1bd6db00af9e6d4b7a75bdb163f0660665c5119',
        'mumbai'
      );
      const contract = await sdk.getContract(
        "0xA95122DdCDee7d1d67ee5d59D97B4940F1B4c59E"
      );
      const listing = await contract.directListings.getListing(id);
      const singleContract = await sdk.getContract(contractAddress);
      const quantityOwned = await singleContract.erc1155.balanceOf(address || '', 0);
      const quantityAvailable = await singleContract.erc1155.totalSupply(0);
      //console.log(' quantity available ', parseFloat(quantityOwned))
      const owned = parseFloat(quantityOwned.toString());
      const available = parseFloat(quantityAvailable.toString()) // Convert BigNumber to string before using parseFloat
      dispatch(onChangeSingleListing(listing));
      dispatch(onChangeQuantityOwned(owned || 0));
      dispatch(onChangeQuantityAvailable(available || 0));

    } catch (error) {
      console.log("Error initializing SDK:", error);
    }
  }, [dispatch, id, address, contractAddress]);

  useEffect(() => {
    initializeSDK();
  });

  return (
    <>
      <div className="h-full"> {/* Use h-screen class here */}
        <div className="container mx-auto pt-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
            
            <div className="sm:col-span-1 md:col-span-1 lg:col-span-2">
              <Image
                src={singleListing?.asset.image || ""}
                alt={""}
                className="w-full h-50 rounded-lg"
              />
            </div>
            <div className="sm:col-span-1 md:col-span-1 lg:col-span-1">
              <h1 className="text-2xl font-bold mb-2">
                {singleListing?.asset.name}
              </h1>
              <p className="text-gray-600">
                {singleListing?.asset.description}
              </p>

              <div className="flex w-full mb-5 mt-10 flex-row justify-center mb-5">
                <button
                  onClick={() => dispatch(onOpenCheckout(true))}
                  className="ml-auto flex w-full justify-center rounded border-0 bg-gold p-2 px-6 py-2 font-medium text-black hover:bg-dark hover:text-white focus:outline-none"
                >
                  Comprar
                </button>
                </div>

              <div className="mb-10">
                 <Tabs></Tabs>  
              </div> 

              {checkoutOpen && (
                <div className="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-gray-500">
                  <Checkout />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
