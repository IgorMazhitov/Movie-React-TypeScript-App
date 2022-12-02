import React from "react";

    const LoadingCard: React.FC = (props: any) => {

        return (

            <div
            className="relative h-[320px] w-[550px] rounded-lg flex flex-row justify-center items-center overflow-hidden shadow-slate-400 ml-5 duration-300"
            > 

              <div
              className="relative h-full w-full rounded-xl"> 

                <div
                className="card_dark_gradient rounded-md absolute bottom-0 left-0 w-full h-full z-[1]"></div>
                <div className="loading_card"></div>

                <div
                className="absolute bottom-0 w-full h-auto flex flex-col justify-start items-center z-[2]"> 

                  <p
                  className=" w-full h-auto text-left font-bold text-5xl text-gray-300 px-8"></p>

                  <div
                  className="flex flex-row justify-between items-center w-full h-full my-5 px-8">

                    <a>
                      <button> 
                         
                      </button>
                    </a>

                    <div className="flex flex-row justify-between items-center w-28 h-11">

                    </div>

                  </div>

                </div>

              </div>

            </div>

        )

    }

export default LoadingCard