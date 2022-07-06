import { useState } from "react"
import { Start } from "../Start/Start"
import { Btn } from "./AppStyle"
import { GlobalStyle } from "../Start/StartStyle"




const App = () => {
  const [boardNumber, setBoardNumber] = useState([])

  function createNewBoard() {
    setBoardNumber([...boardNumber, boardNumber + 1])
  }
   
  return (
    
    <div>
      <GlobalStyle />
      <Btn id="createNewBoard" onClick={createNewBoard}>
        New Board
      </Btn>
      {boardNumber.map((item) => (
        <Start key={item} />
      ))}
    </div>
    
  )

}

export { App }
