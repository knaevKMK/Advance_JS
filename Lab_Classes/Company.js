class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        this._validateStr(username);
        this._validateStr(position);
        this._validateStr(department);
        this._validateNum(salary);

        let exist = false;
        for (let department1 of this.departments) {

            if (department1.department === department) {
                exist = true;
                department1.employees.push({name: username, salary: salary, position: position})
                break;
            }
        }
        if (!exist) {
            this.departments.push({
                department: department,
                employees: [{name: username, salary: salary, position: position}]
            });
        }
        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDepart = this.departments
            .map(depart => {
                let totalsalary = 0;
                depart.employees.forEach(empl => totalsalary += empl.salary);
                return [depart.department, totalsalary / depart.employees.length];
            })
            .sort((a, b) => b[1] - a[1]);

        let result = [];
        result.push(`Best Department is: ${bestDepart[0][0]}`);
        result.push(`Average salary: ${bestDepart[0][1].toFixed(2)}`);
        let temp = this.departments.filter(dep => dep.department === bestDepart[0][0]);
         temp[0].employees
             .sort((a,b)=>b.salary-a.salary)
             .forEach(employee=>{
          result.push(`${employee.name} ${employee.salary} ${employee.position}`)
        });
        return result.join('\n')
    }

    _validateNum(num) {
        if (num < 0) {
            throw new Error('Invalid input!');
        }
    }

    _validateStr(temp) {
        if (temp === '' || temp === null || temp === undefined) {
            throw new Error('Invalid input!');
        }
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
