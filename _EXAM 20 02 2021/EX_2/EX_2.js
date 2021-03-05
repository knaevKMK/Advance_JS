class Story {

    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];

        // this._likes = [];
        //- private property (empty array by default)
        this._likes = [];
        //- private property (empty array by default)
    }

    set comments(value) {
        this._comments = value;
    }

    set likes(value) {
        this._likes = value;
    }

// set comments(value) {
    //     this._comments = [];
    // }

    get comments() {
        return this._comments;
    }

    // set likes(value) {
    //     this._likes = [];
    // }

    get likes() {

        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`
        }
        if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`
        }
        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`

    }

    like(username) {
        //•	If the username, has already liked the story, an error with the following message should be thrown:
        this._likes.forEach(l => {
            if (l === (username)) {
                throw new Error("You can't like the same story twice!");
            }
        })
        // •	If this user is the creator of the story, an error with the following message should be thrown:
        if (this.creator === username) {
            throw  new Error("You can't like your own story!");
        }
        this._likes.push(username);
        // console.log(`${username} liked ${this.title}!`);
        return (`${username} liked ${this.title}!`);
    }

    dislike(username) {
        let index = this._likes.findIndex(l => l === username);
        //•	If the username, didn't like the story in the first place,
        // an error with the following message should be thrown:
        // if (index === 0) {

        if (!this._likes.includes(username)) {
            throw  new Error("You can't dislike this story!");
        }
        this._likes.splice(index, 1);
        // •	Otherwise, the following message should be returned:
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        let comment = this.comments.find(c => c.id === id);
        if (!comment) {

            //•	If the given id is equal to undefined or there is not a comment with that id,
            // you should make a new comment and add it to the comments array.
            // Every comment should have an id (1, 2, 3 ...) which represents the order the comments are submitted.
            // If the comment is made successfully, the following message should be returned:
            this.comments.push({username: username, content: content, id: this.comments.length + 1, replies: []})
            return `${username} commented on ${this.title}`
        }
        let replId = id + comment.replies.length * 0.1 + 0.1;
        comment.replies.push({id: replId.toFixed(1), username: username, content: content})
        // •	If there is a comment with the given id, you should add a reply to it.
        // The reply should have an id (1.1, 1.2 ...) constructed from the id of the comment and the order in which the replies are submitted.
        // If the reply is made successfully the following message should be returned:
        return "You replied successfully";
        // •	Comments should have the following structure:
        // {Id, Username, Content, Replies}
        // •	Replies should have the following structure:
        // {Id, Username, Content}

    }

    toString(sortingType) {
        let funcSort = undefined;
        switch (sortingType) {
            case 'asc':
                funcSort = function (a, b) {
                    return a.id.toString().localeCompare(b.id.toString());
                }
                break;
            case 'desc':
                funcSort = function (a, b) {
                    return b.id.toString().localeCompare(a.id.toString());
                }
                break;
            case 'username':
                funcSort = function (a, b) {
                    return a.username.localeCompare(b.username);
                }
                break;
            default:
                throw Error();
        }
        let result = [`Title: ${this.title}`,
            `Creator: ${this.creator}`,
            `Likes: ${this._likes.length}`,
            `Comments:`
        ];
        this.comments
            .sort((a, b) => funcSort(a, b))
            .forEach(com => {
                result.push(`-- ${com.id}. ${com.username}: ${com.content}`);
                if (com.replies.length > 0) {
                    com.replies.sort((a, b) => funcSort(a, b))
                        .forEach(repl => result.push(`--- ${repl.id}. ${repl.username}: ${repl.content}`))
                }
            })


        return result.join('\n');
    }
}

// let art = new Story("My Story", "Anny");
// console.log(art.like("John")=== "John liked My Story!");
// console.log(art.likes === "John likes this story!");
// //console.log(art.dislike("Sally")=== "You can't dislike this story!");
// console.log(art.like("Ivan")==="Ivan liked My Story!");
// console.log(art.like("Steven")=== "Steven liked My Story!");
// console.log(art.likes==="John and 2 others like this story!");
//  console.log(art.comment("Anny", "Some Content")==="Anny commented on My Story");
//  console.log(art.comment("Ammy", "New Content", 1)==="You replied successfully");
//  console.log(art.comment("Zane", "Reply", 2)==="Zane commented on My Story");
//  console.log(art.comment("Jessy", "Nice :)")=== "Jessy commented on My Story");
//  console.log(art.comment("SAmmy", "Reply@", 2)=== "You replied successfully");
// //
//console.log(art.toString('asc'));
//`Title: My Story
// Creator: Anny
// Likes: 3
// Comments:
// -- 1. Anny: Some Content
// --- 1.1. Ammy: New Content
// -- 2. Zane: Reply
// --- 2.1. SAmmy: Reply@
// -- 3. Jessy: Nice :)`);

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
