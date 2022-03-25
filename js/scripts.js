let pokemonList = [
  {name: "Pikachu", type: "Fire", height: "2'3"},
  {name: "Eevee", type: "Air", height: "2'5"},
  {name: "Charizard", type: ["Fire", "Air"], height:"7'4"},
  {name: "Snorlax", type: ["Water", "Ice"], height: "6'1"}
];

// let age = 22;
// console.log("Your are "+ age +" years old.")  ;
// if (age > 12 && age<20) {
//   console.log('You are a teenager!')
// } else if (age<13) {
//   console.log('You are a child!')
// } else if (age>20) {
//   console.log('You are an adult.')
// } else if (age>99) {
//   console.log('You are about to become a child again!')
// }

for (let i=0; i < pokemonList.length; i++) {
 document.write("Name: " + pokemonList[i].name + " (Height: " + pokemonList[i].height +". ");
  };
