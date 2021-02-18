const expect = require('chai').expect;
let {Repository} = require("../../EXAM_ prepare/JS Advanced Ret- 08 April 2020/Repository/02 .Repository_02.Resources/Resources/solution.js");

describe("Tests …", function () {
    let temp;
    let properties;
    let entity;
    beforeEach(function () {
        properties = {
            name: "string",
            age: "number",
            birthday: "object"
        };
        temp = new Repository(properties);
        entity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };

    })
    describe("constructor(props) ", function () {
        it("equal   properties …", function () {
            expect(typeof (temp.props)).equal('object');
            expect(temp.props).deep.equal(properties);
        });
        it("equal   map", function () {
            expect((temp.data)).eql(new Map);
            expect(temp.data).deep.equal(new Map);
        });
        it("equal   map", function () {
            expect(temp.nextId()).equal(0);
        });
    });


    describe("get count()  ", function () {
        it("size of empty map", function () {
           expect(temp.count).equal(0);
            expect(temp.count).equal(temp.data.size);
        });
        it("size of map", function () {
            temp.add(entity);
            expect(temp.count).equal(1);
            expect(temp.count).equal(temp.data.size);
        });
    });


    describe("add(entity)  ", function () {
         // Returns 0

        it("add valid first id=0", function () {
     expect(temp.add(entity)).equal(0)
        });
        it("add valid second id =1", function () {
            temp.add(entity)
            expect(temp.add(entity)).equal(1)
        });

        it("add invalid param missed name", function () {
            expect(()=>temp.add({ age: 22,
                birthday: new Date(1998, 0, 7)})).throw(Error)
        });
        it("add invalid param missed age", function () {
            expect(()=>temp.add({ name: "Pesho",
                birthday: new Date(1998, 0, 7)})).throw(Error)
        });
        it("add invalid param missed date", function () {
            expect(()=>temp.add({ name: 33,
                age: 22,
                birthday: new Date(1998, 0, 7)})).throw(Error)
        });
        it("add invalid type name", function () {
            expect(()=>temp.add({  name: "Pesho",
                age: 'Toto',
                birthday: new Date(1998, 0, 7)})).throw(Error)
        });
        it("add invalid type age", function () {
            expect(()=>temp.add({  name: "Pesho",
                age: 22,
                birthday: 'vasko'})).throw(Error)
        });
        it("add invalid type date", function () {
            expect(()=>temp.add({name: "Pesho", age: 22})).throw(Error)
        });
    });


    describe("getId(id)  ", function () {
        it("if exist", function () {
            temp.add(entity);
            expect(temp.getId(0)).deep.equal(entity);
        });
        it("ont exist will throw error", function () {
            expect(()=>temp.getId(5)).throw(Error);
        });
    });

    describe("update(id, newEntity) ", function () {
        it("ont exist will throw error Invalid Id", function () {
            expect(()=>temp.update(3, newEntity)).throw(Error);
        });
        it("ont exist will throw error", function () {
            temp.add(entity);
            expect(()=>temp.update(0,{ name: 33,
                age: "32", ala:null})).throw(Error);
        });
        it("TODO …", function () {
            temp.add(entity);

            let newEntity = {
                name: 'Ivan',
                age: 32,
                birthday: new Date(1998, 0, 7)
            };
            temp.update(0, newEntity);
            expect(temp.getId(0)).deep.equal(newEntity)
        });
    });

    describe("del(id)", function () {
        it("ont exist will throw error", function () {
            expect(()=>temp.del(5)).throw(Error);
        });
        it("delete item", function () {
         temp.add(entity);
         temp.del(0);
         expect(temp.count).equal(0);
        });
    });

});
