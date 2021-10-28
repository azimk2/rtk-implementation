import React from 'react';
import {getAllMovies, getAllShows} from "../../features/movies/moviesSlice";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";


const Movies = () => {
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    return (
        <div>
            { movies.length > 0 ?
                Object.entries(movies).map(([key, value]) => console.log(key, value)) : ''
            }
            {
                shows.length > 0 ?
                    Object.entries(shows).map(([key, value]) => console.log(key, value)) : ''
            }
            <Link to={'/movie/tt1201607'}>
                <h4>Movie</h4>
            </Link>
        </div>
    );
};

export default Movies;
