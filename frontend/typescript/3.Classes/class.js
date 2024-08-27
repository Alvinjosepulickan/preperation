var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.draw = function (x, y, color) {
        if (color !== undefined) {
            console.log("base Drawing at (".concat(x, ", ").concat(y, ") with color ").concat(color));
        }
        else {
            console.log("base Drawing at (".concat(x, ", ").concat(y, ") with default color"));
        }
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.draw = function (x, y, color) {
        // Override the base class method
        if (color !== undefined) {
            console.log("Drawing a circle at (".concat(x, ", ").concat(y, ") with radius ").concat(this.radius, " and color ").concat(color));
            _super.prototype.draw.call(this, x, y);
        }
        else {
            console.log("Drawing a circle at (".concat(x, ", ").concat(y, ") with radius ").concat(this.radius, " and default color"));
        }
    };
    return Circle;
}(Shape));
var shape = new Shape();
shape.draw(10, 20); // Output: Drawing at (10, 20) with default color
shape.draw(10, 20, 'red'); // Output: Drawing at (10, 20) with color red
var circle = new Circle(5);
circle.draw(15, 25); // Output: Drawing a circle at (15, 25) with radius 5 and default color
circle.draw(15, 25, 'blue'); // Output: Drawing a circle at (15, 25) with radius 5 and color blue
