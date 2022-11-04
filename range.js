function range(start, end, step) {
  let emptyArr = [];
  if ((start < end) && step > 0){
    for (let i = start; i <= end; i += step) {
      emptyArr.push(i);
    }
    return emptyArr;
  }
  else return emptyArr;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));