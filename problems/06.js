var number = 100;

var sum1 = 0, sum2 = 0;
for(var i = 1; i <= number; i++) {
	sum1 += i*i;
	sum2 += i;
}

sum2 = sum2*sum2;

var diff = sum2 - sum1;
console.log(diff);