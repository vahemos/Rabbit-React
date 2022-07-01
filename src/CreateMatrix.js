const img = {
  rabbit: { name: "rabbit", src: "./img/rabbit.png", id: 1 },
  wolf: { name: "wolf", src: "./img/gamewolf.png", id: 2 },
  ban: { name: "ban", src: "./img/ban.png", id: 3 },
  house: { name: "house", src: "./img/home.png", id: 4 },
}

const freebox = "0"
const rabbit = img.rabbit.name
const house = img.house.name
const wolf = img.wolf.name
const ban = img.ban.name
// const game_over = "game_over"
// const you_win = "you_win"

// let boardNum = 0
// const intervalObj = {}





const  MemberRandomPossitonInMatrix = (value)=>{
  const rabbitCount = 1
  const homeCount = 1
  const wolvesCount = Math.ceil((60 * value) / 100)
  const banersCount = Math.ceil((40 * value) / 100)
  const matrix = CreateMatrix(value)
  freeCoordinates(matrix)
  memberCount(rabbitCount, matrix, rabbit)
  memberCount(homeCount, matrix, house)
  memberCount(wolvesCount, matrix, wolf)
  memberCount(banersCount, matrix, ban)  
  return matrix
}

 function CreateMatrix(value) {
  let matrix = new Array(parseInt(value))
    .fill(freebox)
    .map(() => new Array(parseInt(value)).fill(freebox))
  return matrix
}

////////////////////////////////////

function freeCoordinates(matrix) {
  const x = Math.floor(Math.random() * matrix.length)
  const y = Math.floor(Math.random() * matrix.length)
  if (matrix[x][y] === freebox) {
    return [x, y]
  } else {
    return freeCoordinates(matrix)
  }
}





function setMember(gameMember, matrix) {
  const [x, y] = freeCoordinates(matrix)
  matrix[x][y] = gameMember
}

function memberCount(count, matrix, gameMember) {
  for (let i = 0; i < count; i++) {
    setMember(gameMember, matrix)
  }
}


export {MemberRandomPossitonInMatrix}
