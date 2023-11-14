import { configureStore } from "@reduxjs/toolkit";
import shipmentReducer from "../features/Shipment/ShipmentSlice";
import shipmentDetailsReducer from "../features/ShipmentDetails/ShipmentDetailsSlice";

export const store = configureStore({
  reducer: {
    shipment: shipmentReducer,
    shipmentDetails: shipmentDetailsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
