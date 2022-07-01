import { gameMovement } from "./RabbitMove"

const MoveCharacters = (direction,gameArray)=> {
    return gameMovement(direction,gameArray)
 
}
export {MoveCharacters}