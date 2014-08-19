# circular primes

# from wikipedia
def isPrime(num):
    if num <= 3:
        if num <= 1:
            return False
        return True
    if not num % 2 or not num % 3:
        return False
    for i in range(5, int(num ** 0.5) + 1, 6):   
        if not num % i or not num % (i + 2):
            return False
    return True
# end from wiki

# from stackoverflow
def rotate(strg,n):
    return strg[n:] + strg[:n]
# end stackoverflow


def allRotations(numb):
	a = str(numb)
	if len(a) == 1:
		return True #nothing to rotate

	for i in xrange(len(a)):
		tmp = rotate(a, i)
		if not isPrime(int(tmp)):
			return False

	return True


numb = 2
count = 0
while numb < 1000000:
	if isPrime(numb):
		if allRotations(numb):
			print numb
			count += 1
	numb += 1

print ''
print count