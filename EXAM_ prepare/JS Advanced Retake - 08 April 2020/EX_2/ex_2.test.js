describe("Tests Repo", function () {
    let result;
    let entry;
    beforeEach(function () {
        result = new Repository({
            name: "string",
            age: "number",
            birthday: "object"
        });
        entry = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
    })
    describe("constructor(props)", function () {
        it("all fields", function () {
            expect((result.data)).eql(new Map);
            expect(typeof (result.props)).equal('object');
            expect(result.nextId()).equal(0);
        });
    });

    describe('count', function () {
        it('0 for empty data', function () {
            expect(result.count).to.be.equal(0);
        });
        it('1 for empty data', function () {
            result.add(entry);
            expect(result.count).to.be.equal(1);
        });
    });
    describe(' add(entity)', function () {
        it('should add valid entry', function () {
            expect(result.add(entry)).to.be.equal(0);
        });
        it('should add invalid entry', function () {
            expect(() => result.add({})).throw(Error);
        });
    });

    describe(' getId(id)', function () {
        it('should Error non exist id', function () {
            expect(()=>expect.getId(1)).throw(Error);
        });
        it('should return entry woth valid id', function () {
            result.add(entry);
            expect(result.getId(0)).to.be.equal(entry);
        });
    });

    describe(' update(id, newEntity)', function () {
        it('should Erro for non exist id', function () {
            expect(()=>result.update(1,entry)).throw(Error);
        });
        it('should Error for exist id with invalid entry', function () {
            result.add(entry);
            expect(()=>result.update(0,{})).throw(Error);
        });
        it('should complate with calid param', function () {
            result.add( {
                name: 'Gosho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            });
            result.update(0,entry);
            expect(result.getId(0)).to.be.equal(entry);
        });
    });
    describe(' del(id)', function () {
        it('should Error non exist id', function () {
            expect(()=>result.del(1)).throw(Error);
        });
        it('should delete the entry and chech data.size', function () {
            result.add(entry);
            let size = result.count;
            result.del(0);
            expect(result.count).to.be.equal(size-1);
        });
    });
    describe('validate', function () {
        it('should Error missed name in entry', function () {
            expect(()=>result._validate({ age: "number",
                birthday: "object"})).throw(Error);
        });
        it('should Error missed age in entry', function () {
            expect(()=>result._validate({ name: "string",
                birthday: "object"})).throw(Error);
        });
        it('should Error missed brthday in entry', function () {
            expect(()=>result._validate({ name: "string",
                age: "number"})).throw(Error);
        });

        it('should Error invalid name in entry', function () {
            expect(()=>result._validate({ name: 4, age: 5,
                birthday: new Date(1998, 0, 7)})).throw(Error);
        });
        it('should Error invalid age in entry', function () {
            expect(()=>result._validate({ name: "string",age: 'alaba',
                birthday: new Date(1998, 0, 7)})).throw(Error);
        });
        it('should Error inlvaid brthday in entry', function () {
            expect(()=>result._validate({ name: "string",
                age: 5, birthday: 666  })).throw(Error);
        });

    });
});