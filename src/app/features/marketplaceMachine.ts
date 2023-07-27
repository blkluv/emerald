import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DirectListingV3 } from '@thirdweb-dev/sdk';

export interface MarketplaceContext {
  step: stepEnum;
  nft: any[];
  listings : any[];
  singleListing : DirectListingV3 | null;
  quantityOwned : number;
  quantityAvailable : number;
}

export enum stepEnum {
  START = 'START',
  CHECKOUT = 'CHECKOUT',
  PURCHASED = 'PURCHASED',
  CANCELED = 'CANCELED'
}

const initialState: MarketplaceContext = {
  step: stepEnum.START,
  nft: [],
  listings : [],
  singleListing : null ,
  quantityOwned : 0,
  quantityAvailable : 0,
};

export const MarketplaceSlice = createSlice({
  name: 'Emerald Marketplace',
  initialState,
  reducers: {
    onChangeStep: (state, action: PayloadAction<stepEnum>) => {
      state.step = action.payload;
    },
    onChangeListing : ( state, action : PayloadAction<any[]>) => {
      state.listings = action.payload;
    },
    onChangeSingleListing : ( state, action : PayloadAction<DirectListingV3>) => {
      state.singleListing = action.payload;
    },
    onChangeQuantityOwned : ( state, action : PayloadAction<number>) => {
      state.quantityOwned = action.payload;
    },
    onChangeQuantityAvailable : ( state, action : PayloadAction<number>) => {
      state.quantityAvailable = action.payload;
    },
    onChangeNft: (state, action: PayloadAction<any[]>) => {
      state.nft = action.payload;
    },
  },
});

export const { 
  onChangeStep, 
  onChangeNft, 
  onChangeListing, 
  onChangeSingleListing, 
  onChangeQuantityOwned,
  onChangeQuantityAvailable
} = MarketplaceSlice.actions;
