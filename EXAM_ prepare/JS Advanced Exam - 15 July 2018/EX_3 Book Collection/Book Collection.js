class BookCollection {
    constructor(room, shelfGenre, shelfCapacity) {
        if (shelfGenre === 'livingRoom' || shelfGenre === 'bedRoom' || shelfGenre === 'closet') {

        this.room = room;
        this.shelfGenre = shelfGenre;
        this.shelfCapacity = shelfCapacity;
        this.shelf = [];
        }else {
        throw Error
            (`Cannot have book shelf in ${room}`);}
    }

    addBook(bookName, bookAuthor, genre) {
        if (this.shelfCapacity === this.shelf.length) {
            this.shelf.shift();
        }
        let temp = {bookName: bookName, bookAuthor: bookAuthor};
        if (genre){
            temp. genre= genre;
        }
        this.shelf.push(temp);
        this.shelf= this.shelf.sort((a, b) => a.bookAuthor.localeCompare(b.bookAuthor));
         return this;
    }

    throwAwayBook(bookName) {
        let index = this.shelf.indexOf(x => x.bookName === bookName);
        this.shelf.splice(index, 1);
        return this;
    }

    showBooks(genre) {
        let result= [`Results for search "${genre}":`]
        this.shelf
            .filter(s=>s.genre===genre)
            .forEach(s => result.push(`\uD83D\uDCD6 ${s.bookAuthor} - "${s.bookName}"`));
        return result.join('\n');
    }

    get shelfCondition() {
    return this.shelfCapacity-this.shelf.length;
    }

    toString() {
        if (this.shelf.length === 0) {

            return 'It\'s an empty shelf';
        }
        let result = [`"${this.room}" shelf in ${this.shelfGenre} contains:`];
        this.shelf.forEach(s => result.push(`\uD83D\uDCD6 "${s.bookName}" - ${s.bookAuthor}`));
        return result.join('\n');
    }
}

let livingRoom = new BookCollection("Programming", "livingRoom", 5)
    .addBook("Introduction to Programming with C#", "Svetlin Nakov")
    .addBook("Introduction to Programming with Java", "Svetlin Nakov")
    .addBook("Programming for .NET Framework", "Svetlin Nakov");
console.log(livingRoom.toString());

//let garden = new BookCollection("Programming", "garden");

let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
bedRoom.addBook("John Adams", "David McCullough", "history");
bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
console.log("Shelf's capacity: " + bedRoom.shelfCondition);
console.log(bedRoom.showBooks("history"));
