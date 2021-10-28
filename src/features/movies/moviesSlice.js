import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import moviesApi from "../../common/apis/movies";
import {ApiKey} from "../../common/apis/apiKey";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const response = await moviesApi
        .get(`?apiKey=${ApiKey}&s=Harry&type=movie`)
    return response.data.Search;
});
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async () => {
    const response = await moviesApi
        .get(`?apiKey=${ApiKey}&s=Friends&type=series`)
    return response.data.Search;
});
export const fetchAsyncMovie = createAsyncThunk('movies/fetchAsyncMovie', async (id) => {
    console.log(id, 'ooooo');
    const response = await moviesApi
        .get(`?apiKey=${ApiKey}&i=${id}&Plot=short`)
    return response.data;
});
const initialState = {
    movies: {},
    shows: {},
    movie: {},
    errors:{},
};
const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeMovie: (state) => {
            state.movie = {};
        },
        setErrors: (state, {payload}) => {
            state.errors = payload;
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('fetchAsyncMovies Pending...');
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            return {...state, movies: payload}
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('fetchAsyncMovies Rejected!');
        },
        [fetchAsyncShows.fulfilled]: (state, {payload}) => {
            return {...state, shows: payload}
        },
        [fetchAsyncMovie.fulfilled]: (state, {payload}) => {
            return {...state, movie: payload}
        },
    }
});
export const {removeMovie, setErrors} = moviesSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getMovie = (state) => state.movies.movie
export const errors = (state) => state.movies.errors
export default moviesSlice.reducer;