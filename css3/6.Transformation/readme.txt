CSS3 enables us to move, tilt, scale any element of our web page with ease with the concept of transforms.
CSS3 supports the following transformations
    Translate
    Scale
    Rotate
    Skew



Translate
    An element can be moved to the right, left, top, bottom.
    Syntax: translate (x,y) -> moves the element to right by x-value, and y-value down from its current position.
    An element can be moved in only one direction i.e. horizontal/vertical using translateX and translateY functions.
    Example:
        translate(20px, 30px) -> moves the element to right by 20px and 30px down from the current position.
        translate(-40px, 20px) -> moves the element to left by 40px and 20px down from the current position.
        translate(-30px, -25px) -> moves the element to left by 30px and 25px up from the current position.

scale
    Syntax: scale(x,y) -> scales the element width(x-value) & height(y value)
    If only one value is supplied to the scale(value) function, then that value will be considered as both x & y parameters
    Example:
        scale(2,1) -> The width of the element will be doubled and height remains the same.
        scale(0.5) -> will decrease the element size by half
        scale(1)-> element size will remain same
        scale(2)-> doubles the element size

Rotate
    Syntax: rotate(x) -> Rotates the element. 
    If the angle specified is a positive value then the element rotates clockwise. if the angle specified is a negative value then the element rotates anti-clockwise. 
    Example:
        rotate(20deg) -> Rotates the element by 20 degrees in clockwise direction.
        rotate(-50deg) -> Rotates the element by 50 degrees in anti-clockwise direction.

Skew
    The turning/skewing is dependent on the parameters specified for the vertical & horizontal axis.
    Syntax: skew(x,y) -> skews the element from x degrees from the x-axis & y- degrees from the y-axis.
    if the y-axis value is not specified then it has a zero value.
    To skew an element across a single axis, we can use skewX() and skewY() functions.
    Example:
        skew(20deg) -> skew an element by 20 degrees across x-axis.
        skew(30deg, 10deg) -> skews an element by 30 degrees across x-axis and 10 degrees across y-axis.
        skewX(15deg) -> skews an element by 15 degrees across x-axis.
        skewY(45deg) -> skews an element by 45 degrees across y-axis.

 