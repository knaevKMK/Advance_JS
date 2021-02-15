// first zero test

document.body.innerHTML = `
<main class="container">
        <section class="user-view section-view">
            <h1>Trainings</h1>
            <div class="modules">
            </div>
        </section>
        <section class="admin-view section-view">
            <h1>Administration</h1>
            <div class="actions">
                <div class="action">
                    <h3>Add New Lecture</h3>
                    <form>
                        <div class="form-control">
                            <label>
                                Lecture name:
                            </label>
                            <input type="text" name="lecture-name">
                        </div>
                        <div class="form-control">
                            <label>
                                Date:
                            </label>
                            <input type="datetime-local" name="lecture-date">
                        </div>
                        <div class="form-control">
                            <label>Module:</label>
                            <select name="lecture-module">
                                <option value="Select module" selected>Select module...</option>
                                <option value="Basics" selected>Basics</option>
                                <option value="Fundamentals" selected>Fundamentals</option>
                                <option value="Advanced" selected>Advanced</option>
                                <option value="DB" selected>DB</option>
                                <option value="Web" selected>Web</option>
                            </select>
                        </div>
                        <div class="form-control">
                            <button>Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </main>
`;

result();

let elements = {
    form: document.getElementsByTagName('form')[0],
    name: document.querySelector('input[name="lecture-name"]'),
    date: document.querySelector('input[name="lecture-date"]'),
    module: document.querySelector('select[name="lecture-module"]'),
    addBtn: document.querySelector('form button'),
    modulesDiv: document.querySelector('.modules'),
    moduleList: () => Array.from(document.querySelectorAll('.module')),
    listItems: () => Array.from(document.querySelectorAll('.flex')),
}

elements.name.value = "DOM";
elements.date.value = "2020-09-28T18:00";
elements.module.value = "Advanced";

elements.addBtn.click();

assert.equal(elements.moduleList()[0].children[0].textContent, 'ADVANCED-MODULE', 'Module name incorrect');

elements.name.value = "Arrays";
elements.date.value = "2020-09-17T18:00";
elements.module.value = "Advanced";

elements.addBtn.click();
assert.equal(elements.moduleList().length, 1, 'Incorrect amount of modules');
assert.equal(elements.listItems()[0].children[0].textContent, 'Arrays - 2020/09/17 - 18:00', 'Incorrect lecture appended');

elements.name.value = "Arrays";
elements.date.value = "2020-09-30T18:30";
elements.module.value = "Fundamentals";

elements.addBtn.click();

assert.equal(elements.listItems()[0].children[1].className, 'red', 'Incorrect className');