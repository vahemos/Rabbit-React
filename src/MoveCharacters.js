import { gameMovement } from "./RabbitMove"

const MoveCharacters = (direction,gameState)=> {
    return gameMovement(direction,gameState)
 
}
export {MoveCharacters}