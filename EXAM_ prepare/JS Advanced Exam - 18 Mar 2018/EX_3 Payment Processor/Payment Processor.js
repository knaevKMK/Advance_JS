class PaymentProcessor {
    constructor(obj) {
        this.collection = [];
        this.balance = 0;
        this.options = {types: ["service", "product", "other"], precision: 2}
        if (obj) {
            this.setOptions(obj)
        }
    }

    _validateType(value) {
        let non_exist = true;
        // if (this.options.types.length===0){
        //     return;
        // }
        this.options.types.forEach(type => {
            if (type === value) {
                non_exist = false;
            }
        });
        if (non_exist) {
            throw new Error();
        }
    }

    _validateString(value) {
        if (value === '' || typeof (value) !== 'string') {
            throw new Error();
        }
    }

    _validateNum(value) {
        if (value === '' || typeof (value) !== 'number') {
            throw new Error();
        }
    }


    registerPayment(id, name, type, value) {
        this._validateString(id);
        this.collection.forEach(e=>{if (e.id===id){throw new Error()}})
        this._validateString(name)
        this._validateType(type);
        this._validateNum(value);
        this.balance += value;
        this.collection.push({id: id, name: name, type: type, value: value});

    }

    deletePayment(id) {
        this._validateString(id)
        let transaction = this._getTransaction(id);
        let index = this.collection.findIndex(x => x.id === id);

        this.balance -= transaction.value;
        this.collection.splice(index, 1);
    }

    _getTransaction(id) {
        let index = this.collection.findIndex(x => x.id === id);
        if (index < 0) {
            throw new Error();
        }
        return this.collection[index];
    }

    get(id) {
        this._validateString(id)
        let transaction = this._getTransaction(id);

        return `Details about payment ID: ${transaction.id}\n- Name: ${transaction.name}\n- Type: ${transaction.type}\n- Value: ${transaction.value.toFixed(this.options.precision)}`;
    }

    setOptions(options) {
        if (options.hasOwnProperty("types")) {
            options.types.forEach(value => {
                this._validateString(value)
            });
            this.options.types = (options.types)
        }
        if (options.hasOwnProperty("precision")) {
            this._validateNum(options.precision);
            this.options.precision = options.precision;
        }
    }

    toString() {

        return `Summary:\n- Payments: ${this.collection.length}\n- Balance: ${this.balance.toFixed(this.options.precision)}`
    }

}

// Initialize processor with default options
const generalPayments = new PaymentProcessor();
//generalPayments.registerPayment('0001', 'Microchips', 'product', 'money');
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
console.log(generalPayments.toString());

// Should throw an error (invalid type)
// generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);

generalPayments.setOptions({types: ['product', 'material']});
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
console.log(generalPayments.get('E028'));
generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);

// // Should throw an error (ID not found)
// generalPayments.deletePayment('E027');
// // Should throw an error (ID not found)
// generalPayments.get('E027');

generalPayments.deletePayment('E028');
console.log(generalPayments.toString());

// // Initialize processor with custom types
const servicePyaments = new PaymentProcessor({types: ['service']});
servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
console.log(servicePyaments.toString());

// Initialize processor with custom precision
const transactionLog = new PaymentProcessor({precision: 5});
transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
console.log(transactionLog.toString());
