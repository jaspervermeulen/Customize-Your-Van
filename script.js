const docSelector = value => document.querySelector(value);

const toggleDisplay = (e) => {
  if(docSelector(`.${e.target.attributes[1].value}`).className.split(" ")[1] === "true"){
    docSelector(`.${e.target.attributes[1].value}`).style.display = "block";
    e.currentTarget.style.backgroundColor = "#000000";
    e.currentTarget.style.color = "#ffffff";
    docSelector(`.${e.target.attributes[1].value}`).classList.remove("true");
    docSelector(`.${e.target.attributes[1].value}`).classList.add("false");
  }else if(docSelector(`.${e.target.attributes[1].value}`).className.split(" ")[1] === "false"){
    docSelector(`.${e.target.attributes[1].value}`).style.display = "none";
    e.currentTarget.style.backgroundColor = "#ffffff";
    e.currentTarget.style.color = "#000000";
    docSelector(`.${e.target.attributes[1].value}`).classList.remove("false");
    docSelector(`.${e.target.attributes[1].value}`).classList.add("true");
  }
}

const refreshPage = () => location.reload();

const flip = () => {
  const van = document.querySelectorAll('.ee');

  van.forEach(item => {
    if (item.style.transform === "scaleX(-1)") {
      item.style.transform = "scaleX(1)";
    } else {
      item.style.transform = "scaleX(-1)";
    }
  })

  
  
  
}

docSelector('.button_bed').addEventListener("click", toggleDisplay);
docSelector('.button_kitchen').addEventListener("click", toggleDisplay);
docSelector('.button_clearAll').addEventListener("click", refreshPage);
docSelector('.button_solar').addEventListener("click", toggleDisplay);
docSelector('.button_flag').addEventListener("click", toggleDisplay);
docSelector('.button_board').addEventListener("click", toggleDisplay);
docSelector('.button_lamps').addEventListener("click", toggleDisplay);
docSelector('.button_stickers').addEventListener("click", toggleDisplay);
docSelector('.button_windows').addEventListener("click", toggleDisplay);
docSelector('.button_rug').addEventListener("click", toggleDisplay);
docSelector('.button_cabinet').addEventListener("click", toggleDisplay);
docSelector('.button_flip').addEventListener("click", flip);