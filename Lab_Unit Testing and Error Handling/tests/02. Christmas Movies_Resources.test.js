const expect = require('chai').expect;
const ChristmasMovies = require('../../EXAM_ prepare/JS Advanced Retake Exam - 10 December 2019/EX_2/02. Christmas Movies_Resources');

describe('ChristmasMovies', function () {
    let list;
    const movieName = 'Home Alone';
    const actors = [['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']];
    beforeEach(function () {
        list = new ChristmasMovies();
    })
    describe('constructor', function () {
        it('should empty movieCollection after create', function () {

            expect(Array.isArray(list.movieCollection)).true;
            // expect(list.movieCollection).eql([]);
            expect(list.movieCollection.length).to.be.equal(0);
            expect(Array.isArray(list.actors)).true;
            // expect(list.actors).eql([]);
            expect(list.actors.length).to.be.equal(0);
            expect(list.watched).eql({});
            //   expect(typeof (list.watched)).to.be.equal('object');
        });
    });

    describe('buyMovie (name, actor)', function () {

        it('should addMovie to the collection get result', function () {
            // expect(list.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']))
            //     .to.equal('You just got Last Christmas to your collection in which Madison Ingoldsby, Emma Thompson, Boris Isakovic are taking part!');
            expect(list.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']))
                .to.equal(`You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci,Daniel Stern are taking part!`);
        });
        it('should addMovie to the collection get result', function () {

            expect(list.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']))
                .to.equal('You just got Last Christmas to your collection in which Madison Ingoldsby, Emma Thompson, Boris Isakovic are taking part!');
        });


        it('should thrown error that exist a movie name', function () {
            list.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']);
            expect(() => list.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']))
                .to.throw(Error, 'You already own Last Christmas in your collection!');
        });
    });

    describe('discardMovie(movieName)', function () {
        it('should trow Error if name dose not exist', function () {
            expect(() => list.discardMovie(movieName))
                .throw(Error, `${movieName} is not at your collection!`);
        });
        it('should trow Error if film was not watched', function () {
            list.buyMovie(movieName, actors);
            expect(() => list.discardMovie(movieName))
                .throw(Error, `${movieName} is not watched!`);
        });
        it('should remove film and get result', function () {
            list.buyMovie(movieName, actors);
            list.watchMovie(movieName);
            expect(list.discardMovie(movieName)).equal(`You just threw away ${movieName}!`)
        });

    });

    describe('watchMovie(name)', function () {
        it('should throw Error if film does not in the movieCollection', function () {
            expect(() => list.watchMovie(movieName)).throw(Error, 'No such movie in your collection!');
        });
        it('should will increase watch status', function () {
            list.buyMovie(movieName, actors);
            list.watchMovie(movieName);
            expect(list.watched[movieName]).to.deep.equal(1);
        });
    });

    describe('favouriteMovie', function () {
        it('should throw Error empty collection', function () {
            expect(() => list.favouriteMovie()).throw(Error, 'You have not watched a movie yet this year!');
        });

        it('should return expect result', function () {
            list.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            list.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);

            list.watchMovie('Last Christmas');
            list.watchMovie('Home Alone');
            list.watchMovie('Home Alone');

            expect(list.favouriteMovie()).to.equal('Your favourite movie is Home Alone and you have watched it 2 times!');
        });


    });

    describe('mostStarredActor()', function () {
        it('should throw Error if movieCollection is empty', function () {
            expect(() => list.mostStarredActor()).throw(Error, 'You have not watched a movie yet this year!');
        });
        it('should expect valid result', function () {
            list.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            list.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            list.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);
            expect(list.mostStarredActor()).to.be
                .equal(`The most starred actor is Macaulay Culkin and starred in 2 movies!`);
        });
    });
});