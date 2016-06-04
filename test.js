
var printprimary = function (level){
for (var i = 0;i < level;i++){
  var arr = new Array(i+2);
 console.log(arr.join('*')); 
  }
}
printprimary(10);

var counter = 0
setInterval(function() {
  counter++;
  console.log(counter);
  document.write(counter);
}, 500);
