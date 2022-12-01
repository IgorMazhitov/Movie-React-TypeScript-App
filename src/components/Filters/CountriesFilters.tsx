import React from "react";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks/hooks";
import { setCountry } from "../../rtk/slices/movieSlice";
import { countries, servicesAndCountries } from "../../data/data"

    const CountriesFilter: React.FC = (props: any) => {

        const dispatch = useAppDispatch()
        const { searchService } = useAppSelector(state => state.movies)

        const countriesArray = servicesAndCountries[searchService as keyof typeof servicesAndCountries]

        return (

            <select 
            className="rounded-md bg-gray-500 text-2xl px-2 font-bold"
            onChange={(e) => {dispatch(setCountry(e.target.value.toLowerCase()))}}
            name="countries" id="countries">

                <option value="0">Choose...</option>

                {countriesArray.map(el => 

                    <option value={el}>

                        {countries.map(el2 => el2.Code.toLowerCase() === el ? el2.Name : null)}

                    </option>
                    
                )}

            </select>

        )

    }

export default CountriesFilter