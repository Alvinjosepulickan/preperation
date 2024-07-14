var service = /** @class */ (function () {
    function service() {
        this.age = 10;
        this.name = 'Babu';
    }
    service.prototype.display = function (a) {
        console.log("Name is ".concat(this.name, " and age is ").concat(this.age));
    };
    return service;
}());
var j = new service();
j.display(1);
