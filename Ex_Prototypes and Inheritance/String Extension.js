(function solve(params) {
    String.prototype.ensureStart = function(str) {
        if (this.startsWith(str)) {
            return this.toString();
        }
        return str + this;
    };
    String.prototype.ensureEnd = function(str) {
        if (this.endsWith(str)) {
            return this.toString();
        }
        return this + str;
    };
    String.prototype.isEmpty = function() {
        if (this.length === 0) { return true };
        return false;
    };
    String.prototype.truncate = function(n) {
        console.log(this.toString() + n)
        if (n > this.length) {
            return this.toString();
        }
        if (n <= 4) {
            return this.substring(0, this.length - n - 3) + '...';

        }
        let result = [...this];
        let lastSpace = -1;
        for (let index = 0; index < result.length; index++) {
            if (result[index] === ' ') {
                lastSpace = index;
            }
            if (index === n) {
                break;
            }
        }
        return this.substring(0, lastSpace) + '...'
    }
    String.format = function(String, ...params) {
        let str = String.split(' ')
        for (let index = 0; index < str.length; index++) {
            if (params.length == 0) { break }
            if (str[index].includes('{') && str[index].includes('}')) {
                str[index] = params.shift();

            }
        }

        return (str.join(' '));
    };

}());
var testString = 'the {0} brown {1} jumps over the {2} dog';
console.log(String.format(testString, 'quick'))
let str = 'my string';
str = str.ensureStart('my');
console.log(str.isEmpty())
    // //console.log(str);
    // str = str.ensureStart('hello ');
    // str = str.truncate(16);
    // console.log(str);
    // str = str.truncate(14);
    // console.log(str);
    // str = str.truncate(8);
    // console.log(str);
    // str = str.truncate(4);
    // console.log(str);
    // str = str.truncate(2);
    // console.log(str);
    // str = String.format('The {0} {1} fox',
    //     'quick', 'brown');
    // console.log(str);
    // str = String.format('jumps {0} {1}',
    //     'dog');
    // console.log(str);