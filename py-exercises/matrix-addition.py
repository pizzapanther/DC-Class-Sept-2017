m1 = [
  [1, 3],
  [2, 4],
]

m2 = [
  [5, 2],
  [1, 0],
]

answer = []
for i in range(0, len(m1)):
  row = m1[i]
  temp = []
  
  for j in range(0, len(row)):
    print(i, j)
    ans[i][j] = m1[i][j] + m2[i][j]
    temp.append(ans)
    
  answer.append(temp)
  
print(answer)
