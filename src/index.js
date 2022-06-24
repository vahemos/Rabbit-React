import { useState } from "react"
import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

// const SelectValues = {
//   id:5,
//   id:7,
//   id:10,
// }

function StartSelect() {
 
  return (
    <div>
      <button
        className="startbutton"
        onClick={() => {

        }}
      >
        Start
      </button>

      <select name="" id="select" className="select">
        <option value="5">5 x 5</option>
        <option value="7">7 x 7</option>
        <option value="10">10 x 10</option>
      </select>
    </div>
  )
}


const GameZone = () => {
  return (<div id="zone" className="zone"></div>)

}


const CreateGameBoard = () => {
  const freebox = 0
  const gameBoard = new Array(25)
  
  return (
    <div className="game_zone">
      {gameBoard.fill(freebox).map(() => {
        return (
          <div>
            {gameBoard.map(() => (<GameZone />))}
          </div>
        )
      })}
    </div>
  )
}

const Up = () => {
  return (
    <div className="up">
      <button id="up" className="up">
        UP
      </button>
    </div>
  )
}

const LeftRight = () => {
  return (
    <div className="leftRight">
      <button id="left" className="left">
        Left
      </button>
      <button id="right" className="right">
        Right
      </button>
    </div>
  )
}

const Down = () => {
  return (
    <div className="down">
      <button id="down" className="down">
        Down
      </button>
    </div>
  )
}

function App() {
  const [value, setValue] = useState("")
  const area = (
    <div className="wrapper">
      <StartSelect />      
      <GameZone />
      <CreateGameBoard />
      <Up />
      <LeftRight />
      <Down />
    </div>
  )
  return (
    <div className="newBoard">
      <button
        id="createNewBoard"
        onClick={() => {
          setValue([...value, area])
        }}
      >
        New Board
      </button>
      {value}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)