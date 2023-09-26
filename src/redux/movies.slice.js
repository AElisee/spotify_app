import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
  moviesData: [],
  moviesStatus: STATUS.IDLE,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, (state, action) => {
        state.moviesStatus = STATUS.LOADING;
      })

      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        state.moviesData = payload;
        state.moviesStatus = STATUS.SUCCEEDED;
      })

      .addCase(fetchAsyncMovies.rejected, (state, action) => {
        state.moviesStatus = STATUS.FAILED;
      });
  },
});

export const fetchAsyncMovies = createAsyncThunk("movies/fetch", async () => {
  const url =
    "https://spotify23.p.rapidapi.com/search/?q=q&type=multi&offset=0&limit=50&numberOfTopResults=5";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9a36f48c15msh5ab07cd746f0d3ep1abc98jsn80b7c8e58d15",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
});

export const getAllMovies = (state) => state.movies.moviesData;
export const getMoviesStatus = (state) => state.movies.moviesStatus;
export default moviesSlice.reducer;
