function concat (arr1, arr2) {
  for(let i = 0; i < arr2.length; i++) arr1.push(arr2[i]);
  return arr1;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);

function merge (arr1, arr2) {
  let arr3 = concat(arr1, arr2);
  let temp = 0;
  for (let i = 0; i < arr3.length; i++) {
    for (let j = i+1; j < arr3.length; j++) {
      if (arr3[j] < arr3[i]) {
        temp = arr3[i];
        arr3[i] = arr3[j];
        arr3[j] = temp; 
      }
    }
  }
  return arr3;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
