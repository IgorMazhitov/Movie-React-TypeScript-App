import React from "react";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks/hooks";
import { getMovies, setPage } from "../../rtk/slices/movieSlice";

    const PagesSwitcher: React.FC = (props) => {

        const dispatch = useAppDispatch()
        const {searchPage, maxPage, searchCountry, searchType} = useAppSelector(state => state.movies)

        const pageDecr = () => {
            if (searchPage - 1 <= 0) {

            } else {

                const params = {
                    country: searchCountry,
                    service: 'disney',
                    type: searchType,
                    page: searchPage - 1,
                    output_language: 'en',
                    language: 'en'
                }

                dispatch(setPage(searchPage - 1))
                dispatch(getMovies(params))
            }
        }

        const pageIncr = () => {
            if (searchPage + 1 > maxPage!) {

            } else {

                const params = {
                    country: searchCountry,
                    service: 'disney',
                    type: searchType,
                    page: searchPage + 1,
                    output_language: 'en',
                    language: 'en'
                }

                dispatch(setPage(searchPage + 1))
                dispatch(getMovies(params))
            }
        }

        return (

            <div className="flex flex-row gap-3 justify-center items-center mb-10 text-gray-400">

                <div
                onClick={() => pageDecr()}
                className="text-3xl">left</div>
                    <p className="text-4xl">{searchPage}</p>
                <div
                onClick={() => pageIncr()}
                className="text-3xl">right</div>

            </div>

        )

    }

export default PagesSwitcher