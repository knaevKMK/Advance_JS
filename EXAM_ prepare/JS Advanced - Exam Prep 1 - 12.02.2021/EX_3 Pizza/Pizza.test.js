const expect= require('chai').expect;
const pizzUni=require('../../EXAM_ prepare/JS Advanced - Exam Prep 1 - 12.02.2021/EX_3/Pizza.js')

describe('pizzUni', function () {
    describe('makeAnOrder', function () {
        it('should Error if is not a needed object', function () {
            expect(() => pizzUni.makeAnOrder({salam: 20})).throw(Error)
        });
        //if valid pizza and fault drink???
        it('should make order only pizza', function () {
            expect(pizzUni.makeAnOrder({orderedPizza: 'Peperony'})).to.be.equal('You just ordered Peperony');
            expect(pizzUni.makeAnOrder({orderedPizza: 'Peperony', orderedDrink: 'Fanta'}))
                .to.be.equal('You just ordered Peperony and Fanta.');
        });
    });

    describe('getRemainingWork', function () {
        let statusArr=[];

        it('should [] return all completed', function () {
            expect(pizzUni.getRemainingWork(statusArr)).to.be.equal('All orders are complete!');
        });
        it('should [] return all completed', function () {
            statusArr=[{pizzaName: 'Peperony' ,status:'ready'},
                {pizzaName: 'Americana' ,status:'ready'},
                {pizzaName: 'Margarita' ,status:'ready'},
                {pizzaName: 'Capricciosa' ,status:'ready'}
            ];
            expect(pizzUni.getRemainingWork([])).to.be.equal('All orders are complete!');
        });
        it('should return all prepring', function () {
            statusArr=[{pizzaName: 'Peperony' ,status:'ready'},
                {pizzaName: 'Americana' ,status:'process'},
                {pizzaName: 'Margarita' ,status:'ready'},
                {pizzaName: 'Capricciosa' ,status:'process'}
            ];
            let pizzaNames = 'Americana, Capricciosa';
            expect(pizzUni.getRemainingWork(statusArr)).to.be.equal(
                `The following pizzas are still preparing: ${pizzaNames}.`
            )
        });
    });

    describe('orderType', function () {
        it('should *0.1 if is Not \'Delivery\'', function () {
          expect ( pizzUni.orderType(20,'Carry Out')).to.be.equal(18);
        });
        it('should equal if is \'Delivery\'', function () {
expect(pizzUni.orderType(20,'Delivery')).to.be.equal(20)
        });
        it('should equal if is NOT KNOWN', function () {
            expect(pizzUni.orderType(20,'Hungry')).undefined
        });
    });
});