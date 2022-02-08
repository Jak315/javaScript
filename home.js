const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];
let hariu1 = characters.filter(eregtei);
let hariu2 = characters.filter(emegtei);

function eregtei(huis) {
  return huis.gender === "male";
}

function emegtei(huiss) {
  return huiss.gender === "female";
}

console.log("er:", hariu1, "em", hariu2);
