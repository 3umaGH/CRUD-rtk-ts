import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  currentOrder: "",
};

export const ShipmentDetailsSlice = createSlice({
  name: "shipmentDetails",
  initialState,
  reducers: {
    openShipmentDetails: (state, action) => {
      state.isOpen = true;
      state.currentOrder = action.payload;
    },

    closeShipmentDetails: (state) => {
      state.isOpen = false;
      state.currentOrder = "";
    },
  },
});

export const { openShipmentDetails, closeShipmentDetails } =
  ShipmentDetailsSlice.actions;
export default ShipmentDetailsSlice.reducer;
