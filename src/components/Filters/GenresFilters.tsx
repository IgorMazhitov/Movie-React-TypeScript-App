import React from "react";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks/hooks";
import { setGenre } from "../../rtk/slices/movieSlice";
import { getGenresFromString } from "../../utils/auxFunctions";
import { genresArray } from "../../data/data"


    const GenresFilters: React.FC = (props: any) => {

        const dispatch = useAppDispatch()
        const {searchGenres} = useAppSelector(state => state.movies)

        return (

            <>

                { genresArray.map(el => 
                    
                    <div
                    key={el} 
                    className="bg-gray-500 text-gray-900 font-black rounded-md px-4 py-1 cursor-pointer text-md"
                    onClick={(e) => {

                        const target = e.target as HTMLElement

                        if (searchGenres === getGenresFromString(target.innerHTML)) {dispatch(setGenre(undefined))}

                        dispatch(setGenre(getGenresFromString(target.innerHTML)))

                    }} 
                    >

                        {el}

                    </div>)
                    
                }

            </>

        )

    }

export default GenresFilters