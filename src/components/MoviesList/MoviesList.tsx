import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks/hooks";
import { getMovies, setPage, setService } from "../../rtk/slices/movieSlice";
import { MovieCard } from "../movieCard/MovieCard";
import PagesSwitcher from "../MoviesButtons/PagesSwitcher";
import Filters from "../Filters/Filters";
import LoadingCard from "../movieCard/LoadingCard";

    const MoviesList = (props: any) => {
        
        const {moviesArray, loadingState} = useAppSelector(state => state.movies)
        
        return (

            <div className="w-full h-auto">

                {
                    /* loading cards */ 
                    loadingState 
                    && 
                    <div className="flex flex-row gap-20 mr-20 py-5 flex-wrap my-20 h-full overflow-x-scroll">

                        {loadingState && moviesArray.map(movie => <LoadingCard key={movie.imdbID} />)}

                    </div>

                }


                {
                
                    /* loaded cards */ 
                    !loadingState 
                    && 
                    <div className="flex flex-row gap-20 mr-20 py-5 flex-wrap my-20 h-full overflow-x-scroll">

                        {moviesArray.map(movie => <MovieCard key={movie.tmdbID} {...movie}/>)}

                    </div>

                }
                
                {moviesArray.length !== 0 && !loadingState && <PagesSwitcher />}

            </div>

        )

    }

export default MoviesList