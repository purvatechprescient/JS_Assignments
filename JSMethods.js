const items = [
  { name: "Bike", price: 100 },
  { name: "Book", price: 50 },
  { name: "Album", price: 150 }
]
let filteredElements = items.filter((item) => {
  return item.price > 70;
});
console.log(filteredElements);
let someElements = items.some((item) => {
  return item.price > 175;
});
console.log(someElements);
let mapElements = items.map((item) => {
  return item.name;
});
console.log(mapElements);
let findItem = items.find((item) => {
  return item.name = "Book";
});
console.log(findItem);
let acc = items.reduce((accObject, items) => {
  accObject[items.price] = items.name;
  return accObject;
}, {});
console.log(acc);