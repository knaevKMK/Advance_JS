class Bank {
    constructor(bankName) {
        this.bankName = bankName;
        this.allCustomers  = [];
    }

    newCustomer(customer) {
        for (const customer1 of this.allCustomers) {
            if (                customer1.personalId === customer.personalId) {
                throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
            }
        }

        this.allCustomers.push(customer);
        return customer;
    }

    depositMoney(personalId, amount) {
        for (const customer1 of this.allCustomers) {
            if (customer1.personalId === personalId) {
                if (!customer1.hasOwnProperty('totalMoney')){
                    customer1.totalMoney=0;
                    customer1.statment=[];
                }
                customer1.totalMoney += amount;
                customer1.statment.push(`made deposit of ${amount}$!`)
                return `${customer1.totalMoney}$`;
            }
        }
        throw new Error(`We have no customer with this ID!`);
    }

    withdrawMoney(personalId, amount) {
        for (const customer1 of this.allCustomers) {
            if (customer1.personalId === personalId) {
                if (!customer1.hasOwnProperty('totalMoney')||amount > customer1.totalMoney) {
                    throw new Error(`${customer1.firstName} ${customer1.lastName} does not have enough money to withdraw that amount!`);
                }
                customer1.totalMoney -= amount;
                customer1.statment.push(`withdrew ${amount}$!`)
                return `${customer1.totalMoney}$`;
            }
        }
        throw new Error(`We have no customer with this ID!`);
    }

    customerInfo(personalId) {
        for (const client of this.allCustomers) {
            if (client.personalId === personalId) {
//                 let transactions = '';
//                 let count = customer1.statment.length;
//                 customer1.statment.reverse().forEach(state =>
//                     transactions += `${count--}. ${customer1.firstName} ${customer1.lastName} ${state}\n`);
//                 return `Bank name: ${this.bankName}
// Customer name: ${customer1.firstName} ${customer1.lastName}
// Customer ID: ${personalId}
// Total Money: ${customer1.totalMoney}$
// Transactions:
// `+transactions.trim();
                let listResult='';
                for(let i = client.statment.length-1; i>=0;i--){
                    listResult+=
                        `${i+1}. ${client.firstName} ${client.lastName} ${client.statment[i]}\n`;
                }
                return `Bank name: ${this.bankName}
Customer name: ${client.firstName} ${client.lastName}
Customer ID: ${client.personalId}
Total Money: ${client.totalMoney}$
Transactions:
${listResult.trim()}`
            }
        }
        throw new Error(`We have no customer with this ID!`);
    }
}

let
    bank = new Bank("SoftUni Bank");

console
    .log(bank

        .newCustomer({firstName: "Svetlin", lastName: "Nakov", personalId: 6233267})
    )
;
console
    .log(bank

        .newCustomer({firstName: "Mihaela", lastName: "Mileva", personalId: 4151596})
    )
;

bank
    .depositMoney(
        6233267
        ,
        250
    )
;
console
    .log(bank

        .depositMoney(
            6233267
            ,
            250
        ))
;
bank
    .depositMoney(
        4151596
        ,
        555
    )
;

console
    .log(bank

        .withdrawMoney(
            6233267
            ,
            125
        ))
;

console
    .log(bank

        .customerInfo(
            6233267
        ))
;
