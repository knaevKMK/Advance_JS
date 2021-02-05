class Bank {

    constructor(bankName) {
        this.bankName = bankName;
        this.allCustomers = [];
    }

    customerExist = (personalId) => {
        for (const client of this.allCustomers) {
            if (client.personalId === personalId) {
                return client;
            }
        }
        return false;
    }

    newCustomer(customer) {
        //   customer = {firstName,lastName,personalId}
        if (this.customerExist(customer.personalId)) {
            throw new Error
            (`${customer.firstName} ${customer.lastName} is already our customer!`);

        }
        this.allCustomers.push(customer);
        return  customer;
    };

    depositMoney(personalId, amount) {
        let client = this.customerExist(personalId);
        if (!client) {
            throw new Error
            (`We have no customer with this ID!`);
        }
        if (!client.hasOwnProperty('totalMoney')) {
            client.transactions=[];
            client.totalMoney = amount;
        } else {
            client.totalMoney += amount;
        }
        client.transactions.push({type:'made deposit of', value:amount});
        return(`${client.totalMoney}$`);


    }

    withdrawMoney(personalId, amount) {
        let client = this.customerExist(personalId);
        if (!client) {
            throw new Error
            (`We have no customer with this ID!`);
        }
        if (!client.hasOwnProperty('totalMoney') ||
            client.totalMoney < amount) {
            throw new Error
            (`${client.firstName} ${client.lastName} does not have enough money to withdraw that amount!`);
        } else {
            client.totalMoney -= amount;
        }
        client.transactions.push({type:'withdrew',value:amount});
       return (`${client.totalMoney}$`);
    }

    customerInfo(personalId) {
        let client = this.customerExist(personalId);
        if (!client) {
            throw new Error
            (`We have no customer with this ID!`);
        }

let listResult='';
        for(let i = client.transactions.length-1; i>=0;i--){
            listResult+=
                `${i+1}. ${client.firstName} ${client.lastName} ${client.transactions[i].type} ${client.transactions[i].value}$!\n`;
        }
        return `Bank name: ${this.bankName}
Customer name: ${client.firstName} ${client.lastName}
Customer ID: ${client.personalId}
Total Money: ${client.totalMoney}$
Transactions:
${listResult.trim()}`
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
console.log(bank.customerInfo(4151596));