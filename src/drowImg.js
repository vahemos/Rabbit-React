const CHARACTERS_OBJ = {
    rabbit: { name: "rabbit", src: "./img/rabbit.png", id: 1 },
    wolf: { name: "wolf", src: "./img/gamewolf.png", id: 2 },
    ban: { name: "ban", src: "./img/ban.png", id: 3 },
    house: { name: "house", src: "./img/home.png", id: 4 },
  }


const Draw=(props)=>{
    const column = props.column

    if(column === CHARACTERS_OBJ.rabbit.name){
      return <img src= {CHARACTERS_OBJ.rabbit.src} alt="" />
    }else if(column === CHARACTERS_OBJ.wolf.name){
      return  <img src= {CHARACTERS_OBJ.wolf.src} alt="" />
    }else if(column === CHARACTERS_OBJ.ban.name){
       return <img src= {CHARACTERS_OBJ.ban.src} alt="" />
    }else if(column === CHARACTERS_OBJ.house.name){
       return <img src= {CHARACTERS_OBJ.house.src} alt="" />
    }
  
}



export  {Draw}