var amic = [];

function sumDivisors (number) {
	var sum = 0;
	for(var i=0; i<number; i++) {
		if(number%i === 0) {
			sum += i;
		}
	}
	return sum;
}

function amicableNumber (number) {
	var t = sumDivisors(number);
	var b = sumDivisors(t);
	if(number === b) {
		if(amic.indexOf(number) === -1) {
			amic.push(number); 
			amic.push(t);

			if(number === t) {
				return 0;
			} else {
				return (number + t);
			}
		}		
	}
	return 0;
}

var size = 10000;
var sum = 0;
for(var i=1; i<=size; i++) {
	sum += amicableNumber(i);
}
console.log(sum);