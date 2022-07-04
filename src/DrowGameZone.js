import React from "react"
import { Draw } from "./DrawImg"

const DrowGameZone = (props) => {
  const matrix = props.matrix
  const divStyle = {
    width: matrix.length * 60 + 20 + "px",
  }
  return (
    <div className="game_zone" style={divStyle}>
      {matrix.map((row, k) =>
        row.map((column, i) => {
          return (
            <div className="box" key={k.toString() + i.toString()}>
              <Draw column={column} />
            </div>
          )
        })
      )}
    </div>
  )
}
export { DrowGameZone }
