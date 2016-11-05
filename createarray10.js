function array10(){
  //TO DO array 10x10 with random fill of 'A', 'B', 'C' or 'D'
  var arr = ["A", "B", "C", "D", "A", "B", "C", "D", "A", "B"];
  var res = [];
  var res10 = [];
  for (var i = 0; i < 10; i ++) {
    rand = (Math.floor (Math.random() * [i]) );
    res.push(arr[rand]);
    while (res10.length < 10) {
      res10.push(res);
    }
  }
}
