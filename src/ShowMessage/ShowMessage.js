import { ResultMessage } from "./ShowMessageStyle"
const ShowMessage = props => (<ResultMessage >{props.gameStatus === "you lose"? "You Lose :(":"You Win !"} </ResultMessage>)

    
 export { ShowMessage }
