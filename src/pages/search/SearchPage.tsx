import React from "react";
import MoviesList from "../../components/MoviesList/MoviesList";
import { useAppSelector } from "../../rtk/hooks/hooks";

    const SearchPage: React.FC = (props: any) => {

        const { moviesArray, searchKeyWord } = useAppSelector(state => state.movies)

        return (

            <div
            className="ml-32 mt-20 w-full h-full">

                <div className="text-3xl font-bold text-gray-400 flex flex-row gap-5"> Search results:  <p className="bg-gray-500 text-gray-900 rounded-md font-bold text-2xl px-4 py-1 self-start cursor-pointer w-fit"> {searchKeyWord} </p> </div> 

                <MoviesList />

            </div>
            
        )

    }

export default SearchPage