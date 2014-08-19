f1 = 1
f2 = 1

next = 0
count = 2

while len(str(next)) < 1000:
	next = f1 + f2
	f2 = f1
	f1 = next

	print next
	count+=1

print ''
print count
