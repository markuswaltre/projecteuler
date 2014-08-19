# where all numbers are captured
# x * y = z
# len x + len y + len z = 9
# 2 + 3 + 4
# 1 + 3 + 5
# minimum 5 is 12345, 9 * 876 - not poss
# 10 - 99, 100-999

def passFirst (a, b):
	arr = [0, False, False, False, False, False, False, False, False, False] # 0 not used, 1-9
	for i in str(a):
		arr[int(i)] = True

	for j in str(b):
		if(arr[int(j)]):
			return False

	return True

def testNumb(x):
	arr = [0, False, False, False, False, False, False, False, False, False] # 0 not used, 1-9
	for i in str(x):
		if(int(i) == 0):
			return False
		if(arr[int(i)]):
			return False
		else:
			arr[int(i)] = True

	return True

def checkPandigital (a, b, tot):
	if not testNumb(tot) or len(str(tot)) > 4:
		return False

	arr = [True, False, False, False, False, False, False, False, False, False] # 0 not used, 1-9
	for i in str(a):
		arr[int(i)] = True

	for j in str(b):
		if(arr[int(j)]):
			return False
		else:
			arr[int(j)] = True

	for l in str(tot):
		if(arr[int(l)]):
			return False
		else:
			arr[int(l)] = True

	if all(item == True for item in arr):
		return True
	else: 
		return False



pandigitals = []
for x in range(1, 99):
	if not testNumb(x):
		continue
	for y in range (99, 9999):
		if not testNumb(y):
			continue
		if passFirst(x, y):
			tot = x*y
			if checkPandigital(x, y, tot):
				pandigitals.append(tot)
				print 'pandigital %s, %s, %s' % (x, y, tot)

pan_tot = 0
print pandigitals
print set(pandigitals)
for x in set(pandigitals):
	pan_tot += x

print ''
print pan_tot


