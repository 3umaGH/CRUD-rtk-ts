import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get(import.meta.env.VITE_API_ENDPOINT)
    .then((response) => response.data);
});
