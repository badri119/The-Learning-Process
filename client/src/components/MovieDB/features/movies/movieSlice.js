import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Creating an async thunk for getting the data from the API for movies
export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (search) => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${search}&type=movie`
      );
      return response.data;
    } catch {
      console.error("Oops something went wrong!");
    }
  }
);
//Creating an async thunk for getting the data from the API for shows
export const fetchShows = createAsyncThunk(
  "movies/fetchShows",
  async (search) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${search}&type=series`
      );
      return response.data;
    } catch {
      console.error("Oops something went wrong!");
    }
  }
);

//Fetching Movies and show details:
export const showDetails = createAsyncThunk("movies/details", async (id) => {
  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}&Plot=full`
    );
    return response.data;
  } catch {
    console.error("Oops something went wrong!");
  }
});

const initialState = {
  movies: {}, //Initial state for movies in object form
  shows: {}, //Initial state for shows in object form
  selectedMovieorShow: {}, // Initial state for selecting movie or show to show details
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieorShow: (state) => {
      state.selectedMovieorShow = {};
    },
  },
  extraReducers: (builder) => {
    // Extra reducers using async thunk for movies
    builder
      .addCase(fetchMovies.pending, (state) => {
        // console.log("Pending");
      })
      .addCase(fetchMovies.fulfilled, (state, { payload }) => {
        // console.log("Fetch was successful");
        state.movies = payload;
      })
      .addCase(fetchMovies.rejected, (state) => {
        // console.log("Rejected");
      })
      .addCase(fetchShows.fulfilled, (state, { payload }) => {
        // console.log("Fetch was successful");
        state.shows = payload;
      })
      .addCase(showDetails.fulfilled, (state, { payload }) => {
        // console.log("Fetch was successful");
        state.selectedMovieorShow = payload;
      });
  },
});

export const { removeSelectedMovieorShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieorShow = (state) =>
  state.movies.selectedMovieorShow;
export default movieSlice.reducer;
