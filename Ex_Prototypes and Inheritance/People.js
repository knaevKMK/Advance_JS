function solve() {
    class Employee {
        constructor(name, age) {
            if (new.target === Employee) {
                throw new Error('Canot instantiate directly')
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work() {

        }

        collectSalary() {
            console.log(`"${this.name} received ${this.getSalary} this month."`)
        }

        getSalary() {
            return this.salary;
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push('is working on simple task.')
        }

        work() {
            let currentTask = this.tasks.shift();
            console.log(this, name + currentTask);
            this.tasks.push(currentTask);
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push('is working on a cmplicated task.');
            this.tasks.push('is taking time off work.');
            this.tasks.push('is supervising junior workers.');
        }

    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.divident = 0;

            this.tasks.push('scheduled a meeting.')
            this.tasks.push('is preparing a quarterly report.')
        }

        getSalary() {
            return this.salary + this.divident;
        }
    }

    return {Employee, Junior, Senior, Manager};
}