import { useState } from "react"
import { Start } from "./Start"

const App = () => {
  const [value, setValue] = useState([])

  function handleClick() {
    setValue([...value, value + 1])
  }
  return (
    <div className="newBoard">
      <button id="createNewBoard" onClick={handleClick}>
        New Board
      </button>
      {value.map((item) => (
        <Start key={item} />
      ))}
    </div>
  )
}

export { App }
