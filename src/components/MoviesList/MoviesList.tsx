import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks/hooks";
import { getMovies, setPage, setService } from "../../rtk/slices/movieSlice";
import { MovieCard } from "../movieCard/MovieCard";
import PagesSwitcher from "../MoviesButtons/PagesSwitcher";
import Filters from "../Filters/Filters";
import LoadingCard from "../movieCard/LoadingCard";

    const MoviesList = (props: any) => {
        
        const dispatch = useAppDispatch()
        const {moviesArray, searchCountry, searchType, loadingState, searchGenres} = useAppSelector(state => state.movies)
        const [netflixHover, setNetflixHover] = useState("absolute bottom-0 h-1 w-full bg-gray-400 duration-300")
        const [disneyHover, setDisneyHover] = useState("absolute bottom-0 h-1 w-full bg-gray-400 duration-300")
        const [hboHover, setHboHover] = useState("absolute bottom-0 h-1 w-full bg-gray-400 duration-300")

        console.log(moviesArray)

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
            setHboHover("absolute bottom-0 h-1 w-full bg-gray-400 duration-300")
            setNetflixHover(prev => prev.replace('h-1', 'h-1.5').replace('bg-red-500', 'bg-red-600'))

        }

        useEffect(() => {
            console.log(searchGenres)
        }, [searchGenres])
        
        const disneyClickHandler = () => {

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
            setHboHover("absolute bottom-0 h-1 w-full bg-gray-400 duration-300")
            setDisneyHover(prev => prev.replace('h-1', 'h-1.5').replace('bg-red-500', 'bg-red-600'))

        }

        const hboClickHandler = () => {

            const params = {
                country: searchCountry,
                service: 'hbo',
                type: searchType,
                page: 1,
                output_language: 'en',
                language: 'en'
            }

            dispatch(setPage(1))
            dispatch(setService('hbo'))
            dispatch(getMovies(params))

            setDisneyHover("absolute bottom-0 h-1 w-full bg-gray-400 duration-300")
            setNetflixHover("absolute bottom-0 h-1 w-full bg-gray-400 duration-300")
            setHboHover(prev => prev.replace('h-1', 'h-1.5').replace('bg-red-500', 'bg-red-600'))

        }
        
        return (
        
            <div
            className="ml-32">  
                
                <div
                className="flex flex-row justify-start items-start flex-wrap gap-10">

                    <div
                    onClick={() => netflixClickHandler()}
                    onMouseEnter={() => setNetflixHover(prev => prev.replace('bg-gray-400', 'bg-red-500'))}
                    onMouseLeave={() => setNetflixHover(prev => prev.replace('bg-red-500', 'bg-gray-400'))}
                    className="relative w-60 h-12 flex justify-center items-start cursor-pointer">
                        <p className="text-4xl font-bold text-gray-400">Netflix</p>
                        <div className={netflixHover}></div>
                    </div>

                    <div
                    onClick={() => disneyClickHandler()}
                    onMouseEnter={() => setDisneyHover(prev => prev.replace('bg-gray-400', 'bg-red-500'))}
                    onMouseLeave={() => setDisneyHover(prev => prev.replace('bg-red-500', 'bg-gray-400'))}
                    className="relative w-60 h-12 flex justify-center items-start cursor-pointer">
                        <p className="text-4xl font-bold text-gray-400">Disney</p>
                        <div className={disneyHover}></div>
                    </div>

                    <div
                    onClick={() => hboClickHandler()}
                    onMouseEnter={() => setHboHover(prev => prev.replace('bg-gray-400', 'bg-red-500'))}
                    onMouseLeave={() => setHboHover(prev => prev.replace('bg-red-500', 'bg-gray-400'))}
                    className="relative w-60 h-12 flex justify-center items-start cursor-pointer">
                        <p className="text-4xl font-bold text-gray-400">HBO</p>
                        <div className={hboHover}></div>
                    </div>

                    <Filters /> 
                    
                </div>

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