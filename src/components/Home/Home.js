import React, {useEffect} from 'react';
import Movies from "../Movies/Movies";
import {fetchAsyncMovies, fetchAsyncShows, fetchAsyncMovie} from "../../features/movies/moviesSlice";
import {useDispatch} from "react-redux";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
         dispatch(fetchAsyncMovies())
        dispatch(fetchAsyncShows())
    }, [dispatch]);

    return (
        <div>
            <Movies/>
        </div>
    );
};

export default Home;
