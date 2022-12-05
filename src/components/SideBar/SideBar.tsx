import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks/hooks";
import { getMovies, setKeyword, setPage, setService } from "../../rtk/slices/movieSlice";
import { setHomePageActive, setSearchPageActive } from "../../rtk/slices/pagesSlice";

    const SideBar: React.FC = (props) => {

        const { searchKeyWord, searchType, searchService, searchCountry } = useAppSelector(state => state.movies)
        const dispatch = useAppDispatch()

        const user = {
            name: 'Igor',
        }
        const grayIconStyle = {filter: 'invert(98%) sepia(8%) saturate(636%) hue-rotate(202deg) brightness(117%) contrast(75%)'}
        const redIconStyle = {filter: 'invert(42%) sepia(32%) saturate(5440%) hue-rotate(334deg) brightness(94%) contrast(97%)'}
        const [hoverAccount, setHoverAccount] = useState(grayIconStyle)
        const [searchHover, setSearchHover] = useState(grayIconStyle)
        const [searchActive, setSearchActive] = useState('absolute hidden left-0 top-0 w-0 h-10 text-3xl text-black duration-300 rounded-md overflow-hidden flex flex-row gap-1')
        const [searchShowHide, setSearchShowHide] = useState("flex flex-row justify-start items-center w-full gap-5 cursor-pointer")
        const [homeHover, setHomeHover] = useState(grayIconStyle)
        const [genresHover, setGenresHover] = useState(grayIconStyle)
        const [favoritesHover, setFavoritesHover] = useState(grayIconStyle)
        const [settingsHover, setSettingsHover] = useState(grayIconStyle)
        const [logoutHover, setLogoutHover] = useState(grayIconStyle)
        const [sideBar, setSidebar] = useState('sticky left-0 top-0 w-0 m-0 p-0 h-full flex flex-col justify-between items-center duration-300 overflow-auto')
        const [sideBarState, setSideBarState] = useState(false)
        const [ham, setHam] = useState("fixed cursor-pointer top-0 left-0 translate-x-1/2 translate-y-full duration-300")
        const [ham1, setHam1] = useState("min-w-[33px] min-h-[4px] rounded-md bg-slate-400 block mb-[5px] duration-300")
        const [ham2, setHam2] = useState("min-w-[33px] min-h-[4px] rounded-md bg-slate-400 block mb-[5px] duration-300")
        const [ham3, setHam3] = useState("min-w-[33px] min-h-[4px] rounded-md bg-slate-400 block mb-[5px] duration-300")

        const clickHandler = () => {
            setSideBarState(prev => !prev)

            if (sideBarState) {

                setHam(prev => prev.replace('left-80', 'left-0'))
                setSidebar(prev => prev.replace('w-96', 'w-0').replace(' border-r-2', ''))
                setHam1("min-w-[33px] min-h-[4px] rounded-md bg-slate-400 block mb-[5px] duration-300")
                setHam2("min-w-[33px] min-h-[4px] rounded-md bg-slate-400 block mb-[5px] duration-300")
                setHam3("min-w-[33px] min-h-[4px] rounded-md bg-slate-400 block mb-[5px] duration-300")

            } else {

                setHam(prev => prev.replace('left-0', 'left-80'))
                setSidebar(prev => prev.replace('w-0', 'w-96') + ' border-r-2')
                setHam1(prev => prev + ' rotate-45')
                setHam2(prev => prev + ' opacity-0 scale-0')
                setHam3(prev => prev + ' -rotate-45 -translate-y-[17.2px]')

            }
        }

        const searchHideClick = () => {

            setSearchShowHide(prev => prev + ' hidden')
            setSearchActive(prev => prev.replace('w-0', 'w-full').replace('absolute', '').replace('hidden', ''))

        }

        const searchClick = () => {

            const params = {
                country: searchCountry,
                service: searchService,
                type: searchType,
                page: 1,
                keyword: searchKeyWord,
                output_language: 'en',
                language: 'en'
            }

            dispatch(setPage(1))
            dispatch(getMovies(params))
            dispatch(setSearchPageActive())

        }

        return (

            <>

                <div 
                onClick={clickHandler}
                className={ham}>

                    <span className={ham1}></span>
                    <span className={ham2}></span>
                    <span className={ham3}></span>

                </div>
                
                <div className={sideBar}>

                    <div className="flex flex-col justify-start items-center flex-nowrap w-full">

                        <p className="text-5xl w-full h-24 flex justify-center items-center text-red-500 font-bold">MOVIABLE</p>

                        <div className="flex flex-row justify-center items-center gap-5 flex-nowrap w-full">

                            <p className="text-4xl font-bold text-slate-400 whitespace-nowrap">Hello, {user.name}</p>

                            <img 
                            onMouseEnter={() => setHoverAccount(redIconStyle)}
                            onMouseLeave={() => setHoverAccount(grayIconStyle)}
                            style={hoverAccount}
                            className="w-10 h-10 cursor-pointer duration-300"
                            src={require('../../svg/account.svg').default}/>

                        </div>

                        <div className="relative flex flex-col justify-start items-center w-full mt-10 gap-10 flex-nowrap px-5">

                            <div
                            className={searchActive}>
                                <input
                                className=" w-3/4 rounded-md p-1"
                                value={searchKeyWord}
                                onChange={(e) => {
                                    dispatch(setKeyword(e.target.value))
                                }}
                                type="text" placeholder="Movie title . . ." ></input>
                                <img
                                onClick={() => searchClick()}
                                style={searchHover}
                                className="w-10 h-10 duration-300 p-1 cursor-pointer"
                                onMouseEnter={() => setSearchHover(redIconStyle)}
                                onMouseLeave={() => setSearchHover(grayIconStyle)}
                                src={require('../../svg/search.svg').default}/>
                            </div>

                            <div
                            onClick={() => searchHideClick()}
                            onMouseEnter={() => setSearchHover(redIconStyle)}
                            onMouseLeave={() => setSearchHover(grayIconStyle)}
                            className={searchShowHide}>


                                <img
                                style={searchHover}
                                className="w-10 h-10 duration-300"
                                src={require('../../svg/search.svg').default}/>

                                <p className="text-4xl font-bold text-slate-400">Search</p>

                            </div>

                            <div
                            onClick={() => dispatch(setHomePageActive())}
                            onMouseEnter={() => setHomeHover(redIconStyle)}
                            onMouseLeave={() => setHomeHover(grayIconStyle)} 
                            className="flex flex-row justify-start items-center w-full gap-5 cursor-pointer">

                                <img
                                style={homeHover}
                                className="w-10 h-10 duration-300"
                                src={require('../../svg/home.svg').default}/>

                                <p className="text-4xl font-bold text-slate-400">Home</p>

                            </div>

                            <div
                            onMouseEnter={() => setGenresHover(redIconStyle)}
                            onMouseLeave={() => setGenresHover(grayIconStyle)} 
                            className="flex flex-row justify-start items-center w-full gap-5 cursor-pointer">

                                <img
                                style={genresHover}
                                className="w-10 h-10 duration-300"
                                src={require('../../svg/layers.svg').default}/>

                                <p className="text-4xl font-bold text-slate-400">Genres</p>

                            </div>

                            <div
                            onMouseEnter={() => setFavoritesHover(redIconStyle)}
                            onMouseLeave={() => setFavoritesHover(grayIconStyle)} 
                            className="flex flex-row justify-start items-center w-full gap-5 cursor-pointer">

                                <img
                                style={favoritesHover}
                                className="w-10 h-10 duration-300"
                                src={require('../../svg/heart.svg').default}/>

                                <p className="text-4xl font-bold text-slate-400">Favorites</p>

                            </div>

                        </div>

                    </div>

                    <div className="flex flex-col justify-start items-center mb-10 w-full gap-5 px-5">
                        
                        <div
                        onMouseEnter={() => setSettingsHover(redIconStyle)}
                        onMouseLeave={() => setSettingsHover(grayIconStyle)} 
                        className="flex flex-row justify-start items-center w-full gap-5 cursor-pointer">

                            <img
                            style={settingsHover}
                            className="w-10 h-10 duration-300"
                            src={require('../../svg/settings.svg').default}/>

                            <p className="text-4xl font-bold text-slate-400">Settings</p>

                        </div>

                        <div
                        onMouseEnter={() => setLogoutHover(redIconStyle)}
                        onMouseLeave={() => setLogoutHover(grayIconStyle)} 
                        className="flex flex-row justify-start items-center w-full gap-5 cursor-pointer">

                            <img
                            style={logoutHover}
                            className="w-10 h-10 duration-300"
                            src={require('../../svg/logout.svg').default}/>

                            <p className="text-4xl font-bold text-slate-400">Logout</p>

                        </div>

                    </div>

                </div>

            </>


        )

    }

export default SideBar