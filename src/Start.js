import React from "react"
import { useState } from "react"
import { MemberRandomPossitonInMatrix } from "./CreateMatrix"
import { DrawGameZone } from "./DrawGameZone"
import { gameMovments } from "./gameMovments"
import { ShowMessage } from "./ShowMessage"




const directionButtons = ["up", "left", "right", "down"]

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

        {gameState.isGameOver === true ? (
          <ShowMessage gameStatus={gameState.gameStatus} />
        ) : (
          <DrawGameZone matrix={gameState.matrix} />
        )}
      </div>
      <div>
        {directionButtons.map((direction,i) => {
          return (
            <div className={direction} key={i}>
              <button onClick={() => handleMove(direction)}>{direction.toUpperCase()}</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { Start }
