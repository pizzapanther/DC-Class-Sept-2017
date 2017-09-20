class Person:
  def __init__ (self, name):
    self.name = name
    self.count = 0
    
  def greet (self):
    self._greet()
    
  def _greet (self):
    self.count += 1
    if self.count > 1:
      print("Stop being so nice")
      self.__reset_count()
    else:
      print("Hello", self.name)
      
  def __reset_count(self):
    self.count = 0
    