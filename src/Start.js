import React from "react"
import { useState } from "react"
import { MemberRandomPossitonInMatrix } from "./CreateMatrix"
import { DrowGameZone } from "./DrowGameZone"
import { Arrow } from "./Arrows"
import { gameMovments } from "./gameMovments"
import { ShowMessage } from "./ShowMessage"

const Start = () => {
  const [value, setValue] = useState(5)

  const [gameState, setgameState] = useState({
    matrix: [],
    isGameOver: false,
    gameStatus: "",
  })

  const handleMove = (direction) => {
    if (gameState.isGameOver === true) {
      return
    }
    const newGamestate = gameMovments(direction, gameState)

    setgameState(newGamestate)
  }

  function selectChange(event) {
    setValue(event.target.value)
  }
  const handleClick = () => {
    setgameState({
      matrix: MemberRandomPossitonInMatrix(parseInt(value)),
      isGameOver: false,
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

        {gameState.isGameOver === true ? 
        (<ShowMessage gameStatus={gameState.gameStatus} />) : (<DrowGameZone matrix={gameState.matrix} />)}
      </div>
      <div id="up">
        <Arrow
          onClick={() => {
            handleMove("up")
          }}
        />
      </div>
      <div id="leftRight">
        <Arrow
          onClick={() => {
            handleMove("left")
          }}
        />
        <Arrow
          onClick={() => {
            handleMove("right")
          }}
        />
      </div>
      <div id="down">
        <Arrow
          onClick={() => {
            handleMove("down")
          }}
        />
      </div>
    </div>
  )
}

export { Start }
