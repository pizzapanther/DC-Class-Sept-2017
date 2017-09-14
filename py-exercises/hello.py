printed_hello = False

def display_hello():
  global printed_hello
  print(printed_hello)
  print('Hello')
  printed_hello = True
  
print(__name__)
if __name__ == "__main__":
  print(printed_hello)
  display_hello()
  print(printed_hello)