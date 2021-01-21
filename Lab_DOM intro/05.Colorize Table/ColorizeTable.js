function colorize() {
        let rows=(document.getElementsByTagName('tr'));
    rows=[...rows];
      for (let index = 1; index < rows.length; index+=2) {
          rows[index].style.background='teal';

      }
    // let rows = document.querySelectorAll("table tr");
    // let index = 0;
    // for (let row of rows) {
    //     index++;
    //     if (index % 2 == 0)
    //         row.style.background = "teal";
    // }
}