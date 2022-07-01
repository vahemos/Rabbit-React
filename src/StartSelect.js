import React from "react"
import { useState } from "react"
import { MemberRandomPossitonInMatrix } from "./CreateMatrix"
import { DrowGameZone } from "./DrowGameZone"
// import { gameMovement } from "./RabbitMove"
import { Button } from "./Arrows"
import { MoveCharacters } from "./MoveCharacters"

const StartSelect = () => {
  const [value, setValue] = useState(5)

  const [gameArray, setGameArray] = useState({
    matrix: [],
    isGameover: true,
    gameStatus: "",
  })

  const gameState = {...gameArray}
  const handleMove = (direction) => {
    setGameArray(gameState,MoveCharacters(direction, gameArray.matrix))
    
   
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

  const divStyle = {
    width: value * 60 + 20 + "px",
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
      <div className={"game_zone"} style={divStyle}>
   
        
        
      </div>

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
        }}/>
    </div>
  )
}

export { StartSelect }
