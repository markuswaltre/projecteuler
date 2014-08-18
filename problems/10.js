// generate primes
var pp = 2;
var primes = [];
primes.push(pp);

pp+=1
primes.push(pp);

var sum = 5;
max_numb = 2000000;
while (pp < max_numb) {
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
		primes.push(pp);
		sum += pp;
	}
}

console.log(primes.length)
console.log(primes[primes.length-1])
console.log(sum);
