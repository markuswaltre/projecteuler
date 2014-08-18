var number = 2520;

// can skip 2
var n = 2;
while(n+=2) {
	var found = true;
	for(var i=2; i<=20; i++) {
		if(n%i !== 0) {
			found = false;
			break;
		}
	}

	if(found) {
		console.log('found number: ' + n);
		break;
	}
}