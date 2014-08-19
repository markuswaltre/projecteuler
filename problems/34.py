# factorial sums
# max number: 9! = 362880, 9!*8 gives 7 number in sum 
# i never get the upper limits..

import math

def factorialSum (numb):
	tot = 0
	for a in str(numb):
		tot += math.factorial(int(a))
		if tot > numb:
			return False

	if numb == tot:
		return True
	return False

numb = 3
tot_f = 0
while numb < 10000000:
	if factorialSum(numb):
		print 'yes ', numb
		tot_f += numb
	numb += 1

print ''
print tot_f