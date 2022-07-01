const CHARACTERS_OBJ = {
    rabbit: { name: "rabbit", src: "../img/rabbit.png", id: 1 },
    wolf: { name: "wolf", src: "../img/gamewolf.png", id: 2 },
    ban: { name: "ban", src: "../img/ban.png", id: 3 },
    house: { name: "house", src: "../img/home.png", id: 4 },
  }
  
  const freebox = "0"


  const gameMovement = (direction, arr) => {
    const cordinateOfCharacter =  getMemberPosition
        (
      arr,
      CHARACTERS_OBJ.rabbit.name
    )
    const [x, y] = cordinateOfCharacter[0]
    let newX = x
    let newY = y
    direction === 'left'  && (y === 0 ? (newY = arr.length - 1) : (newY = y - 1))
    direction === 'right' && (y === arr.length - 1 ? (newY = 0) : (newY = y + 1))
    direction === 'up'    && (x === 0 ? (newX = arr.length - 1) : (newX = x - 1))
    direction === 'down'  && (x === arr.length - 1 ? (newX = 0) : (newX = x + 1))
    const movementRabbit = rabbitMove(arr, newX, newY)
    return movementRabbit
  }





function getMemberPosition(arr, gameMember) {

    const findeposs = function (accum, row, x) {
      row.forEach((item, y) => {
        
        if (item === gameMember) {
          accum.push([x, y])
          
        }
      })
      
      return accum
      
    }
    return arr.reduce(findeposs, [])
  }



const  rabbitMove = (gameState, x, y) => {
    const arr = gameState.gameArray
    const [i, j] = getMemberPosition(arr, CHARACTERS_OBJ.rabbit.name)[0]
    if (gameState.isGameover === false) {
      if (arr[x][y] === freebox) {
        arr[x][y] = CHARACTERS_OBJ.rabbit.name
        arr[i][j] = freebox
      } else if (arr[x][y] === CHARACTERS_OBJ.wolf.name) {
        // gameState.gameResult = game_over
        ////     GAME OVER
      } else if (arr[x][y] === CHARACTERS_OBJ.ban.name) {
        return
      } else if (arr[x][y] === CHARACTERS_OBJ.house.name) {
        // arr[x][y] === rabbit
        // arr[i][j] = freebox
        // gameState.gameResult = you_win
        // showMessage(gameState.gameResult) ////       YOU WIN
        console.log("you win")
        gameState.isGameover = true
        return
      }
    }
  }

  export {gameMovement}