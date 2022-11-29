import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks/hooks";
import { setMovies } from "../../rtk/slices/movieSlice";
import { MovieCard } from "../movieCard/MovieCard";
import PagesSwitcher from "../MoviesButtons/PagesSwitcher";

    interface IMovieListProps {
        newList?: boolean
        soonList?: boolean
    }

    const MoviesList = (props: IMovieListProps) => {

        const dispatch = useAppDispatch()
        const {moviesArray} = useAppSelector(state => state.movies)
        const [newHover, setNewHover] = useState("absolute bottom-0 h-1 w-full bg-gray-400 duration-300")
        const [soonHover, setSoonHover] = useState("absolute bottom-0 h-1 w-full bg-gray-400 duration-300")
        const {newList, soonList} = props

        const newClickHandler = () => {
            dispatch(setMovies([1, 2, 3, 4, 5, 6, 7]))
        }
        
        const soonClickHandler = () => {
            dispatch(setMovies([1, 2, 3, 4]))
        }
        
        return (

            <div>  

                {newList && <div
                onClick={() => newClickHandler()}
                onMouseEnter={() => setNewHover(prev => prev.replace('bg-gray-400', 'bg-red-500'))}
                onMouseLeave={() => setNewHover(prev => prev.replace('bg-red-500', 'bg-gray-400'))}
                className="relative w-60 h-12 flex justify-center items-start cursor-pointer">
                    <p className="text-4xl font-bold text-gray-400">New Releases</p>
                    <div className={newHover}></div>
                </div>}

                {soonList && <div
                onClick={() => soonClickHandler()}
                onMouseEnter={() => setSoonHover(prev => prev.replace('bg-gray-400', 'bg-red-500'))}
                onMouseLeave={() => setSoonHover(prev => prev.replace('bg-red-500', 'bg-gray-400'))}
                className="relative w-60 h-12 flex justify-center items-start cursor-pointer">
                    <p className="text-4xl font-bold text-gray-400">Coming Soon</p>
                    <div className={soonHover}></div>
                </div>}

                <div className="flex flex-row gap-20 mx-20 flex-wrap mb-20 max-h-full overflow-x-scroll">
                    {moviesArray.map(movie => <MovieCard key={movie} {...movie}/>)}
                    <PagesSwitcher />
                </div>
            </div>

        )

    }

export default MoviesList