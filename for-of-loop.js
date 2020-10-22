
const total = 0;
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}
console.log("Order total is: ", total);


const total = 0;
for (let amount of amounts) {
  total += amount;
}
console.log("Order total is: ", total);
