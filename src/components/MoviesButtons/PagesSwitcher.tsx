import React from "react";
import { useAppSelector } from "../../rtk/hooks/hooks";

    const PagesSwitcher: React.FC = (props) => {

        const {page} = useAppSelector(state => state.movies)

        return (

            <div className="absolute flex flex-row justify-center items-center bottom-0 -translate-y-1/2 left-1/2 -translate-x-1/2 ">
                <div>left</div>
                <p>{page}</p>
                <div>right</div>

            </div>

        )

    }

export default PagesSwitcher