class Bank {
    constructor(bankName) {
        this.bankName = bankName;
        this.allCustomers = [];
    }

    _getCustomer(personalId) {
        for (const customer of this.allCustomers) {
            if (customer.personalId === personalId) {
                return customer;
            }
        }
        return false;
    }

    newCustomer(customer) {

        if (this._getCustomer(customer.personalId)) {
            throw  new Error
            (`${customer.firstName} ${customer.lastName} is already our customer!`);
        }
        this.allCustomers.push(customer);
        return customer;
    }

    depositMoney(personalId, amount) {
        let temp = this._getCustomer(personalId);

        if (!temp) {
            throw new Error
            (`We have no customer with this ID!`);
        }
        //  if (!Object.keys(temp).includes('totalMoney')) {
        if (!temp.hasOwnProperty('totalMoney')) {
            temp.totalMoney = 0;
            temp.transactions = [];
        }
        temp.totalMoney += amount;
        temp.transactions.push(`made deposit of ${amount}$!`);
        // console.log(temp);
        // console.log(temp.totalMoney);
        return `${temp.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        let temp = this._getCustomer(personalId);
        if (!temp) {
            throw new Error
            (`We have no customer with this ID!`);
        }

      //  if (!Object.keys(temp).includes('totalMoney')
        if (!temp.hasOwnProperty('totalMoney')
            || temp.totalMoney  < amount) {
            throw  new Error
            (`${temp.firstName} ${temp.lastName} does not have enough money to withdraw that amount!`)
        }
        temp.totalMoney -= amount;
        temp.transactions.push(`withdrew ${amount}$!`);

        return `${temp.totalMoney}$`;
    }

    customerInfo(personalId) {
        let temp = this._getCustomer(personalId);
        if (!temp) {
            throw new Error(`We have no customer with this ID!`);
        }
        let result = [`Bank name: ${this.bankName}`,
            `Customer name: ${temp.firstName} ${temp.lastName}`,
            `Customer ID: ${temp.personalId}`,
            `Total Money: ${temp.totalMoney}$`,
            `Transactions:`];
        for (let i = temp.transactions.length - 1; i >= 0; i--) {
            result.push(`${i + 1}. ${temp.firstName} ${temp.lastName} ${temp.transactions[i]}`);
        }
        return result.join('\n').trim();
    }

}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
