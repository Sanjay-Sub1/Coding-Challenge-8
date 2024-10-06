//Task 1 creates a class :Employee" with a position, department, and salary
class Employee{
    constructor(name, position, department, salary){
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.salary = salary;
    }
//Has a getDetails method to grab details of certain employees 
    getDetails(){console.log(`${this.name},${this.position},${this.salary}`)}
}

//Task 2 create a class Department that you can add employees to
class Department{
    constructor(name){
        this.name = name;
        this.employees = [];
    }
//Creates a method to add a new employee into the class Department
addEmployee(employee){
    const isEmployee = ['name','position','department', 'salary'];

    if (isEmployee){
        this.employees.push(employee);
    }
    else{
        console.log("Error");
    }
}
}

//Adds 2 new employees into the class
const employee1 = new Employee('Sanjay', 150000, 'Sales VP', 'Sales');
const employee2 = new Employee('Sander', 85000, 'Director', 'Marketing');

//Logs both employees using the getDetails method
console.log(employee1.getDetails());
console.log(employee2.getDetails());

//Creating a new department as well as 2 new employees
const humanResources = new Department('HR');
const employee3 = new Employee('Charles','Assistant' , 'HR', 80000);
const employee4 = new Employee('Leila', 'Manager', 'HR', 130000);

//Using the addEmployee method to add our newly created emplyoees into the class
engineering.addEmployee(employee3);
engineering.addEmployee(employee4);

//Logs the data for employee3
console.log(employee3);
