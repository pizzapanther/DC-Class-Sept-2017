import pdb

def test ():
  name = "Narf"
  pdb.set_trace()
  print(name[1])
  print("done")
  
if __name__ == '__main__':
  test()
  