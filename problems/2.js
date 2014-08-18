var prevprev = 1, prev = 2, val = 0;

var sum = 2;
while (true) {
	val = prevprev + prev;
	prevprev = prev;
	prev = val;

	if(val > 4000000) {
		break;
	}
	if(val%2 === 0) {
		sum+= val;
	}
}

console.log(sum);