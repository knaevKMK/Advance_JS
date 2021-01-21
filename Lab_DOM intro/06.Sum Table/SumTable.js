function sumTable() {
    let table = document.getElementsByTagName('tr');
    table = [...table];
    table = table.slice(1, -1);
    let sum = 0;
    for (const row of table) {
        let cells = row.children;
        let cell = cells[cells.length - 1].textContent;
        sum += Number(cell);
    }
    document.getElementById('sum').textContent = sum;
}