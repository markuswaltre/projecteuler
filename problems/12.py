sum = 0
number = 1

def divisors (number):
	div = 0
	
	for i in range (1, (number + 1)):
		if number%i == 0:
			div+=1

	return div

while True:
	sum+=number
	number+=1

	if divisors(sum) > 500:
		print sum
		break