import React from "react";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks/hooks";
import { getMovies, setLoadingState, setPage } from "../../rtk/slices/movieSlice";

    const PagesSwitcher: React.FC = (props) => {

        const dispatch = useAppDispatch()
        const {searchPage, maxPage, searchCountry, searchType, searchService} = useAppSelector(state => state.movies)
        const graySvgFilter = {filter: 'invert(99%) sepia(2%) saturate(2818%) hue-rotate(202deg) brightness(116%) contrast(75%)'}

        const pageDecr = () => {
            if (searchPage - 1 <= 0) {

            } else {

                const params = {
                    country: searchCountry,
                    service: searchService,
                    type: searchType,
                    page: searchPage - 1,
                    output_language: 'en',
                    language: 'en'
                }

                dispatch(setLoadingState(true))
                dispatch(setPage(searchPage - 1))
                dispatch(getMovies(params))
            }
        }

        const pageIncr = () => {
            if (searchPage + 1 > maxPage!) {

            } else {

                const params = {
                    country: searchCountry,
                    service: searchService,
                    type: searchType,
                    page: searchPage + 1,
                    output_language: 'en',
                    language: 'en'
                }
                
                dispatch(setLoadingState(true))
                dispatch(setPage(searchPage + 1))
                dispatch(getMovies(params))
            }
        }

        return (

            <div className="flex flex-row gap-3 justify-center items-center mb-10 text-gray-400">

                <img
                onClick={() => pageDecr()}
                src={require('../../svg/arrow.svg').default}
                className="arrow_page w-7 h-7 rotate-180 cursor-pointer"
                style={graySvgFilter}
                ></img>
                    <p className="text-4xl">{searchPage}/{maxPage}</p>
                <img
                onClick={() => pageIncr()}
                src={require('../../svg/arrow.svg').default}
                className="arrow_page w-7 h-7 cursor-pointer"
                style={graySvgFilter}
                ></img>

            </div>

        )

    }

export default PagesSwitcher