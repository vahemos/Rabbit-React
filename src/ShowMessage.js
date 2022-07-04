
const ShowMessage = props => props.gameStatus === "you lose" ? <h1 className="message"> You Lose </h1> : <h1 className="message"> You Win! </h1>

    
 

export { ShowMessage }
