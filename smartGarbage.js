const smartGarbage = function (trash, bins) {
  bins[trash] += 1;
  return smartGarbage;
}

let keys = smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
keys = Object.keys;
console.log(keys);
