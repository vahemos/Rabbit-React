import { GAME_CONST_PROPERTIES } from "./constants"

const Draw = (props) => {
  const column = props.column

  if (column === GAME_CONST_PROPERTIES.rabbit.name) {
    return <img src={GAME_CONST_PROPERTIES.rabbit.src} alt="" />
  } else if (column === GAME_CONST_PROPERTIES.wolf.name) {
    return <img src={GAME_CONST_PROPERTIES.wolf.src} alt="" />
  } else if (column === GAME_CONST_PROPERTIES.ban.name) {
    return <img src={GAME_CONST_PROPERTIES.ban.src} alt="" />
  } else if (column === GAME_CONST_PROPERTIES.house.name) {
    return <img src={GAME_CONST_PROPERTIES.house.src} alt="" />
  }
}

export { Draw }
