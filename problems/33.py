from decimal import *

def hasCommon (a, b):
	arr = [False, False, False, False, False, False, False, False, False, False]
	for i in str(a):
		arr[int(i)] = True

	for j in str(b):
		if(arr[int(j)]):
			return int(j)

	return -1

def inexperiencedCancel (a, b, common):
	if common == 0:
		return False
	temp1 = -1
	temp2 = -1
	for i in str(a):
		if not int(i) == common:
			temp1 = int(i)

	for j in str(b):
		if not int(j) == common:
			temp2 = int(j)

	if temp1 == 0 or temp2 == 0:
		return False
	if Decimal(temp1)/Decimal(temp2) == Decimal(a)/Decimal(b):
		return True

	return False


top = 1
bottom = 1
for x in range(10,99):
	for y in range(x+1,99+1):
		a = hasCommon(x, y)
		if not a == -1:
			if inexperiencedCancel(x, y, a):
				top *= x
				bottom *= y
				print 'works', x, ' ', y, ' ', a, ' ', (Decimal(x)/Decimal(y))

print top
print bottom
print Decimal(top)/Decimal(bottom)



