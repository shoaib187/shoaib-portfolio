import turtle

# Setup the screen
screen = turtle.Screen()
screen.bgcolor("white")

# Create turtle object
pen = turtle.Turtle()
pen.speed(3)  # Speed up drawing

# Function to write 'Nisha' in a handwritten-style calligraphy
def write_nisha():
    pen.penup()
    pen.goto(-150, 50)
    pen.pendown()
    pen.color("black")
    pen.write("Nisha", font=("Brush Script MT", 60, "bold"))

# Function to draw a heart shape
def draw_heart():
    pen.penup()
    pen.goto(50, 30)
    pen.pendown()
    pen.color("red")
    pen.begin_fill()
    pen.left(50)
    pen.forward(133)
    pen.circle(50, 200)
    pen.right(140)
    pen.circle(50, 200)
    pen.forward(133)
    pen.end_fill()

# Function to draw a flower beside the heart
def draw_flower():
    pen.penup()
    pen.goto(200, -30)
    pen.pendown()
    pen.color("purple")

    for _ in range(6):  # Draw 6 petals
        pen.circle(25, 60)  # Create petal
        pen.left(120)  # Rotate to draw the next petal

    # Draw the stem
    pen.color("green")
    pen.right(60)
    pen.forward(100)

# Call the functions
write_nisha()
draw_heart()
draw_flower()

# Hide the pen after drawing
pen.hideturtle()

# Finish the drawing
screen.mainloop()
