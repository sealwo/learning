
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
}, 500)
<table border="1">
<tr>
<td>row 1, cell 1</td>
<td>row 1, cell 2</td>
</tr>
<tr>
<td></td>
<td>row 2, cell 2</td>
</tr>
</table><table border="1">
<tr>
<td>row 1, cell 1</td>
<td>row 1, cell 2</td>
</tr>
<tr>
<td></td>
<td>row 2, cell 2</td>
</tr>
</table><table border="1">
<tr>
<td>row 1, cell 1</td>
<td>row 1, cell 2</td>
</tr>
<tr>
<td></td>
<td>row 2, cell 2</td>
</tr>
</table>;
