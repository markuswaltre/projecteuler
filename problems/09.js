// pythagorean triplet
// formula: a^2 + b^2 = c^2
// condition: a + b + c = 1000
// find product abc

var max = 1000;

var solution = {};

max_loop:
for(var i = 1; i < (max - 2); i++) {
	for(var j=1; j < (max - 1 - i); j++) {
		if(isPythagorean(i, j)) {
			break max_loop;
		}
	}
}

function isPythagorean (a, b) {
	var c = max - a - b;
	if(a*a + b*b === c*c) {
		solution.a = a;
		solution.b = b;
		solution.c = c;
		return true;
	}
	return false;
}

console.log(solution.a);
console.log(solution.b);
console.log(solution.c);
console.log((solution.a + solution.b + solution.c));
console.log((solution.a*solution.b*solution.c));