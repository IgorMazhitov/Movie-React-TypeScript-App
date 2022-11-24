import React, { useState } from "react";

export const MovieCard: React.FC = (props) => {

    const [hoverGlow, setHoverGlow] = useState('card_box absolute duration-300 opacity-0 h-full w-full rounded-md') // styling for hover outer glow effect
    const [actionInfo, setActionInfo] = useState({filter: 'invert(99%) sepia(2%) saturate(2818%) hue-rotate(202deg) brightness(116%) contrast(75%)'})
    const [actionFav, setActionFav] = useState({filter: 'invert(99%) sepia(2%) saturate(2818%) hue-rotate(202deg) brightness(116%) contrast(75%)'})
    const title = "Avengers: Endgame"
    const overview = "Ambitious high school senior Samantha Hodges is a serious journalist, both for the school paper and for the yearbook, but she's just as serious about her friends, Nate, Gillian, and Rudy, all of whom are vying with her for a full-ride local scholarship to college. Very close to her mother, Emily, who is the school's guidance counselor, Samantha finds her reporting taking an investigative turn when two of her classmates--and contenders for the scholarship--are murdered."



    return (

            <div
            onMouseEnter={() => setHoverGlow('card_box absolute duration-300 opacity-100 h-full w-full rounded-md')}
            onMouseLeave={() => setHoverGlow('card_box absolute duration-300 opacity-0 h-full w-full rounded-md')}
            /* card container with white gradient */
            className="relative h-[350px] w-[350px] rounded-md flex flex-row justify-center items-center"> 

              <div className={hoverGlow}></div>

              <div
              /* main card container with content */
              className="relative h-[348px] w-[348px] rounded-md"> 

                <div
                /* black gradient for card */
                className="card_dark_gradient rounded-md absolute bottom-0 left-0 w-full h-full"></div>

                <img
                /* card image (poster) */
                className="card-img-top w-full h-full object-cover rounded-md" src="https://image.tmdb.org/t/p/original/j5CNWCRvYonv4jMukmMe267T3Cr.jpg" alt=""/> 

                <div
                /* title and buttons container */
                className="absolute bottom-0 w-full h-auto flex flex-col justify-start items-center"> 

                  <p
                  /* card title */ 
                  className=" w-full h-auto text-center font-semibold text-5xl text-gray-400">{title}</p>

                  <div
                  /* buttons flex container */
                  className="flex flex-row justify-between items-center w-full h-full my-5 pl-8 pr-4">

                    <button className="watch_button w-40 h-12 font-bold text-4xl text-gray-400 rounded-md">WATCH</button>

                    <div className="flex flex-row justify-between items-center w-28 h-11">

                      <img
                      style={actionInfo}
                      onMouseEnter={() => setActionInfo({filter: 'invert(14%) sepia(57%) saturate(3942%) hue-rotate(226deg) brightness(97%) contrast(91%)'})}
                      onMouseLeave={() => setActionInfo({filter: 'invert(99%) sepia(2%) saturate(2818%) hue-rotate(202deg) brightness(116%) contrast(75%)'})}
                      className="iconInfo w-11 h-11 cursor-pointer duration-300" 
                      src={require('../../svg/info.svg').default} 
                      />

                      <img 
                      style={actionFav}
                      onMouseEnter={() => setActionFav({filter: 'invert(18%) sepia(56%) saturate(5481%) hue-rotate(352deg) brightness(79%) contrast(101%)'})}
                      onMouseLeave={() => setActionFav({filter: 'invert(99%) sepia(2%) saturate(2818%) hue-rotate(202deg) brightness(116%) contrast(75%)'})}
                      className="iconFav w-11 h-11 cursor-pointer duration-300" 
                      src={require('../../svg/heart.svg').default} 
                      />

                    </div>

                  </div>

                </div>

              </div>

            </div>
    )
}
