class Vacationer {
    constructor(...args) {
        this.fullName = this._setFullName(args[0]);
        this.idNumber = this.generateIDNumber();
        this.creditCard = this._setCreditCard(args[1])
        this.wishList = [];
    }

    generateIDNumber() {
        let last = 7;
        let lSymbol = this.fullName.lastName[this.fullName.lastName.length - 1]
        const vowel = ["a", "e", "o", "i", "u"];
        if (vowel.includes(lSymbol)) {
            last = 8;
        }
        return `${231 * this.fullName.firstName.charCodeAt(0) + 139 * this.fullName.middleName.length}${last}`;
    }

    addCreditCardInfo(input) {
        if (input.length !== 3) {
            throw new Error("Missing credit card information")
        }
        return this.creditCard = this._setCreditCard(input)
    }

    addDestinationToWishList(destination) {
        if (this.wishList.includes(destination)) {
            throw new Error('Destination already exists in wishlist');
        }
        this.wishList.push(destination);
       this.wishList= this.wishList.sort((a,b)=>a.length-b.length);
    }

    getVacationerInfo() {
        return `Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}\nID Number: ${this.idNumber}\nWishlist:\n${this.wishList.length === 0 ? 'empty' : this.wishList.join(', ')}\nCredit Card:\nCard Number: ${this.creditCard.cardNumber}\nExpiration Date: ${this.creditCard.expirationDate}\nSecurity Number: ${this.creditCard.securityNumber}`
    }

    _setFullName(args) {
        if (args.length !== 3) {
            throw new Error('Name must include first name, middle name and last name');
        }
        let regex = '^[A-Z][a-z]+$'
        args.forEach(name => {
            if (!name.match(regex)) {
                throw new Error('Invalid full name');
            }
        })
        return {firstName: args[0], middleName: args[1], lastName: args[2]};
    }

    _setCreditCard(args) {

        let cardNum = 1111;
        let expDate = '';
        let secNum = 111;
        if (args) {
            cardNum = (args[0]);
            expDate = args[1];
            secNum = (args[2]);
            if (typeof (cardNum) !== 'number' || typeof (secNum) !== 'number') {
                throw  new Error('Invalid credit card details');
            }
        }
        return {cardNumber: cardNum, expirationDate: expDate, securityNumber: secNum};
    }

}


// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
//console.log(vacationer1)
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"],
    [123456789, "10/01/2018", 777]);
//console.log(vacationer2)

// Should throw an error (Invalid full name)
try {
    let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
} catch (err) {
    console.log("Error: " + err.message);
}

// Should throw an error (Missing credit card information)
try {
    let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
    vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
} catch (err) {
    console.log("Error: " + err.message);
}

vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Bali');

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());
