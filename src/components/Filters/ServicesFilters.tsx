import React from "react";
import { services } from "../../data/data";
import { useAppDispatch } from "../../rtk/hooks/hooks";
import { setService } from "../../rtk/slices/movieSlice";

    const ServicesFilters: React.FC = (props: any) => {

        const dispatch = useAppDispatch()

        return (

            <>

                {
                    
                    services.map(el => 

                        <div
                        onClick={(e) => {

                            const target = e.target as HTMLElement

                            dispatch(setService(target.innerHTML.toLowerCase()))

                        }}
                        key={el} 
                        className="bg-gray-500 text-gray-900 font-black rounded-md px-4 py-1 cursor-pointer text-md"
                        >

                            {el.toUpperCase()}

                        </div>

                    )
                    
                }

            </>

        )

    }

export default ServicesFilters