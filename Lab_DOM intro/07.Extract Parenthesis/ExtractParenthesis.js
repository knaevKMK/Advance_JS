function extract(id) {
    const text = document.getElementById(id).textContent;
    let result = [];//'';
    let regex = /\((.*?)\)/g;
    let matcher = regex.exec(text);

    while (matcher) {
        //  result+=(matcher[1] + '; ');
        result.push(matcher[1]);
        matcher = regex.exec(text);
    }
    // result = result.join(';');
    // document.getElementById('content').textContent += result;
    return result.join('; ');
}