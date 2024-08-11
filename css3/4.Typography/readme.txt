Typography refers to the art of arranging type.

Elements of good typography included
    Color: Background and text-color
    Spacing: letter-spacing,line-height
    Font: font-style and font-size
    Alignment:  text-align



Color Models 
    color models have been introduced by using which we can customize the default color of HTML element with opacity property.

    div
    {
    background-color:red;
    opacity:0.5;
    }

    RGBA Color Model
        Red, Green, Blue, Alpha-> opacity
        #child
        {
            background-color:RGBA(128,128,128,0.5);
            border: 1px solid white;
            height:200px;
            margin-left:50px;
            margin-top:50px;
            width:400px;
            color:white;
        }

    HSL and HSLA Color Models
        hue, saturation, lightness, alpha
        hue: The color’s hue, represented as an angle in degrees on the color wheel. This ranges from 0deg to 360deg. For example, 0deg is red, 120deg is green, and 240deg is blue.
        saturation: The intensity of the color. It is represented as a percentage, where 0% is a shade of gray and 100% is the full color.
        lightness: The brightness of the color, also represented as a percentage. 0% is completely black, 100% is completely white, and 50% is the pure color.
        alpha: The opacity of the color, represented as a decimal between 0 (completely transparent) and 1 (completely opaque). You can also use percentages (0% to 100%).

CSS Units : Absolute units
    Units   Description
    cm      centimeters
    mm      millimeters
    in      inches (1in = 96px = 2.54cm)
    px      pixels (1px = 1/96th of 1in)
    pt      points (1pt = 1/72 of 1in)
    pc      picas (1pc = 12 pt)
    em      Relative to the Parent Element
    rem     Relative to the Root Element
    ex      Relative to the x-height of the current font
    vw      Relative to 1% of the width of the viewport
    vh      Relative to 1% of the height of the viewport
    %       Relative to the parent element

Font Properties
    font-family: "comic sans ms", Arial;
    font-style: italic;
    font-variant: small-caps;
    font-size: x-small;
    font-size: 20px;
    font-weight: bold;
    line-height: 10px;
    line-height: 1cm;
    line-height: 0.5;

Text Properties
    text-align: right;
    text-decoration: underline;
    text-transform: capitalize;
    letter-spacing: 90px;
    word-spacing: 90px;
    text-indent: 90px;
    text-shadow: 10px 6px 2px black;

