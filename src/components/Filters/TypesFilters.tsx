import React from "react";
import { typesArray } from "../../data/data";
import { useAppDispatch } from "../../rtk/hooks/hooks";
import { setType } from "../../rtk/slices/movieSlice";

    const TypesFilters: React.FC = (props: any) => {

        const dispatch = useAppDispatch()

        return (

            <>
            
                {typesArray.map(el => 

                    <div
                    key={el}
                    className="bg-gray-500 text-gray-900 font-black rounded-md px-4 py-1 cursor-pointer text-md flex justify-center items-center"
                    onClick={(e) => {

                        const target = e.target as HTMLElement

                        dispatch(setType(target.innerHTML.toLowerCase()))
                        

                    }}
                    >

                        {el.toUpperCase()}

                    </div>

                )}

            </>

        )

    }

export default TypesFilters