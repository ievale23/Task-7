/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};

let audiProperties = Object.keys(audi);
console.log(audiProperties);

function showObjectKeys(audi) {
  let audiProperties = Object.keys(audi);
  console.log(audiProperties);
}

showObjectKeys();
