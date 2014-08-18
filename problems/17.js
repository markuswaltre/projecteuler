var a = { 	0: 0,
			1: 3, 2: 3, 3: 5, 4: 4, 5: 4, 6: 3, 7: 5, 8: 5, 9: 4, 10: 3,
			11: 6, 12: 6, 13: 8, 14: 8, 15: 7, 16: 7, 17: 9, 18: 8, 19: 8, 20: 6,
			30: 6, 40: 5, 50: 5, 60: 5, 70: 7, 80: 6, 90: 6, 100: 7, 1000: 11 // 100 : hundred, not one-hundred
		};

for(var i=21; i<100; i++) {
	var num = i.toString().split('');
	var twodig = parseInt(num[0] + '0');
	var onedig = parseInt(num[1]);
	a[i] = a[onedig] + a[twodig];
}

var size = 1000;

var sum = 0;
for(var i = 1; i<=size; i++) {
	sum += sumOfNumber(i);
}
console.log(sum);

function sumOfNumber (number) {
	var sum = 0;
	if(number === 1000) {
		sum = a[number];
	}
	else if(number > 99) {
		var n = number;
		n = n.toString().substr(0,1);
		sum += a[n];
		sum += a[100];

		var rest = a[number - (n*100)];
		if(rest > 0) {
			sum += 3; // and
			sum += rest;
		}
	}
	else {
		sum = a[number];
	}

	return sum;
}