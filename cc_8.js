//Task 1 creates a class :Employee"
class Employee{
    constructor(name, position, department, salary){
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.salary = salary;
    }
    getDetails(){console.log(`${this.name},${this.position},${this.salary}`)}
}

const employee1 = new Employee('Sanjay', 150000, 'Sales VP', 'Sales');
const employee2 = new Employee('Sander', 85000, 'Director', 'Marketing');

console.log(employee1.getDetails());
console.log(emp2.getDetails());
