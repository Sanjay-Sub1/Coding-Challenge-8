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

//Adds 2 new employees into the class
const employee1 = new Employee('Sanjay', 150000, 'Sales VP', 'Sales');
const employee2 = new Employee('Sander', 85000, 'Director', 'Marketing');

//Logs both employees using the getDetails method
console.log(employee1.getDetails());
console.log(employee2.getDetails());
