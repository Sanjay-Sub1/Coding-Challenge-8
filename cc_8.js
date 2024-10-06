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
//Task 4 adds a method in which you can get a whole departments salary along with the bonus the manager gets as well
    calculateTotalSalaryWithBonus() {
    let salaryWithBonus = 0;

    this.employees.forEach(employee => {
        salaryWithBonus += employee.salary;
        if ('bonus' in employee) {
            salaryWithBonus += employee.bonus;
        }
        else{
            console.log('Error');   
        }
    });

    console.log(salaryWithBonus);
}
//Task 5 adds a method to get the department salary without the bonuses
    getDepartmentSalary() {
    let totalSalary = 0;
    this.employees.forEach(employee => {
        totalSalary += employee.salary;
    });
    return totalSalary;
}
}

//Task 3 creates a manager class that extendeds from the employ class
class Manager extends Employee {
    constructor(name, salary, position, department, bonus) {
        super(name, salary, position, department);
        this.bonus = bonus;
    }
//Overrides the getDetails from the original employee class to also show the bonus
    getDetails(){console.log(`${this.name},${this.position},${this.salary},${this.bonus}`)};
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
humanResources.addEmployee(employee3);
humanResources.addEmployee(employee4);

//Logs the data for employee3
console.log(employee3);

//Creates a new manager for the manager class
const manager = new Manager('Udhay', 'Sales Manager', 'Sales', 130000, 15000);
//Logs the manager details
manager.getDetails();

//Logs the total salary of the HR department
console.log(humanResources.calculateTotalSalaryWithBonus());

//Creates 2 new departments for IT and PR
const publicRelations = new Department('PR');
const InfoTech = new Department('IT');

//Creates 2 new employees and 1 new manager for the PR department
const employee5 = new Employee('Alice', 'PR Coordinator', 'PR', 100000);
const employee6 = new Employee('Bob', 'PR Coordinator', 'PR', 90000);
const manager1 = new Manager('Charlie', 'PR Manager', 'PR', 120000, 20000);

//Creates 2 new employees and 1 new manager for the IT departemnt
const employee7 = new Employee('David', 'IT Assistant', 'IT', 65000);
const employee8 = new Employee('Eve', 'IT Technician', 'IT', 80000);
const manager2 = new Manager('Frank', 'IT Manager', 'IT', 110000, 15000);

//Adds the created employees into the PR department through the class
publicRelations.addEmployee(employee5);
publicRelations.addEmployee(employee6);
publicRelations.addEmployee(manager1);

//Adds the created employees into the IT department through the class
InfoTech.addEmployee(employee7);
InfoTech.addEmployee(employee8);
InfoTech.addEmployee(manager2);

//Shows total salaries for the PR department
console.log(publicRelations.getDepartmentSalary());
console.log(publicRelations.calculateTotalSalaryWithBonus());

//Shows total salaries for the IT department
console.log(InfoTech.getDepartmentSalary());
console.log(InfoTech.calculateTotalSalaryWithBonus());
