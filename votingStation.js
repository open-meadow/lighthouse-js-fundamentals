const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
  ['Codeville Epic Academy', 15, 'school'],
  ['Big Al Pizza', 50, "restaurant"]
];

const chooseStations = function (stations) {
  // Your code in here ...
  const votingStations = [];
  for (let station of stations) {
    let capacity = station[1];
    let venue = station[2];
    if (capacity >= 20) {
      if (venue === 'school' || venue === 'community centre'){
        votingStations.push(station[0]);
      }
    }  
  }
  return votingStations;
}

console.log(chooseStations (stations));
