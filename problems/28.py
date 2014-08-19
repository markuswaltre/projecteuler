SIZE = 5
Matrix = [[0 for x in xrange(SIZE)] for x in xrange(SIZE)] 

x = 0
y = SIZE-1
numb = SIZE*SIZE

left = True
down = False
right = False
up = False

left_m = 0
down_m = 0
right_m = 0
up_m = 1

while True:
	print numb, ' ', x, ' ', y
	Matrix[x][y] = numb
	numb -= 1

	if (x == 1 and y == 3): 
		print 'breaks'
		break
	if left:
		if y == (0+left_m):
			left_m += 1
			left = False
			down = True
		y -= 1

	if right:
		if y == (SIZE-1-right_m):
			right_m += 1
			right = False
			up = True
		y += 1

	if down:
		if x == (SIZE-1-down_m):
			down_m += 1
			down = False
			right = True
		x += 1

	if up:
		if x == (0+up_m):
			up_m += 1
			up = False
			left = True
		x -= 1
			



# for x in xrange(SIZE):
# 	Matrix[0][x] = 1

print Matrix
