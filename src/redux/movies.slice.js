import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: { moviesData: [] },
  reducers: {
    getMoviesSucces: (state, { payload }) => {
      state.moviesData = payload;
    },
  },
});
export const { getMoviesSucces } = moviesSlice.actions;
export default moviesSlice.reducer;
