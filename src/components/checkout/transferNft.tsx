import { onOpenCheckout, onGetListing } from '@/app/features/ui.slice';
import { RootState } from '@/app/store';
import {
  useContract,
  useBuyDirectListing,
  Web3Button,
  useValidDirectListings,
  useContractEvents,
  ThirdwebSDK,
} from '@thirdweb-dev/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const TransferNft = () => {
  const { quantity} =
    useSelector((state: RootState) => state.UI);

  const { singleListing } =
    useSelector((state: RootState) => state.Marketplace);

  const dispatch = useDispatch();

  const [rerenderTrigger, setRerenderTrigger] = useState(false);

  const { contract: marketplace, isLoading: loadingContract } = useContract(
    "0xA95122DdCDee7d1d67ee5d59D97B4940F1B4c59E",
    'marketplace-v3'
  );

  // Connect to NFT Collection smart contract
  const { contract: nftCollection } = useContract(
    singleListing?.assetContractAddress
  );

  const { data: directListing, isLoading: loadingDirect } =
    useValidDirectListings(marketplace, {
      tokenContract: singleListing?.assetContractAddress,
      tokenId: singleListing?.id,
    });

  const { data: transferEvents, isLoading: loadingTransferEvents } =
    useContractEvents(nftCollection, 'Transfer', {
      queryFilter: {
        filters: {
          tokenId: singleListing?.id,
        },
        order: 'desc',
      },
    });

  async function buyListing() {
    let txResult;

    if (directListing) {
      txResult = await marketplace?.directListings.buyFromListing(
        Number(singleListing?.id),
        quantity
      );
    } else {
      throw new Error('No valid listing found for this NFT');
    }
    return txResult;
  }

  const handleOnError = () => {
    const errorAlert = document.createElement('div');
    errorAlert.className =
      'bg-red-500 text-white p-6 rounded-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ';
    errorAlert.innerText = 'Transacción fallida';

    const container = document.getElementById('alert-container');
    container?.appendChild(errorAlert);

    setTimeout(() => {
      container?.removeChild(errorAlert);
    }, 3000);
  };

  const handleOnSuccess = async () => {
    const successAlert = document.createElement('div');
    successAlert.className =
      'bg-green-500 text-white p-6 rounded-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ';
    successAlert.innerText = 'Transacción exitosa';

    const container = document.getElementById('alert-container');
    container?.appendChild(successAlert);

    setTimeout(() => {
      container?.removeChild(successAlert);
      dispatch(onOpenCheckout(false));
    }, 3000);
  };

  return (
    <>
      <div id="alert-container"></div>
      <Web3Button
        className='bg-gold'
        contractAddress={"0xA95122DdCDee7d1d67ee5d59D97B4940F1B4c59E"}
        action={async () => await buyListing()}
        onSuccess={() => {
          handleOnSuccess();
        }}
        onError={() => {
          handleOnError();
        }}
      >
        Comprar
      </Web3Button>
    </>
  );
};
