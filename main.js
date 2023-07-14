const crocCollection = [
  {
    id: 1,
    name: "Classic Pokemon",
    type: "Classic Clog",
    color: "White and Yellow",
  },
  {
    id: 2,
    name: "Taco Bell Mellow",
    type: "Slide",
    color: "Black and Purple",
  },
  {
    id: 3,
    name: "Bistro Graphic",
    type: "Classic Clog",
    color: "Black and Multicolor",
  },
  {
    id: 4,
    name: "Classic Metallic",
    type: "Classic Clog",
    color: "Silver",
  },
  {
    id: 5,
    name: "Printed Camo",
    type: "Classic Clog",
    color: "Multicolor",
  },
  {
    id: 6,
    name: "Bumble Bee",
    type: "Classic Boot",
    color: "Yellow",
  },
  {
    id: 7,
    name: "Sonic the Hedgehog",
    type: "Classic Clog",
    color: "Red",
  },
  {
    id: 8,
    name: "Lisa Frank Unicorn",
    type: "Classic Clog",
    color: "Pink and Multicolor",
  },
  {
    id: 9,
    name: "Western",
    type: "Classic Boot",
    color: "Brown",
  },
  {
    id: 10,
    name: "Neo",
    type: "Puff Boot",
    color: "White",
  },
  {
    id: 11,
    name: "Out of this World",
    type: "Slide",
    color: "Blue and Purple",
  },
  {
    id: 12,
    name: "Classic Cozzzy",
    type: "Slide",
    color: "Black",
  },
  {
    id: 13,
    name: "Mega Crush Realtree",
    type: "Crush Sandal",
    color: "Multicolor",
  },
  {
    id: 14,
    name: "Hotpink Mega",
    type: "Crush Sandal",
    color: "Pink",
  },
  {
    id: 15,
    name: "Bayaband",
    type: "Flip",
    color: "White",
  },
  {
    id: 16,
    name: "Animal Print",
    type: "Flip",
    color: "Multicolor",
  },
  {
    id: 17,
    name: "Winter",
    type: "Puff Boot",
    color: "Black",
  },
];

const add = (num1, num2) => {
  return num1 + num2;
};

const firstNumber = 1;
const secondNumber = 3;
// () => {} -> This is the shape of a function
// const num = 1 -> The = sign is an assignment operation. The right hand side of the operation evaluates first and then gets stored in the left hand side.
const sum = add(firstNumber, secondNumber);

const getCrocDetails = (shoe) => {
  return `${shoe.color} ${shoe.name} ${shoe.type}`;
};

const getFlips = (crocs) => {
  let flips = "";
  for (const shoe of crocs) {
    if (shoe.type === "Flip") {
      flips += `\t${shoe.name}\n`;
    }
  }
};

const getPuffBoots = (crocs) => {
  let puffs = "";
  for (const shoe of crocs) {
    if (croc.type === "Puff Boot") {
      puffs += `\t${croc.name}\n`;
    }
  }
  return puffs;
};

console.log("ALL CROCS:");
console.log("---------------------------------");

// Whenever we want to do something FOR every item in an array... This is when we want to use a for...of loop
for (const croc of crocCollection) {
  const details = getCrocDetails(croc);
  console.log(`\t${details}`);
}

console.log("");

console.log("STYLES:");
console.log("---------------------------------");

console.log("FLIP CROCS:");
console.log(getFlips(crocCollection));

console.log("PUFF BOOTS:");
console.log(getPuffBoots(crocCollection));
