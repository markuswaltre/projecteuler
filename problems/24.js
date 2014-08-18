// lexicographic permutations
// smallest number combinations
// 0 - 9
// 0123456789
// 10! pos

// test 0 1 2

// var o = ['0', '1', '2'];
// var per = [], value;
// while(per.indexOf(value) === -1) {
// 	var s = o[0] + o[1] + o[2];
// 	var s = o[0] + o[2] + o[1];

// 	var s = o[1] + o[0] + o[2];
// 	var s = o[1] + o[2] + o[0];

// 	var s = o[2] + o[1] + o[0];
// 	var s = o[2] + o[0] + o[1];
// }

for(var i=0; i<=2; i++) {
	for(var j=0; j<=2; j++) {
		for(var b=0; b<=2; b++) {
			if(i===b || i===j || j===b) {

			} else {
				console.log(i + ' ' + j + ' ' + b);
			}
		}
	}
}

// lol works for 2, but 9? not good