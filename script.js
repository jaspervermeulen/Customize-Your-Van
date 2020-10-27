const docSelector = value => document.querySelector(value);

const toggleDisplay = (e) => {
  if(docSelector(`.${e.target.attributes[1].value}`).className.split(" ")[1] === "true"){
    docSelector(`.${e.target.attributes[1].value}`).style.display = "block";
    e.currentTarget.style.backgroundColor = "#a3a496";
    docSelector(`.${e.target.attributes[1].value}`).classList.remove("true");
    docSelector(`.${e.target.attributes[1].value}`).classList.add("false");
  }else if(docSelector(`.${e.target.attributes[1].value}`).className.split(" ")[1] === "false"){
    docSelector(`.${e.target.attributes[1].value}`).style.display = "none";
    e.currentTarget.style.backgroundColor = "#ecede0";
    docSelector(`.${e.target.attributes[1].value}`).classList.remove("false");
    docSelector(`.${e.target.attributes[1].value}`).classList.add("true");
  }
}

const refreshPage = () => location.reload();

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