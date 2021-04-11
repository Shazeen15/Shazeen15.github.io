const rainbowTreasure = Math.floor(Math.random() * 20);
const bomb = Math.floor(Math.random() * 20);

// const rainbowTreasure = 1;
// const bomb = 1;

let counter = 0;
const count = document.getElementById("counter");
count.innerHTML = counter;

const gameboard = document.getElementById("gameboard");
// gameboard.style.display = "none"

const same = document.getElementById("same");

let bombPic = document.getElementById("bomb");

let treasurePic = document.getElementById("treasure");
let basic = document.getElementById("basic");

const treasure = (location) => {
  console.log("working", location);
  if (location === rainbowTreasure && location === bomb) {
    // document.getElementById(location).innerHTML = "&#127828;";
    gameboard.innerHTML = "BOMB DESTROYED THE TRESAURE!!!";
    gameboard.style.color = "aliceblue";
    gameboard.style.fontSize = "1.5rem";
    gameboard.style.textShadow = "2px 2px 8px #ea4c28";
    same.style.display = "block";
  } else if (location === rainbowTreasure) {
    document.getElementById(location).innerHTML = "&#127853;";
    gameboard.innerHTML = "You found the rainbow treasure";
    gameboard.style.color = "aliceblue";
    gameboard.style.fontSize = "1.5rem";
    gameboard.style.textShadow = "2px 2px 8px #ea4c28";
    treasurePic.style.display = "block";
  } else if (location === bomb) {
    document.getElementById(location).innerHTML = "&#128163;";
    gameboard.innerHTML = "LOSER";
    gameboard.style.color = "aliceblue";
    gameboard.style.fontSize = "1.5rem";
    gameboard.style.textShadow = "2px 2px 8px #ea4c28";
    bombPic.style.display = "block";
  } else {
    document.getElementById(location).innerHTML = "&#127812;";
  }
  counter += 1;
  count.innerHTML = counter;
  checkCount(counter);
};

const button = document.querySelector("button");
const checkCount = (val) => {
  if (val >= 5) {
    // button.click();
    gameboard.innerHTML = "NO BOMB YOU SURVIVED BUT NO TREASURE!";
    gameboard.style.color = "aliceblue";
    gameboard.style.fontSize = "1.5rem";
    gameboard.style.textShadow = "2px 2px 8px #ea4c28";
    basic.style.display = "block";
  }
};
