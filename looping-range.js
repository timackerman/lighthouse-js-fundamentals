function range(start, end, step)   {
  let ans = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      ans.push(i);
    }
  }
  return ans;
}


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
