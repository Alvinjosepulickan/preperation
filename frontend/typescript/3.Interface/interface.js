var Employee = /** @class */ (function () {
    function Employee(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
        Employee.EmployeeId++;
        this.empId = Employee.EmployeeId;
    }
    Employee.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old and EmpId is ").concat(this.empId, "."));
    };
    Employee.EmployeeId = 10;
    return Employee;
}());
var emp = new Employee('Peter', 10, 'SSE');
emp.greet();
var emp1 = new Employee('Peter', 10, 'SSE');
emp1.greet();
