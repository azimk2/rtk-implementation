import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAsyncMovie, getMovie, removeMovie} from "../../features/movies/moviesSlice";
import {useParams} from "react-router-dom/cjs/react-router-dom";
import {Link} from "react-router-dom";

const Movie = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const data = useSelector(getMovie);
    useEffect(() => {
        dispatch(fetchAsyncMovie(id))
        return () => {
            dispatch(removeMovie())
        }
    }, [dispatch, id]);
    return (
        <div>
            <Link to={'/movies'}>
                <h3>Movies</h3>
            </Link>

        </div>
    );
};

export default Movie;
