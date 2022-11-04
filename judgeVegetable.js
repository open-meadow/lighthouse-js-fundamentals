const judgeVegetable = function (vegetables, metric) {
  let highestSubmitter = "";
  let highestMetric = 0;
  for (let i = 0; i < (vegetables.length); i++) {
    if (highestMetric < vegetables[i][metric]){
      highestMetric = vegetables[i][metric];
      highestSubmitter = vegetables[i]["submitter"];
    }
  }
  return highestSubmitter;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';

console.log(judgeVegetable(vegetables, metric));
