const carPassing = function(cars, speed) {
  const newReading = {
    time: Date.now(),
    speed
  };
  cars.push(newReading);
  return cars;
}

/*
1) Create a new object with the time field set to the value of Date.now() and the speed field set to the value provided as the second input
2) Push the newly created object to the back of the input array
3) Return the updated array
*/