import React, { useState } from "react"
import "./PropsAndState.css"

export const PropsAndState = ({ yourName }) => {
  let [countClicks, setCountClicks] = useState(0)

  const handleClick = () => {
    //good practice:
    //make a copy of state, modifiy it, and then setState to the copy
    const newCountClicks = ++countClicks
    setCountClicks(newCountClicks)
  }

  const resetClick = () => {
    let resetCountClicks = countClicks = 0
    setCountClicks(resetCountClicks)
  }

  return (
    <>
      <h3>Welcome, {yourName} </h3>
      <p>{countClicks}</p>
      <button className="clickMe" onClick={(handleClick)}>Click Me... I Count All The Clicks Whooo Awwwww</button>
      <button className="clickMe" onClick={(resetClick)}>Reset The Count</button>

    </>
  )
}

