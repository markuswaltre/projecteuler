# a^b 2:100, 2:100
import math

SIZE = 100
arr = []
for a in range(2, SIZE+1):
	for b in range (2, SIZE+1):
		arr.append(math.pow(a,b))

print len(set(arr))