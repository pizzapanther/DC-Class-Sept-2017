from turtle import *

def star ():
  for i in range(5):
    forward(100)
    right(144)
    
def draw_circle(w):
  pencolor('orange')
  width(w)
  circle(180)
  
# move into position
up()
forward(50)
left(90)
forward(50)
left(90)
down()

# draw the square
forward(100)
left(90)
forward(100)
left(90)
forward(100)
left(90)
forward(100)

draw_circle(10)
draw_circle(20)

star()
star()

mainloop()
