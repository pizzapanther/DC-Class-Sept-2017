# [2, 4, 5] x [2, 3, 6] = [4, 12, 30]

m1 = [2, 4, 5]
m2 = [2, 3, 6]

answer = []

for i in range(0, len(m1)):
  ans = m1[i] * m2[i]
  print(i, m1[i], m2[i], ans)
  answer.append(ans)
  
print(answer)

answer = []

for i, num1 in enumerate(m1):
  ans = num1 * m2[i]
  answer.append(ans)
  
print(answer)
