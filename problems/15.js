// ---- try 3 like pascal triangle
// inspired by http://mozartreina.com/counting-lattice-paths.html

var size = 20;

// create grid
var grid = new Array(size);
for (var i = 0; i <= size; i++) {
	grid[i] = new Array(size);
}

// initialize with ones at top and left
for(var column=0; column<=size; column++) {
	for(var row=0; row<=size; row++) {
		if(row === 0) {
			grid[column][row] = 1;
		} else if (column === 0) {
			grid[column][row] = 1;
		} else {
			grid[column][row] = 0;
		}
	}
}

// traverse through and update steps
for(var column=1; column<=size; column++) {
	for(var row=1; row<=size; row++) {
		grid[column][row] = grid[column-1][row] + grid[column][row-1];
	}
}

console.log(grid[size][size]);

// 
// stuff below didn't work
// 

/*
// ---- try 1 option
on column 20 - only down
on row 20 - only right

var options = 0;
var edges = 0;
grid:
for(var column=0; column<=size; column++) {
	for(var row=0; row<=size; row++) {
		// step right
		// step down
		// two options if not end case
		edges++;
		console.log(edges);
		if(row != size && column != size) {
			options +=1;
		} else if (row == size && column == size) {
			break grid; // done
		} else {
			options +=2;
		}
	}
}

console.log(options);

// ---- try 2 recursive solution

var solutions = 0;
function newStep (x, y) {
	// goal
	if(x === size && y === size) {
		solutions++;
	}
	else {
		// down
		if(x !== size) newStep(x+1, y);

		// right
		if(y !== size) newStep(x, y+1);
	}
}
newStep(0, 0);

console.log(solutions);

*/






















