function solveClasses() {
    class Developer {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.baseSalary = 1000;
            this.tasks = [];
            this.experience = 0;
        }
        addTask ( id, taskName, priority ){
            switch (priority) {
                case    "high":
                    this.tasks.unshift({id:id, taskName:taskName, priority:'high'})
                    break;
                default:
                    this.tasks.push({id:id, taskName:taskName, priority:'low'})
                    break
            }
            return `Task id ${id}, with ${priority} priority, has been added.`
        }
        doTask(){
            if(this.tasks[0].priority='high'){
                this.tasks.shift();
            }else {
                return `${this.tasks[0].firstName}, you have finished all your tasks. You can rest now.`;
            }
        }
        getSalary(){
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`
        }
        reviewTasks(){
            let result =['Tasks, that need to be completed:'];
            this.tasks.forEach(t=>result.push(`${t.id}: ${t.taskName} - ${t.priority}`));
            return result.join('\n');
        }
    }

    class Junior extends Developer{
        constructor( firstName, lastName, bonus, experience ){
            super(firstName,lastName);
            this.baseSalary+=bonus;
            this.experience=experience;
        }
        learn( years ){
            this.experience+=years;
        }
    }

    class Senior extends Developer{
        constructor( firstName, lastName, bonus, experience ){
            super(firstName,lastName);
            this.baseSalary+=bonus;
            this.experience=experience+5;
        }
        changeTaskPriority(taskId){
           let i= this.tasks.findIndex(t=>t.id===taskId);
           if (i>0){
               this.tasks[i].priority= this.tasks[i].priority==='high'? 'low': 'high';
           }
           return this.tasks[i];
        }
    }

    return {
        Developer,
        Junior,
        Senior
    }
}
let classes = solveClasses();
const developer = new classes.Developer("George", "Joestar");
console.log(developer.addTask(1, "Inspect bug", "low"));
console.log(developer.addTask(2, "Update repository", "high"));
console.log(developer.reviewTasks());
console.log(developer.getSalary());
//----------------------------------------------------------------------------
const junior = new classes.Junior("Jonathan", "Joestar", 200, 2);
console.log(junior.getSalary());
//----------------------------------------------------------------------------
const senior = new classes.Senior("Joseph", "Joestar", 200, 2);
senior.addTask(1, "Create functionality", "low");
senior.addTask(2, "Update functionality", "high");
console.log(senior.changeTaskPriority(1)["priority"]);
