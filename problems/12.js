
var sum = 0;
var number = 1;
while(sum+=number) {
	number+=1;

	if(divisors(sum) > 500) {
		console.log(sum);
		break;
	}
}

function divisors (number) {
	var div = 0;
	
	for(var i=0; i<=number; i++) {
		if(number%i === 0) div++;
	}
	console.log(div);
	return div;
}

/* 	this is waaaayyy too slow 
	found something like 380 divisor in 15min
*/