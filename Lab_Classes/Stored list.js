class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(elemenent) {
        this.list.push(elemenent);
        this.list.sort((x, y) => x - y);
        this.size++;
    }

    remove(index) {// removes the element at position index
        if (index >= 0 && index < this.size) {
            this.list.splice(index, 1);
            this.size--;
        }
    }

    get(index) {
        if (index >= 0 && index < this.size) {
            return this.list[index];
        }
    }

}


let    list = new List();
list    .add(
        5
    )
;
list
    .add(
        6
    )
;
list
    .add(
        7
    )
;
console
    .log(list

        .get(
            1
        ))
;
list
    .remove(
        1
    )
;
console
    .log(list

        .get(
            1
        ))
;
console
    .log(list

        .size
    )
;
