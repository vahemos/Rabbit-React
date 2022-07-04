import { rabbitMove } from "./RabbitMove"
import { wolvesMove } from "./wolvesmove"
import { GAME_CONST_PROPERTIES } from "./constants"

const wolf = GAME_CONST_PROPERTIES.wolf.name

const gameMovments = (direction, gameState) => {
  const newGameState = { ...gameState }
  const moveRabbit = rabbitMove(direction, newGameState)
  if (moveRabbit.isGameOver === true) {
    return
  }
  return wolvesMove(moveRabbit, wolf)
}

export { gameMovments }
