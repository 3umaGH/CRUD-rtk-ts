import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ShipmentProps } from "../constants";
import axios from "axios";

type StateProps = {
  shipments: ShipmentProps[];
  loading: boolean;
  error: string;
};

const initialState: StateProps = {
  shipments: [],
  loading: false,
  error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get(import.meta.env.VITE_API_ENDPOINT)
    .then((response) => response.data.map((order: ShipmentProps) => order));
});

export const ShipmentSlice = createSlice({
  name: "shipment",
  initialState,
  reducers: {
    updateShipment: (state, action) => {},
    deleteShipment: (state, action) => {},
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<ShipmentProps[]>) => {
      state.loading = false;
      state.shipments = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.shipments = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export const { updateShipment, deleteShipment } = ShipmentSlice.actions;
export default ShipmentSlice.reducer;
