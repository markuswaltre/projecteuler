// generate primes
var pp = 2;
var primes = [];
primes.push(pp);

pp+=1
primes.push(pp);

max_numb = 1000000;
while (pp< max_numb) {
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
                           
	if (test) primes.push(pp);
}

// find primes in number
var prime = 600851475143;
var numb_primes = [];

var current = prime;
for (var i = 0; i < primes.length; i++) {
	if(Math.sqrt(primes[i]) > current) break;
	if(current%primes[i] === 0) {
		numb_primes.push(primes[i]);
		current = current/primes[i];
		console.log('prime: ' + primes[i]);
	}
}

console.log('');
console.log(current);