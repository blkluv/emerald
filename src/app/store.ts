import { configureStore } from '@reduxjs/toolkit';
import { uiSlice } from './features/ui.slice';
import { MarketplaceSlice } from './features/marketplaceMachine';

const store = configureStore({
  reducer: {
    UI: uiSlice.reducer,
    Marketplace : MarketplaceSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
