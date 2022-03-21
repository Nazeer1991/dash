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

let manufacturer = document.querySelector(".manufacturer");
let model = document.querySelector(".model");
let year = document.querySelector(".year");

manufacturer.innerHTML = data[0].manu;
model.innerHTML = data[0].model;

let button = document.querySelector("button");
button.onclick = () => {
  year.innerHTML = data[0].year;
};
