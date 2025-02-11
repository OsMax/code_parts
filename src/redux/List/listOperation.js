import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASEURL = "https://code-parts-server.onrender.com";

axios.defaults.baseURL = BASEURL;

export const getList = createAsyncThunk("list/getList", async () => {
  try {
    const { data } = await axios.get("/api/list");
    // console.log(data);

    return { data };
  } catch (error) {
    console.log(error);
  }
});
