import React, { useState } from "react";
import { getGenresFromNumber } from "../../utils/auxFunctions";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks/hooks";
import GenresFilters from "./GenresFilters";
import CountriesFilter from "./CountriesFilters";
import ServicesFilters from "./ServicesFilters";

    const Filters: React.FC = (props) => {

        const {searchGenres, searchCountry, searchService} = useAppSelector(state => state.movies)
        const [filtersState, setFiltersState] = useState(false)
        const [genresState, setGenresState] = useState(false)
        const [serviceState, setServiceState] = useState(false)
        const [countriesState, setCountiresState] = useState(false)
        const [filtersStyle, setFiltersStyle] = useState("flex flex-col gap-10 justify-start items-start w-auto h-72 overflow-hidden flex-wrap mr-10")

        const clickHandler = () => {

            if (filtersState) {

                setGenresState(false)
                setServiceState(false)
                setCountiresState(false)
                setFiltersState(false)
                setFiltersStyle(prev => prev.replaceAll('h-72', 'h-0'))

            } else {

                setFiltersState(true)
                setFiltersStyle(prev => prev.replaceAll('h-0', 'h-72'))

            }

        }

        const genresClick = () => {

            setGenresState(!genresState)
            setServiceState(false)
            setCountiresState(false)

        }

        const servicesClick = () => {

            setServiceState(!serviceState)
            setCountiresState(false)
            setGenresState(false)

        }

        const countriesClick = () => {

            setCountiresState(!countriesState)
            setGenresState(false)
            setServiceState(false)

        }

        return (

            <>
                
                <div
                /* filters button to show all avaliable filters */
                onClick={() => clickHandler()}
                className="text-4xl font-bold text-gray-900 ml-5"
                >

                    <p className="w-auto px-4 py-1 rounded-md bg-gray-500 cursor-pointer">filters</p>

                </div>

                {

                    filtersState

                    &&

                    <div className={filtersStyle}>

                        <div className="flex flex-row gap-10 justify-start items-center">

                            <div
                            onClick={() => genresClick()}
                            className="bg-gray-500 text-gray-900 rounded-md font-bold text-2xl px-4 py-1 self-start cursor-pointer">
                                Genre{searchGenres !== undefined ? `: ${getGenresFromNumber(searchGenres)}` : 's' }
                            </div>

                            <div
                            onClick={() => servicesClick()}
                            className="bg-gray-500 text-gray-900 rounded-md font-bold text-2xl px-4 py-1 self-start cursor-pointer"
                            >
                                Service: {searchService.toUpperCase()}
                            </div>

                            <div
                            onClick={() => countriesClick()}
                            className="bg-gray-500 text-gray-900 rounded-md font-bold text-2xl px-4 py-1 self-start cursor-pointer"
                            >
                                Country: {searchCountry.toUpperCase()}
                            </div>

                        </div>

                        <div className="flex flex-row gap-10 w-auto h-10 flex-wrap">

                            { genresState && <GenresFilters /> }

                            { countriesState && <CountriesFilter /> }

                            { serviceState && <ServicesFilters /> }

                        </div>
                    </div>

                }

            </>


        )

    }

export default Filters