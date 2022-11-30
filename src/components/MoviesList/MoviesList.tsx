import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks/hooks";
import { getMovies, setMovies, setPage, setService } from "../../rtk/slices/movieSlice";
import { data } from "../../tempData";
import { MovieCard } from "../movieCard/MovieCard";
import PagesSwitcher from "../MoviesButtons/PagesSwitcher";

    const MoviesList = (props: any) => {

        
        const dispatch = useAppDispatch()
        const {moviesArray, searchCountry, searchService, searchPage, searchType} = useAppSelector(state => state.movies)
        const [netflixHover, setNetflixHover] = useState("absolute bottom-0 h-1 w-full bg-gray-400 duration-300")
        const [disneyHover, setDisneyHover] = useState("absolute bottom-0 h-1 w-full bg-gray-400 duration-300")

        const netflixClickHandler = () => {

            const params = {
                country: searchCountry,
                service: 'netflix',
                type: searchType,
                page: 1,
                output_language: 'en',
                language: 'en'
            }

            dispatch(setPage(1))
            dispatch(setService('netflix'))
            dispatch(getMovies(params))

            setDisneyHover("absolute bottom-0 h-1 w-full bg-gray-400 duration-300")
            setNetflixHover(prev => prev.replace('h-1', 'h-1.5').replace('bg-red-500', 'bg-red-600'))

        }
        
        const DisneyClickHandler = () => {

            const params = {
                country: searchCountry,
                service: 'disney',
                type: searchType,
                page: 1,
                output_language: 'en',
                language: 'en'
            }

            dispatch(setPage(1))
            dispatch(setService('disney'))
            dispatch(getMovies(params))

            setNetflixHover("absolute bottom-0 h-1 w-full bg-gray-400 duration-300")
            setDisneyHover(prev => prev.replace('h-1', 'h-1.5').replace('bg-red-500', 'bg-red-600'))

        }
        
        return (

            <div
            className="ml-32">  
                
                <div
                className="flex flex-row justify-start items-center gap-10">

                    <div
                    onClick={() => netflixClickHandler()}
                    onMouseEnter={() => setNetflixHover(prev => prev.replace('bg-gray-400', 'bg-red-500'))}
                    onMouseLeave={() => setNetflixHover(prev => prev.replace('bg-red-500', 'bg-gray-400'))}
                    className="relative w-60 h-12 flex justify-center items-start cursor-pointer">
                        <p className="text-4xl font-bold text-gray-400">Netflix</p>
                        <div className={netflixHover}></div>
                    </div>

                    <div
                    onClick={() => DisneyClickHandler()}
                    onMouseEnter={() => setDisneyHover(prev => prev.replace('bg-gray-400', 'bg-red-500'))}
                    onMouseLeave={() => setDisneyHover(prev => prev.replace('bg-red-500', 'bg-gray-400'))}
                    className="relative w-60 h-12 flex justify-center items-start cursor-pointer">
                        <p className="text-4xl font-bold text-gray-400">Disney</p>
                        <div className={disneyHover}></div>
                    </div>

                </div>

                <div className="flex flex-row gap-20 mr-20 flex-wrap my-20 max-h-full overflow-x-scroll">
                    {moviesArray.map(movie => <MovieCard key={movie.tmdbID} {...movie}/>)}
                </div>
                    {moviesArray.length !== 0 && <PagesSwitcher />}
            </div>

        )

    }

export default MoviesList