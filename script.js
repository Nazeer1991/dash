const data = [
  {
    manu: "Asus",
    model: "zenfone",
    year: 2021,
  },
  {
    manu: "mi",
    model: "note",
    year: 2022,
  },
  {
    manu: "samsung",
    model: "galaxy",
    year: 2000,
  },
];
const array = ["bro", "sis", "kid"];

let manufacturer = document.querySelector(".manufacturer");
let model = document.querySelector(".model");
let year = document.querySelector(".year");

manufacturer.innerHTML = data[0].manu;
model.innerHTML = data[0].model;

let button = document.querySelector("button");
button.onclick = () => {
  year.innerHTML = array;
};

const circles = document.querySelectorAll(".circle");

circles.forEach((circle) => (circle.style.backgroundColor = "green"));
/// object.map
const housemates = [
  {
    name: "ahmend",
    age: 24,
  },
  {
    name: "ellen",
    age: 35,
  },
  {
    name: "woody",
    age: 22,
  },
];

const housemates2021 = housemates.map((housemate) => housemate.age + 2);
console.log(housemates2021);
/// filter array
const shows = ["mr.robot", "lost", "dexter", "got", "breaking bad"];

console.log(
  shows.filter((show) => {
    return show.length < 5;
  })
);
// filter object
const objShows = [
  { name: "lupin", series: 1, episode: 3 },
  { name: "got", series: 2, episode: 22 },
  { name: "bad", series: 3, episode: 5 },
  { name: "robot", series: 1, episode: 9 },
];

console.log(objShows.filter((each) => each.episode < 10));
//reduce()

const scores = [23, 21, 44, 55, 53];

//scores.reduce((accumulator,currentValue) => accumulator + currentValue)

const total = scores.reduce((totalScore, score) => totalScore + score);

console.log(total);

//every()
//if everything in our array matches a rule return true

const testResults = [45, 34, 76, 89, 45, 65, 76];

const hasClassHasPassed = testResults.every((result) => result > 30);
console.log(hasClassHasPassed);

const animal = ["cat", "dog", "rat"];

const everyAnimalHasThreeCharacter = animal.every((an) => an.length === 3);

console.log(everyAnimalHasThreeCharacter);

/// Array Work

/// using 'map' fn converts farnheit to celcius
let farnheit = [120, 140, 212, 200];

function getCelcius(arr) {
  return arr.map((temp) => (temp - 32) * (5 / 9));
}

const celcius = getCelcius(farnheit);

console.log(celcius);

// Using Some check array for falsey

const checkFalsy = [11, NaN, [], "angels"];

function checkForFalsy() {
  return checkFalsy.some(
    (elem) =>
      elem == false ||
      elem == 0 ||
      elem == -0 ||
      elem == 0n ||
      elem == "" ||
      elem == null ||
      elem == undefined ||
      elem == NaN
  );
}

console.log(checkForFalsy());

// reduce add chars
const getTotals = ["rabbit", "football", "cracking"];

function getTotal() {
  return getTotals.reduce((total, item) => total + item.length, 0);
}
console.log(getTotal());

//

const tetrominoes = ["Ltetromino", "Ztetromino", "itetromino"];

// pick any tetromino and clg it

const randomNumber = Math.random() * tetrominoes.length;

const randomInteger = Math.floor(randomNumber);
//Math.floor() rounds DOWN to nearest full integer eg between 1-5 1,2,3,4
//Math.ceil() rounds UP to neaerst full integer eg 1-5 1,2,3,4,5
//Math.round() round to nearest integer

console.log(tetrominoes[randomInteger]);

//

const drinksMenu = [
  "apple",
  "rosemilk",
  "sharjah",
  "fig",
  "strawberry",
  "blueberry",
  "dragon",
  "pomegranite",
  "sugarcane",
  "orange",
  "pistaMilk",
  "badamMilk",
];

// to pick one drink for you randomly

const randomJuiceDecimal = Math.random() * drinksMenu.length;
const randomJuiceInteger = Math.floor(randomJuiceDecimal);

console.log(drinksMenu[randomJuiceInteger]);

// DATE

const today = new Date();
const Year = today.getFullYear();
console.log(Year);
const isoString = today.toISOString();
console.log(isoString);

// setTimeout executes function after set time
let time = 3000; //3 secs alwyas in milliseconds

function sayHi() {
  console.log("Hi! Bro so cool!");
}
setTimeout(sayHi, time);

// bubble disappear in 10sec

const bubble = document.querySelector(".bubble");

function hideBubble() {
  bubble.style.display = "none";
}

// setTimeout(hideBubble, 10000);

// setInterval executes function in every set interval

const text = "Alert 📢 ";
const times = 3000;

function showAlert() {
  const textDisplay = document.createElement("div");
  textDisplay.innerHTML = text;
  bubble.appendChild(textDisplay);
}

// setInterval(showAlert, times);

// move bubble in set interval
let move = 10;
function moveBubble() {
  move += 50;
  bubble.style.left = move + "px";

  if (move > 1500) {
    clearInterval(timerId);
  }
}

let timerId = setInterval(moveBubble, 1000);
