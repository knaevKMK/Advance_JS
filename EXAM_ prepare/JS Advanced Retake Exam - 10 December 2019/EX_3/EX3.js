class ChristmasDinner {

    constructor(budget) {
        this.budget = this._validateBudget(budget);
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    shopping(arr) {
        if (arr[1] > this.budget) {
            throw  new Error
            ('Not enough money to buy this product');
        }
        this.budget -= arr[1];
        this.products.push(arr[0]);
        //   console.log(`You have successfully bought ${arr[0]}!`);
        return `You have successfully bought ${arr[0]}!`;
    }

    recipes(recipe) {

        recipe.productsList.forEach(prod => {
            if (!this.products.includes(prod)) {
                throw new Error('We do not have this product');
            }
        });

        this.dishes.push(recipe);
        //  console.log(`${recipe.recipeName} has been successfully cooked!"`);
        return `${recipe.recipeName} has been successfully cooked!"`;
    }

    inviteGuests(name, dish) {
        let product = this.dishes.filter(d => d.recipeName === dish);
        if (!product) {
            throw  new Error
            ('We do not have this dish');
        }

       if (Object.keys(this.guests).includes(name)) {
           throw new Error('This guest has already been invited');
      }
        this.guests[name] = product;

        //  console.log(`You have successfully invited ${name}!`);
        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        let arr = Object.keys(this.guests);
        let result = '';
        arr.forEach(name => {
            let dish =this.guests[name][0];
          //  console.log(dish)
            result += `${name} will eat ${dish.recipeName}, which consists of ${dish.productsList.join(', ')}\n`
        });

        return result.trim();
    }

    _validateBudget(budget) {
        if (budget < 0) {
            throw new Error
            ('The budget cannot be a negative number');
        }
        return budget;
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
