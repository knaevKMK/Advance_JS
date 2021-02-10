function solve() {}
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.array = [];
        }

        comments(string) {
        //    string.split(' ').forEach(el => this.array.push(el))
        }

        addComment(comment) {
            this.array.push(comment);
        }

        toString() {
            let result = `Rating: ${this.likes - this.dislikes}`;
            if (this.array.length > 0) {
                let temp = '';
                this.array.forEach(element => temp += ` * ${element}\n`)
                result += `\nComments:\n${temp}`;
            }

            return (super.toString()+'\n' + result.trim());
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views += 1;
            return this;
        }

        toString() {
            return super.toString() + `\nViews: ${this.views}`;
        }
    }

//     return {Post, SocialMediaPost, BlogPost};
// }

// let post = new Post("Post", "Content");
//
// console.log(post.toString());

// Post: Post
// Content: Content
let test = new SocialMediaPost("TestTitle", "TestContent", 5, 10);

test.addComment("1");
test.addComment("2");
test.addComment("3");
console.log(test.toString())

// let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);
//
// scm.addComment("Good post");
// scm.addComment("Very good post");
// scm.addComment("Wow!");
//
// console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
