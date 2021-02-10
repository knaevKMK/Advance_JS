function createComputerHierarchy() {}
    class Component {
        constructor(manufacturer) {
            this.manufacturer = manufacturer;
        }
    }

    class Keyboard extends Component {
        constructor(...args) {
            super(args[0]);
            this.responseTime = Number(args[1]);
        }
    }

    class Monitor extends Component {
        constructor(...args) {
            super(args[0]);
            this.width = Number(args[1]);
            this.height = Number(args[2]);
        }
    }

    class Battery extends Component {
        constructor(...args) {
            super(args[0]);
            this.expectedLife = Number(args[1]);
        }
    }

    class Computer  {
        constructor(...args) {

            if (new.target === Computer) {
                throw new Error()
            }
            this.manufacturer =args[0];
            this.processorSpeed = Number(args[1]);
            this.ram = Number(args[2]);
            this.hardDiskSpace = Number(args[3]);
        }

    }

    class Laptop extends Computer {
        constructor(...args) {
            super(args[0], args[1], args[2], args[3]);
            this.weight = Number(args[4]);
            this.color = args[5];
            this.battery = this._setBattery(args[6]);
        }

        get Battery() {
            return this.battery;
        }

        _setBattery(args) {
            if (args instanceof Battery) {
                return args;
            }
            throw new TypeError('Invalid battery type')
        }
    }

    class Desktop extends Computer {
        constructor(...args) {
            super(args[0], args[1], args[2], args[3]);
            this.keyboard = this._setKeyboard(args[4]);
            this.monitor = this._setMonitor(args[5]);
        }

        getMonitor() {
            return this.monitor;
        }

        getKeyboard() {
            return this.keyboard;
        }

        _setMonitor(args) {
            if (args instanceof Monitor) {
                return args;
            }
            throw  new TypeError('Invalid monitor format')
        }

        _setKeyboard(args) {
            if (args instanceof Keyboard) {
                return args;
            }
            throw  new TypeError('Invalid keyboard format')
        }
    }

//     return {
//         Battery,
//         Keyboard,
//         Monitor,
//         Computer,
//         Laptop,
//         Desktop
//     }
// }

let keyboard = new Keyboard('Logitech',70);
let monitor = new Monitor('Benq',28,18);
let battery = new Battery('Energy',3);
let laptop = new Laptop("Hewlett Packard",2.4,4,0.5,3.12,"Silver",battery);
laptop.battery = "pesho";
let desktop = new Desktop("JAR Computers",3.3,8,1,keyboard,monitor);
desktop.keyboard = "gosho"
desktop.monitor = "stamat"