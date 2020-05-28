let valueBed;
let valueKitchen;
let valueBoard;
let valueFlag;
let valueSolar;
let valueLamps;
let valueStickers;
let valueWindows;
let valueRug;
let valueCabinet;

let buttonFlag = document.querySelector('.button_flag');
let buttonBed = document.querySelector('.button_bed');
let buttonKitchen = document.querySelector('.button_kitchen');
let buttonBoard = document.querySelector('.button_board');
let buttonSolar = document.querySelector('.button_solar');
let buttonLamps = document.querySelector('.button_lamps');
let buttonStickers = document.querySelector('.button_stickers');
let buttonWindows = document.querySelector('.button_windows');
let buttonRug = document.querySelector('.button_rug');
let buttonCabinet = document.querySelector('.button_cabinet');
let buttonClearAll = document.querySelector('.button_clearAll');

let cabinet = document.querySelector('.van_cabinet');
let rug = document.querySelector('.van_rug');
let windows = document.querySelector('.van_window');
let stickers = document.querySelector('.van_stickers');
let kitchen = document.querySelector('.van_kitchen');
let board = document.querySelector('.van_board');
let flag = document.querySelector('.van_flag');
let solar = document.querySelector('.van_solar');
let lamp = document.querySelector('.van_lamps');
let bed = document.querySelector('.van_bed');




const displayBed = () => {
  valueBed = !valueBed;
  if(valueBed === true){
    bed.style.display = "block";
    buttonBed.style.backgroundColor = "#a3a496";
  }else if(valueBed === false){
    bed.style.display = "none";
    buttonBed.style.backgroundColor = "#ecede0";
  }
}

const displayKitchen = () => {
  valueKitchen = !valueKitchen;
  if(valueKitchen === true){
    kitchen.style.display = "block";
    buttonKitchen.style.backgroundColor = "#a3a496";
  }else if(valueKitchen === false){
    kitchen.style.display = "none";
    buttonKitchen.style.backgroundColor = "#ecede0";

  }
}

const displayBoard = () => {
  valueBoard = !valueBoard;
  if(valueBoard === true){
    board.style.display = "block";
    buttonBoard.style.backgroundColor = "#a3a496";

  }else if(valueBoard === false){
    board.style.display = "none";
    buttonBoard.style.backgroundColor = "#ecede0";

  }
}

const displayFlag = () => {
  valueFlag = !valueFlag;
  if(valueFlag === true){
    flag.style.display = "block";
    buttonFlag.style.backgroundColor = "#a3a496";

  }else if(valueFlag === false){
    flag.style.display = "none";
    buttonFlag.style.backgroundColor = "#ecede0";

  }
}

const displaySolar = () => {
  valueSolar = !valueSolar;
  if(valueSolar === true){
    solar.style.display = "block";
    buttonSolar.style.backgroundColor = "#a3a496";

  }else if(valueSolar === false){
    solar.style.display = "none";
    buttonSolar.style.backgroundColor = "#ecede0";

  }
}

const displayLamps = () => {
  valueLamps = !valueLamps;
  if(valueLamps === true){
    lamp.style.display = "block";
    buttonLamps.style.backgroundColor = "#a3a496";

  }else if(valueLamps === false){
    lamp.style.display = "none";
    buttonLamps.style.backgroundColor = "#ecede0";

  }
}

const displayStickers = () => {
  valueStickers = !valueStickers;
  if(valueStickers === true){
    stickers.style.display = "block";
    buttonStickers.style.backgroundColor = "#a3a496";

  }else if(valueStickers === false){
    stickers.style.display = "none";
    buttonStickers.style.backgroundColor = "#ecede0";

  }
}

const displayWindows = () => {
  valueWindows = !valueWindows;
  if(valueWindows === true){
    windows.style.display = "block";
    buttonWindows.style.backgroundColor = "#a3a496";

  }else if(valueWindows === false){
    windows.style.display = "none";
    buttonWindows.style.backgroundColor = "#ecede0";

  }
}

const displayRug = () => {
  valueRug = !valueRug;
  if(valueRug === true){
    rug.style.display = "block";
    buttonRug.style.backgroundColor = "#a3a496";

  }else if(valueRug === false){
    rug.style.display = "none";
    buttonRug.style.backgroundColor = "#ecede0";

  }
}

const displayCabinet = () => {
  valueCabinet = !valueCabinet;
  if(valueCabinet === true){
    cabinet.style.display = "block";
    buttonCabinet.style.backgroundColor = "#a3a496";

  }else if(valueCabinet === false){
    cabinet.style.display = "none";
    buttonCabinet.style.backgroundColor = "#ecede0";

  }
}

const clearAll = () => {
  valueCabinet = !valueCabinet;
  cabinet.style.display = "none";
  buttonCabinet.style.backgroundColor = "#ecede0";

  valueRug = !valueRug;
  rug.style.display = "none";
  buttonRug.style.backgroundColor = "#ecede0";

  valueWindows = !valueWindows;
  windows.style.display = "none";
  buttonWindows.style.backgroundColor = "#ecede0";

  valueStickers = !valueStickers;
  stickers.style.display = "none";
  buttonStickers.style.backgroundColor = "#ecede0";

  valueLamps = !valueLamps;
  lamp.style.display = "none";
  buttonLamps.style.backgroundColor = "#ecede0";

  valueSolar = !valueSolar;
  solar.style.display = "none";
  buttonSolar.style.backgroundColor = "#ecede0";

  valueFlag = !valueFlag;
  flag.style.display = "none";
  buttonFlag.style.backgroundColor = "#ecede0";

  valueBoard = !valueBoard;
  board.style.display = "none";
  buttonBoard.style.backgroundColor = "#ecede0";

  valueKitchen = !valueKitchen;
  kitchen.style.display = "none";
  buttonKitchen.style.backgroundColor = "#ecede0";

  valueBed = !valueBed;
  bed.style.display = "none";
  buttonBed.style.backgroundColor = "#ecede0";
}

buttonClearAll.addEventListener("click", clearAll);
buttonSolar.addEventListener("click", displaySolar);
buttonFlag.addEventListener("click", displayFlag);
buttonBoard.addEventListener("click", displayBoard);
buttonKitchen.addEventListener("click", displayKitchen);
buttonBed.addEventListener("click", displayBed);
buttonLamps.addEventListener("click", displayLamps);
buttonStickers.addEventListener("click", displayStickers);
buttonWindows.addEventListener("click", displayWindows);
buttonRug.addEventListener("click", displayRug);
buttonCabinet.addEventListener("click", displayCabinet);