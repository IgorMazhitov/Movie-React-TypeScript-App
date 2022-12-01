import React, { useState } from "react";
import { useAppSelector } from "../../rtk/hooks/hooks";
import { IMovieState } from "../../rtk/slices/movieSlice";

export const MovieCard = (props: IMovieState) => {

    const { searchService, searchCountry } = useAppSelector(state => state.movies)
    const {title, year, posterURLs, overview, streamingInfo} = props
    const [cardStyle, setCardStyle] = useState("relative h-[320px] w-[550px] rounded-lg flex flex-row justify-center items-center overflow-hidden shadow-slate-400 ml-5 duration-300")
    const [buttonHover, setButtonHover] = useState("watch_button w-40 h-12 font-bold text-4xl text-gray-400 rounded-md duration-300") // styling for button hover 
    const [actionInfo, setActionInfo] = useState({filter: 'invert(99%) sepia(2%) saturate(2818%) hue-rotate(202deg) brightness(116%) contrast(75%)'})
    const [actionFav, setActionFav] = useState({filter: 'invert(99%) sepia(2%) saturate(2818%) hue-rotate(202deg) brightness(116%) contrast(75%)'})
    const [imageStyle, setImageStyle] = useState("z-0 card-img-top w-full h-full object-cover rounded-md duration-300 scale-100")

    console.log(streamingInfo, streamingInfo[searchService], searchCountry, searchService)
    const linkToWatch = streamingInfo[searchService][searchCountry].link 
    

    return (

            <div
            onMouseEnter={() => {
              setCardStyle(prev => prev + ' shadow-lg')
              setImageStyle(prev => prev.replace('scale-100', 'scale-110'))}
            }
            onMouseLeave={() => {
              setCardStyle(prev => prev.replace(' shadow-lg', ''))
              setImageStyle(prev => prev.replace('scale-110', 'scale-100'))
            }}
            /* card container */
            className={cardStyle}> 

              <div
              /* main card container with content */
              className="relative h-full w-full rounded-xl"> 

                <div
                /* black gradient for card */
                className="card_dark_gradient rounded-md absolute bottom-0 left-0 w-full h-full z-[1]"></div>

                <img
                /* card image (poster) */
                className={imageStyle} src={posterURLs.original} alt=""/> 

                <div
                /* title and buttons container */
                className="absolute bottom-0 w-full h-auto flex flex-col justify-start items-center z-[2]"> 

                  <p
                  /* card title */ 
                  className=" w-full h-auto text-left font-bold text-5xl text-gray-300 px-8">{title}</p>

                  <div
                  /* buttons flex container */
                  className="flex flex-row justify-between items-center w-full h-full my-5 px-8">

                    <a 
                    href={linkToWatch}
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                      <button 
                      className={buttonHover}
                      onMouseEnter={() => setButtonHover(prev => prev.replace('watch_button', 'watch_button_hover').replace('text-gray-400', 'text-gray-600'))}
                      onMouseLeave={() => setButtonHover(prev => prev.replace('watch_button_hover', 'watch_button').replace('text-gray-600', 'text-gray-400'))}
                      > WATCH 
                      </button>
                    </a>

                    <div className="flex flex-row justify-between items-center w-28 h-11">

                      <img
                      style={actionInfo}
                      onMouseEnter={() => setActionInfo({filter: 'invert(14%) sepia(57%) saturate(3942%) hue-rotate(226deg) brightness(97%) contrast(91%)'})}
                      onMouseLeave={() => setActionInfo({filter: 'invert(99%) sepia(2%) saturate(2818%) hue-rotate(202deg) brightness(116%) contrast(75%)'})}
                      className="iconInfo w-11 h-11 cursor-pointer duration-300" 
                      src={require('../../svg/info.svg').default}
                      alt=""
                      />

                      <img 
                      style={actionFav}
                      onMouseEnter={() => setActionFav({filter: 'invert(18%) sepia(56%) saturate(5481%) hue-rotate(352deg) brightness(79%) contrast(101%)'})}
                      onMouseLeave={() => setActionFav({filter: 'invert(99%) sepia(2%) saturate(2818%) hue-rotate(202deg) brightness(116%) contrast(75%)'})}
                      className="iconFav w-11 h-11 cursor-pointer duration-300" 
                      src={require('../../svg/heart.svg').default}
                      alt=""
                      />

                    </div>

                  </div>

                </div>

              </div>

            </div>
    )
}
