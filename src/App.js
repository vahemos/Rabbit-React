import { useState } from "react"
import { Start } from "./Start"

const App = () => {
  const [boardNumber, setBoardNumber] = useState([])

  function createNewBoard() {
    setBoardNumber([...boardNumber, boardNumber + 1])
  }
  return (
    <div className="newBoard">
      <button id="createNewBoard" onClick={createNewBoard}>
        New Board
      </button>
      {boardNumber.map((item) => (
        <Start key={item} />
      ))}
    </div>
  )
}

export { App }
