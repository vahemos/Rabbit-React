function atacRabbit(gameState, emptyCellsArr) {
    const matrix = gameState.gameZone
    const massiv = []
    emptyCellsArr.forEach((cell) => {
      const [x, y] = cell
      if (matrix[x][y] === rabbit) {
        gameState.gameResult = game_over
        gameOverAndShowMessage(gameState)
      }
      if (matrix[x][y] === freebox) {
        massiv.push([x, y])
      }
    })
    return massiv
  }

  function gameOverAndShowMessage(gameState) {
    showElementById(gameState.gameResult + gameState.boardNum)
    hideBoard(gameState)
    gameState.isGameover = true
  }
  