import React, { useEffect, useState } from "react";
import { genresArray, getGenresFromNumber, getGenresFromString } from "../../apiFunctions/genresChecker";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks/hooks";
import { getMovies, setFilterGenresState, setFilterState, setGenre, setMovies, setPage, setService } from "../../rtk/slices/movieSlice";
import { data } from "../../tempData";
import { MovieCard } from "../movieCard/MovieCard";
import PagesSwitcher from "../MoviesButtons/PagesSwitcher";

    const MoviesList = (props: any) => {

        
        const dispatch = useAppDispatch()
        const {moviesArray, searchCountry, searchService, searchPage, searchType, loadingState, filterState, genresState, searchGenres} = useAppSelector(state => state.movies)
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

        useEffect(() => {
            console.log(searchGenres)
        }, [searchGenres])
        
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

                    <div 
                    onClick={() => dispatch(setFilterState(!filterState))}
                    className="text-4xl font-bold text-gray-900 ml-5">
                        <p className="w-auto px-4 py-1 rounded-md bg-gray-500 cursor-pointer">filters</p>
                    </div>

                </div>

                {
                    filterState 
                    && 
                    <div className="flex flex-col gap-10 justify-start items-start w-auto h-72 overflow-hidden flex-wrap mt-10">

                            <div className="flex flex-row gap-10 justify-start items-center">

                                <div 
                                onClick={() => dispatch(setFilterGenresState(!genresState))}
                                className="bg-gray-500 text-gray-900 rounded-md font-bold text-2xl px-4 py-1 self-start cursor-pointer">
                                    Genre{searchGenres !== undefined ? `: ${getGenresFromNumber(searchGenres)}` : 's' }
                                </div>

                                <div>fdsgdsfg</div>

                            </div>

                            <div className="flex flex-row gap-10 w-auto h-10 flex-wrap">
                                {
                                    genresState 
                                    && 
                                    genresArray.map(el => 
                                    <div 
                                    onClick={(e) => {
                                        const target = e.target as HTMLElement
                                        if (searchGenres == getGenresFromString(target.innerHTML)) {
                                            dispatch(setGenre(undefined))
                                        }
                                        dispatch(setGenre(getGenresFromString(target.innerHTML)))
                                        dispatch(setFilterGenresState(!genresState))
                                    }} 
                                    className="bg-gray-500 text-gray-900 font-black rounded-md px-4 py-1 cursor-pointer"
                                    >
                                        {el}
                                    </div>)

                                }  
                            </div>

                    </div>
                        
                }

                {loadingState && <p>loading</p>}

                {
                
                    !loadingState 
                    && 
                    <div className="flex flex-row gap-20 mr-20 py-5 flex-wrap my-20 max-h-full overflow-x-scroll">

                        {moviesArray.map(movie => <MovieCard key={movie.tmdbID} {...movie}/>)}

                    </div>

                }
                
                {moviesArray.length !== 0 && !loadingState && <PagesSwitcher />}

            </div>

        )

    }

export default MoviesList