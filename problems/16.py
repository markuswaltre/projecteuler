import math

a = math.pow(2, 1000)
b = str(format(a, '.0f'))

sum = 0
for x in b:
	sum += int(x)

print sum