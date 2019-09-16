function average(arr){
  var total = arr.reduce(function(acc, curr){
    return acc + curr;
  });
  console.log(Math.round(total/arr.length));
}

var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores);

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2);
