var t = new Big(2);
for(var i = 1; i < 1000; i++) {
	t *= 2;
}
var b = new Big(t);
console.log(b.toPrecision(200));

// // ugly hack, copy paste from console
// var arr = '10715086071862673'.toString().split('');

// var sum = 0;
// for(var i=0; i<arr.length; i++) {
// 	sum += parseInt(arr[i]);
// }

// console.log(sum);

// the functions cut the precision, so I end up finding 000 everywhere
