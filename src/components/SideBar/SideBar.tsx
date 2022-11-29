import React, { useState } from "react";

    const SideBar: React.FC = (props) => {

        const user = {
            name: 'Igor',
        }
        const grayIconStyle = {filter: 'invert(98%) sepia(8%) saturate(636%) hue-rotate(202deg) brightness(117%) contrast(75%)'}
        const redIconStyle = {filter: 'invert(42%) sepia(32%) saturate(5440%) hue-rotate(334deg) brightness(94%) contrast(97%)'}
        const [hoverAccount, setHoverAccount] = useState(grayIconStyle)
        const [searchHover, setSearchHover] = useState(grayIconStyle)
        const [homeHover, setHomeHover] = useState(grayIconStyle)
        const [genresHover, setGenresHover] = useState(grayIconStyle)
        const [favoritesHover, setFavoritesHover] = useState(grayIconStyle)
        const [settingsHover, setSettingsHover] = useState(grayIconStyle)
        const [logoutHover, setLogoutHover] = useState(grayIconStyle)
        const [sideBar, setSidebar] = useState('sticky left-0 top-0 w-0 h-full flex flex-col justify-between items-center duration-300 overflow-hidden')
        const [sideBarState, setSideBarState] = useState(false)
        const [ham, setHam] = useState("cursor-pointer absolute top-0 left-0 translate-x-1/2 translate-y-full duration-300")
        const [ham1, setHam1] = useState("min-w-[33px] min-h-[4px] rounded-md bg-slate-400 block mb-[5px] duration-300")
        const [ham2, setHam2] = useState("min-w-[33px] min-h-[4px] rounded-md bg-slate-400 block mb-[5px] duration-300")
        const [ham3, setHam3] = useState("min-w-[33px] min-h-[4px] rounded-md bg-slate-400 block mb-[5px] duration-300")

        const clickHandler = () => {
            setSideBarState(prev => !prev)

            if (sideBarState) {

                setHam(prev => prev.replace('left-72', 'left-0'))
                setSidebar(prev => prev.replace('w-72', 'w-0').replace(' border-r-2', ''))
                setHam1("min-w-[33px] min-h-[4px] rounded-md bg-slate-400 block mb-[5px] duration-300")
                setHam2("min-w-[33px] min-h-[4px] rounded-md bg-slate-400 block mb-[5px] duration-300")
                setHam3("min-w-[33px] min-h-[4px] rounded-md bg-slate-400 block mb-[5px] duration-300")

            } else {

                setHam(prev => prev.replace('left-0', 'left-72'))
                setSidebar(prev => prev.replace('w-0', 'w-72') + ' border-r-2')
                setHam1(prev => prev + ' rotate-45')
                setHam2(prev => prev + ' opacity-0 scale-0')
                setHam3(prev => prev + ' -rotate-45 -translate-y-[17.2px]')

            }
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

                    <div className="flex flex-col justify-start items-center">

                        <p className="text-5xl w-72 h-24 flex justify-center items-center text-red-500 font-bold">MOVIABLE</p>

                        <div className="flex flex-row justify-center items-center gap-5">

                            <p className="text-4xl font-bold text-slate-400">Hello, {user.name}</p>

                            <img 
                            onMouseEnter={() => setHoverAccount(redIconStyle)}
                            onMouseLeave={() => setHoverAccount(grayIconStyle)}
                            style={hoverAccount}
                            className="w-10 h-10 cursor-pointer duration-300"
                            src={require('../../svg/account.svg').default}/>

                        </div>

                        <div className="flex flex-col justify-start items-center w-full mt-10 gap-10 pl-5">

                            <div
                            onMouseEnter={() => setSearchHover(redIconStyle)}
                            onMouseLeave={() => setSearchHover(grayIconStyle)}
                            className="flex flex-row justify-start items-center w-full gap-5 cursor-pointer pl-5">

                                <img
                                style={searchHover}
                                className="w-10 h-10 duration-300"
                                src={require('../../svg/search.svg').default}/>

                                <p className="text-4xl font-bold text-slate-400">Search</p>

                            </div>

                            <div
                            onMouseEnter={() => setHomeHover(redIconStyle)}
                            onMouseLeave={() => setHomeHover(grayIconStyle)} 
                            className="flex flex-row justify-start items-center w-full gap-5 cursor-pointer pl-5">

                                <img
                                style={homeHover}
                                className="w-10 h-10 duration-300"
                                src={require('../../svg/home.svg').default}/>

                                <p className="text-4xl font-bold text-slate-400">Home</p>

                            </div>

                            <div
                            onMouseEnter={() => setGenresHover(redIconStyle)}
                            onMouseLeave={() => setGenresHover(grayIconStyle)} 
                            className="flex flex-row justify-start items-center w-full gap-5 cursor-pointer pl-5">

                                <img
                                style={genresHover}
                                className="w-10 h-10 duration-300"
                                src={require('../../svg/layers.svg').default}/>

                                <p className="text-4xl font-bold text-slate-400">Genres</p>

                            </div>

                            <div
                            onMouseEnter={() => setFavoritesHover(redIconStyle)}
                            onMouseLeave={() => setFavoritesHover(grayIconStyle)} 
                            className="flex flex-row justify-start items-center w-full gap-5 cursor-pointer pl-5">

                                <img
                                style={favoritesHover}
                                className="w-10 h-10 duration-300"
                                src={require('../../svg/heart.svg').default}/>

                                <p className="text-4xl font-bold text-slate-400">Favorites</p>

                            </div>

                        </div>

                    </div>

                    <div className="flex flex-col justify-start items-center mb-10 pl-5 w-full gap-5">
                        
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