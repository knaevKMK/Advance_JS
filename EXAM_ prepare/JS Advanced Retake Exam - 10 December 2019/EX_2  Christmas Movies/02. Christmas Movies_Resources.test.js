const expect= require('chai').expect;
const  ChristmasMovies = require('./02. Christmas Movies_Resources.js')

describe('ChristmasMovies', function () {
    let christmas;
    beforeEach(function (){
        christmas= new ChristmasMovies();
    })

    describe('constructor', function () {

        it('should costrunctor fields', function () {
            expect(christmas.movieCollection).to.eql([]);
            expect(christmas.actors).to.eql([]);
            expect(typeof (christmas.watched)).to.equal('object');
        });
    });

    describe(' buyMovie(movieName, actors)', function () {
        //exist + test Set(duplicate acters)  Or not exist
        it('should buy', function () {
            expect(christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern','Macaulay Culkin']))
                .to.equal('You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!')
        });

        it('should Error when buy exist christmas', function () {
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            expect(()=>christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']))
                .throw(Error);
        });
    });

    describe('discardMovie(movieName)', function () {
        //remove if exist and Is watheched
        it('should Error if movie NOT exist', function () {
            expect(()=>christmas.discardMovie('Home Alone')).throw(Error);
        });
        it('should Error if the movie is Not watched', function () {
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            expect(()=>christmas.discardMovie('Home Alone')).throw(Error);
        });
        it('should remove the movie', function () {
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmas.watchMovie('Home Alone');
            expect(christmas.discardMovie('Home Alone')).to.equal('You just threw away Home Alone!');
        });
    });

    describe('watchMovie(movieName)', function () {

        it('should Error if christmas not Exist', function () {
            expect(()=>christmas.watchMovie('Home Alone')).throw(Error,'No such movie in your collection!');
        });
        it('should increase christmas wathes', function () {
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Home Alone');
            expect(christmas.watched['Home Alone']).to.deep.equal(2);
        });
    });

    describe('favouriteMovie()', function () {
        it('should error if missed films in the collection', function () {
            expect(()=>christmas.favouriteMovie()).throw(Error);
        });
        it('should return valid result', function () {
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmas.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            christmas.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);
            christmas.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Home Alone 2');
            christmas.watchMovie('The Grinch');
            christmas.watchMovie('Last Christmas');
            christmas.watchMovie('Home Alone 2');
            christmas.watchMovie('Last Christmas');
            christmas.discardMovie('The Grinch');
            expect(christmas.favouriteMovie()).to
                .equal('Your favourite movie is Home Alone and you have watched it 3 times!')
        });
    });

    describe('mostStarredActor()', function () {
        it('should error if missed films in the collection', function () {
            expect(()=>christmas.mostStarredActor()).throw(Error);
        });
        it('should valid', function () {
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmas.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            christmas.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);
            christmas.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
            expect(christmas.mostStarredActor()).to
                .equal( 'The most starred actor is Macaulay Culkin and starred in 2 movies!')
        });
    });
});