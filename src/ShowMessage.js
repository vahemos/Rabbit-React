
const ShowMessage = props =>  (<h1 className="message">{props.gameStatus === "you lose"? "You Lose :(":"You Win !"} </h1>)

    
 export { ShowMessage }
