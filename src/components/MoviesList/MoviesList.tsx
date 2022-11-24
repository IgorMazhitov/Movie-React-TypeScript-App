import React from "react";
import { useAppSelector } from "../../rtk/hooks/hooks";
import { MovieCard } from "../movieCard/MovieCard";
import PagesSwitcher from "../MoviesButtons/PagesSwitcher";

    const MoviesList: React.FC = (props) => {

        const {moviesArray} = useAppSelector(state => state.movies)

        
        return (

            <div className="flex flex-row gap-20 mx-20 flex-wrap absolute h-fit bottom-1/2 translate-y-full mb-20">
                {moviesArray.map(movie => <MovieCard key={movie} {...movie}/>)}
                <PagesSwitcher />
            </div>

        )

    }

export default MoviesList