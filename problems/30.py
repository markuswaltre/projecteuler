# power to 5
# need to find a upper limit

import math

def fifthed (numb):
	tot = 0
	for x in str(numb):
		tot += math.pow(int(x), 5)
	return tot

numb = 2
tot = 0
while numb < 1000000: # break on something (just arbitrarily tried something big..)
	if numb == fifthed(numb):
		print '%s is a special number' % (numb)
		tot += numb
	numb += 1

print ''
print tot