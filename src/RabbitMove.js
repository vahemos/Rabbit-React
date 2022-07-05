import { GAME_CONST_PROPERTIES } from "./constants"

const freebox = "0"

function getMemberPosition(gameState, gameMember) {
  const matrix = gameState.matrix
  const findeposs = function (accum, row, x) {
    row.forEach((item, y) => {
      if (item === gameMember) {
        accum.push([x, y])
      }
    })

    return accum
  }

  return matrix.reduce(findeposs, [])
}

const setGameStatus = (gameState, x, y) => {
  const matrix = gameState.matrix
  const [i, j] = getMemberPosition(
    gameState,
    GAME_CONST_PROPERTIES.rabbit.name
  )[0]
  if (matrix[x][y] === freebox) {
    matrix[x][y] = GAME_CONST_PROPERTIES.rabbit.name
    matrix[i][j] = freebox
  } else if (matrix[x][y] === GAME_CONST_PROPERTIES.wolf.name) {
    gameState.isGameOver = true
    gameState.gameStatus = "you lose"
    // console.log(gameState.gameStatus,"lose")///////////////////
  }
  //    else if (matrix[x][y] === GAME_CONST_PROPERTIES.ban.name) {

  //  }
  else if (matrix[x][y] === GAME_CONST_PROPERTIES.house.name) {
    gameState.isGameOver = true
    gameState.gameStatus = "you win" ////
    // console.log(gameState.gameStatus,"win")
    matrix[x][y] = GAME_CONST_PROPERTIES.rabbit.name
    matrix[i][j] = freebox
  }
  return gameState
}

const rabbitMove = (direction, gameState) => {
  const matrix = gameState.matrix
  const cordinateOfCharacter = getMemberPosition(
    gameState,
    GAME_CONST_PROPERTIES.rabbit.name
  )
  const [x, y] = cordinateOfCharacter[0]
  let newX = x
  let newY = y
  direction === "left" &&
    (y === 0 ? (newY = matrix.length - 1) : (newY = y - 1))
  direction === "right" &&
    (y === matrix.length - 1 ? (newY = 0) : (newY = y + 1))
  direction === "up" && (x === 0 ? (newX = matrix.length - 1) : (newX = x - 1))
  direction === "down" &&
    (x === matrix.length - 1 ? (newX = 0) : (newX = x + 1))
  const movementRabbit = setGameStatus(gameState, newX, newY)
  return movementRabbit
}

export { rabbitMove }
