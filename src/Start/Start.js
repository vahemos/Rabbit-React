import React from "react"
import { useState } from "react"
import { MemberRandomPossitonInMatrix } from "../CreateMatrix"
import { DrawGameZone } from "../DrawGameZone/DrawGameZone"
import { gameMovments } from "../gameMovments"
import { ShowMessage } from "../ShowMessage/ShowMessage"
import { Wrapper, Btn, DirectionBtn, Select } from "./StartStyle"

////////////////////////

const directionButtons = ["up", "left", "right", "down"]
const selectValues = [5, 7, 10]

const Start = () => {
  const [boardSize, setBoardSize] = useState(5)

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
    setBoardSize(event.target.value)
  }
  const handleClick = () => {
    setgameState({
      matrix: MemberRandomPossitonInMatrix(parseInt(boardSize)),
      isGameOver: false,
      gameStatus: "",
    })
  }

  return (
    <Wrapper>
      <div>
        <Btn className="startbutton" onClick={handleClick}>
          Start
        </Btn>
        <Select name="" id="select" className="select" onChange={selectChange}>
          {selectValues.map((optionVal) => (
            <option key={optionVal} value={optionVal}>
              {optionVal} x {optionVal}
            </option>
          ))}
        </Select>

        {gameState.isGameOver === true ? (
          <ShowMessage gameStatus={gameState.gameStatus} />
        ) : (
          <DrawGameZone matrix={gameState.matrix} />
        )}
      </div>
      <div>
        {directionButtons.map((direction, i) => {
          return (
            <div className={direction} key={i}>
              <DirectionBtn
                direction={direction}
                onClick={() => handleMove(direction)}
              >
                {direction.toUpperCase()}
              </DirectionBtn>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

export { Start }
