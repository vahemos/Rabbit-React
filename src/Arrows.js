
const Button = (props) => {
  return (
    <div >
      <button className="up"  onClick={props.onClick}>
      &#x2191;
      </button>
    </div>
  )
}

export {Button}