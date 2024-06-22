import React, {UseState} from 'react'

export default function CalculatorButtons(props) {

    const {buttons, inputHandler} = props

  return (
    <div className="h-[60%] w-full bg-gradient-to-t from-zinc-900 to-black ">
        <div className="h-full grid grid-cols-4 grid-rows-5">
        {buttons.map((btn, index) => (
          // Using a ternary operator for conditional rendering bg-gray-800
          btn === "=" ? (
            <button key={index} className=" text-white text-2xl hover:bg-gray-700 transition linear delay-75" onClick={inputHandler}>{btn}</button>
          ) : (
            <button key={index} className=" text-white text-2xl hover:bg-gray-700 transition linear delay-75" onClick={inputHandler}>{btn}</button>
          )
        ))}
        </div>
    </div>
  )
}
