import React from "react"
import { useState } from "react"
import { MemberRandomPossitonInMatrix } from "./CreateMatrix"
import { DrowGameZone } from "./DrowGameZone"
import { gameMovement } from "./RabbitMove"
import { Button } from "./Arrows"

const StartSelect = () => {
  const [value, setValue] = useState(5)

  const [gameArray, setGameArray] = useState({
    matrix: [],
    isGameover: false,
    gameStatus: "",
  })



  const handleMove = (direction) => {
    const gameState = {...gameArray}
    const newObject = gameMovement(direction,gameState) 
    setGameArray( newObject )
  }

  function selectChange(event) {
    setValue(event.target.value)
  }
  const handleClick = () => {
    setGameArray({
      matrix: MemberRandomPossitonInMatrix(parseInt(value)),
      isGameover: true,
      gameStatus: "",
    })
  }

 
  
  return (
    <div className="wrapper">
      <div className="newDiv">
        <button className="startbutton" onClick={handleClick}>
          Start
        </button>
        
        <select name="" id="select" className="select" onChange={selectChange}>
          <option value="5">5 x 5</option>
          <option value="7">7 x 7</option>
          <option value="10">10 x 10</option>
        </select>
        {<DrowGameZone matrix={gameArray.matrix} />}
      </div>
      {/* <div className={"game_zone"} style={divStyle}></div> */}
<div>
      <Button 
        onClick={() => {
          handleMove("up")
        }}/>
      <Button 
        onClick={() => {
          handleMove("left")
        }}/>
      <Button
        onClick={() => {
          handleMove("right")
        }}/>
      <Button
        onClick={() => {
          handleMove("down")
        }}/></div>
    </div>
  )
}

export { StartSelect }
