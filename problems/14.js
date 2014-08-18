// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

var max = 1000000;
var max_chain = 1;
var max_chain_number;

for(var i=max; i>1; i--) {
	var l = chainLength(i);
	if(l > max_chain) {
		max_chain = l;
		max_chain_number = i;
	}
}

function chainLength (n) {
	var chain = 1;
	while(n !== 1) {
		// even
		if(n%2 === 0) {
			n = n/2;
		} else { // odd
			n = 3*n + 1;
		}

		chain++;
	}
	return chain;
}

console.log(max_chain);
console.log(max_chain_number);