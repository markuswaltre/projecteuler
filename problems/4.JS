// palindrome 2 three digits
// 900-100

var max = 999, min = 100;
var biggest = 0;

for(var i = max; i > min; i--) {
	for(var j = max; j > min; j--) {
		if(checkPalindrome(i, j)) {
			if(i*j > biggest) biggest = i*j;
		}
	}
}

function checkPalindrome (a, b) {
	var t = a*b;
	if(t == reverse(t)) {
		return true;
	}
	return false;
}

function reverse(s){
    return s.toString().split("").reverse().join("");
}

console.log(biggest);