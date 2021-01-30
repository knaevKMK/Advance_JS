function solve() {
    let [input, open, inProgress, completed] = (document.querySelectorAll('section'));

    const btn = document.getElementById('add');
    btn.addEventListener('click', function() {
        let task = input.querySelector('#task');
        let description = input.querySelector('#description');
        let time = input.querySelector('#date');

    })
    let currentTime = new Date;
    // currentTime.getDate();
    console.log(currentTime.getFullYear());
    console.log(currentTime.getMonth() + 1);
    console.log(currentTime.getDate());
    console.log(input);
    // console.log(open);
    // console.log(inProgress);
    // console.log(completed);
}