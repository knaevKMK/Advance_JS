class ChristmasDinner {

    constructor(budget) {
        this.budget = this._validateBudget(budget);
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    _validateBudget(value) {
        if (value < 0) {
            throw new Error("The budget cannot be a negative number")
        }
        return value;
    }

    // set budget(value) {
    //     this.budget = this._validateBudget(value);
    // }

    // get budget() {
    //      return this.budget;
    //  }

    shopping(product) {
        let [type, price] = product;
        if (price > this.budget) {
            throw new Error("Not enough money to buy this product");
        }
        this.products.push(type);
        this.budget -= price;

        return `You have successfully bought ${type}!`;
    }

    recipes(recipe) {
        let {recipeName, productsList} = recipe;
        recipe.productsList.forEach(i => {
            if (!this.products.includes(i)) {
                throw  new Error("We do not have this product");
            }
        })
        this.dishes.push(recipe);
        return `${recipeName} has been successfully cooked!`
    }

    inviteGuests(name, dish) {
        let dis;
        this.dishes.forEach(di => {

            if (di.recipeName === dish) {
                dis = di;
            }
        });

        if (!dis) {
            throw new Error('We do not have this dish');
        }
        if (name in this.guests) {
            throw  new Error("This guest has already been invited");
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        let result = [];
        for (let name in this.guests) {
            let dis = this.dishes.filter(pr => pr.recipeName === this.guests[name]);
            result.push(`${name} will eat ${this.guests[name]}, which consists of ${dis[0].productsList.join(', ')}`)
        }
        return result.join('\n');
    }
}

let dinner = new ChristmasDinner(300);

console.log(dinner.shopping(['Salt', 1]));
console.log(dinner.shopping(['Beans', 3]));
console.log(dinner.shopping(['Cabbage', 4]));
console.log(dinner.shopping(['Rice', 2]));
console.log(dinner.shopping(['Savory', 1]));
console.log(dinner.shopping(['Peppers', 1]));
console.log(dinner.shopping(['Fruits', 40]));
console.log(dinner.shopping(['Honey', 10]));

console.log(dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
}));
console.log(dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
}));
console.log(dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
}));

console.log(dinner.inviteGuests('Ivan', 'Oshav'));
console.log(dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice'));
console.log(dinner.inviteGuests('Georgi', 'Peppers filled with beans'));

console.log(dinner.showAttendance());
