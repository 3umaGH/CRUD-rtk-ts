import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { OFFLINE_DATA, ShipmentProps } from "../../constants";
import { fetchUsers } from "./thunks";

type StateProps = {
  shipments: ShipmentProps[];
  usingLocalData: boolean;
  loading: boolean;
  error: string;
};

const initialState: StateProps = {
  shipments: [],
  usingLocalData: false,
  loading: false,
  error: "",
};

export const ShipmentSlice = createSlice({
  name: "shipment",
  initialState,
  reducers: {
    updateShipment: (state, action) => {
      const { prevProps, newProps } = action.payload;
      const targetShipmentIndex = state.shipments.findIndex(
        (shipment) => shipment.orderNo === prevProps.orderNo
      );

      if (targetShipmentIndex !== 1)
        state.shipments[targetShipmentIndex] = {
          ...newProps,
        };
    },
    deleteShipment: (state, action) => {
      state.shipments = state.shipments.filter(
        (shipment) => shipment.orderNo !== action.payload
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<ShipmentProps[]>) => {
        state.shipments = action.payload;
        state.loading = false;
        state.error = "";
      }
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.shipments = OFFLINE_DATA;
      state.usingLocalData = true;
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export const { updateShipment, deleteShipment } = ShipmentSlice.actions;
export default ShipmentSlice.reducer;
