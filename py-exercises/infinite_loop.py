while True:
  try:
    x = int(input("Please enter a number: "))
    
  except ValueError:
    print("Oops!  That was no valid number.  Try again...")
    
  except MemoryError:
    raise MemoryError('Close Your Facebook it\s all memory')
    
  else:
    x = x + 10
    print(x)
    break
    
  finally:
    print('always executed')
    
