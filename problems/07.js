// generate primes
var pp = 2;
var primes = [];
primes.push(pp);

pp+=1
primes.push(pp);

while (primes.length < 10001) {
	pp+=2;
	var test = true;
	var sqrtpp = Math.sqrt(pp);

	for (var a = 0; a < primes.length; a++) {
		if (primes[a] > sqrtpp) break;
		if (pp%primes[a] === 0) {
			test = false;
			break;
		}
	}
                           
	if (test) {
		console.log(pp);
		primes.push(pp);
	}
}

console.log(primes.length);