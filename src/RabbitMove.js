const CHARACTERS_OBJ = {
  rabbit: { name: "rabbit", src: "./img/rabbit.png", id: 1 },
  wolf: { name: "wolf", src: "./img/gamewolf.png", id: 2 },
  ban: { name: "ban", src: "./img/ban.png", id: 3 },
  house: { name: "house", src: "./img/home.png", id: 4 },
}

const freebox = "0"

const gameMovement = (direction, gameState) => {
  const matrix = gameState.matrix
  console.log(gameState, "55555555")
  const cordinateOfCharacter = getMemberPosition(
    gameState,
    CHARACTERS_OBJ.rabbit.name
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
  const movementRabbit = rabbitMove(gameState, newX, newY)
  console.log(movementRabbit)
  return movementRabbit
}

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


const rabbitMove = (gameState, x, y) => {
  const matrix = gameState.matrix
  const [i, j] = getMemberPosition(gameState, CHARACTERS_OBJ.rabbit.name)[0]
    if (matrix[x][y] === freebox) {
      matrix[x][y] = CHARACTERS_OBJ.rabbit.name
      matrix[i][j] = freebox
    } else if (matrix[x][y] === CHARACTERS_OBJ.wolf.name) {
      gameState.isGameover = true
      gameState.gameStatus="you lose"
      ////     GAME OVER
    } else if (matrix[x][y] === CHARACTERS_OBJ.ban.name) {
    } else if (matrix[x][y] === CHARACTERS_OBJ.house.name) {

      gameState.isGameover = false
      gameState.gameStatus= "you win" ////    
    }
  return gameState
}

export { gameMovement }
