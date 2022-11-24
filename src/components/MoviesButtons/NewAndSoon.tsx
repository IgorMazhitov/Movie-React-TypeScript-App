import React, { useState } from "react";
import { useAppDispatch } from "../../rtk/hooks/hooks";
import { setMovies } from "../../rtk/slices/movieSlice";

    const NewAndSoon: React.FC = (props) => {

        const dispatch = useAppDispatch()

        const [newHover, setNewHover] = useState("absolute bottom-0 h-1 w-full bg-gray-400 duration-300")
        const [soonHover, setSoonHover] = useState("absolute bottom-0 h-1 w-full bg-gray-400 duration-300")

        const newClickHandler = () => {
            dispatch(setMovies([1, 2, 3, 4, 5, 6, 7]))
        }
        const soonClickHandler = () => {
            dispatch(setMovies([1, 2, 3, 4]))
        }

        return (

            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row justify-between items-center gap-5 w-fit">
                <div
                onClick={() => newClickHandler()}
                onMouseEnter={() => setNewHover(prev => prev.replace('bg-gray-400', 'bg-red-500'))}
                onMouseLeave={() => setNewHover(prev => prev.replace('bg-red-500', 'bg-gray-400'))}
                className="relative w-60 h-12 flex justify-center items-start cursor-pointer">
                    <p className="text-4xl font-bold text-gray-400">New Releases</p>
                    <div className={newHover}></div>
                </div>
                <div
                onClick={() => soonClickHandler()}
                onMouseEnter={() => setSoonHover(prev => prev.replace('bg-gray-400', 'bg-red-500'))}
                onMouseLeave={() => setSoonHover(prev => prev.replace('bg-red-500', 'bg-gray-400'))}
                className="relative w-60 h-12 flex justify-center items-start cursor-pointer">
                    <p className="text-4xl font-bold text-gray-400">Coming Soon</p>
                    <div className={soonHover}></div>
                </div>
            </div>

        )

    }

export default NewAndSoon