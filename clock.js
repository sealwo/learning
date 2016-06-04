var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
/*
context.fillStyle= 'green';
context.fillRect(0,0, 200, 200);
context.clearRect(0,100,100,100);
context.clearRect(100,0,100,100);
*/
context.font = "20px Georgia";

var paintOutline = function() {
  context.beginPath();
  context.arc(100,100,100,0,2*Math.PI);
  context.stroke();
};

var paintNumbers = function() {
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  numbers.forEach(function(number) {
    var x = 100 * (1 + Math.sin(Math.PI / 6 * number));
    var y = 100 * (1 - Math.cos(Math.PI / 6 * number));
    context.strokeText(number, x,  y) ;
  });
};

var second = 0;
var render = function() {
  context.clearRect(0, 0, 200, 200);

  paintOutline();
  paintNumbers();

  var x = 100 * (1 + Math.sin(Math.PI / 6 * second));
  var y = 100 * (1 - Math.cos(Math.PI / 6 * second));

  context.moveTo(100, 100);
  context.lineTo(x, y);
  context.stroke();
  second++;
};
render();

setInterval(render, 1000);
