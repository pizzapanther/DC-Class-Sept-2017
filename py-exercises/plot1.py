from matplotlib import pyplot

def g(x):
  return x + 1
  
def f(x):
  return 2 * x + 1

f_output = []
g_output = []

x_list = list(range(-30, 50))

for x in x_list:
  f_output.append(f(x))
  g_output.append(g(x))

pyplot.plot(x_list, f_output, x_list, g_output)
pyplot.show()
