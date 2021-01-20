function fromJSONToHTMLTable(input) {
    let arr = JSON.parse(input);

    let outputArr = ['<table>'];
    outputArr.push(makeKeyRow(arr));
    arr.forEach((obj) => outputArr.push(makeValuewRow(obj)));
    outputArr.push('</table>');
    function makeKeyRow(arr) {
        let temp = arr[0];
        let result = '<tr>';
        Object.keys(temp).forEach(key => result += `<th>${key}</th>`);
        result += '</tr>';
        return result;
    };
    function makeValuewRow(obj) {

let result = '<tr>';
        Object.keys(obj).forEach(key => result += `<td>${obj[key]}</td>`);
        result += '</tr>';
        return result;
     };
    function escapeHtml(value) { };
    console.log(outputArr.join('\n'));
}
fromJSONToHTMLTable(`[
    {
        "Name": "Pesho",
        "Score": 4,
        "Grade": 8
    },
    {
        "Name": "Gosho",
        "Score": 5,
        "Grade": 8
    },
    {
        "Name": "Angel",
        "Score": 5.50,
        "Grade": 10
    }
]`);


