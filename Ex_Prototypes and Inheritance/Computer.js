function createComputerHierarchy() {
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

    class Computer {
        constructor(...args) {

            if (new.target === Computer) {
                throw new Error()
            }
            this.manufacturer = args[0];
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
            this.battery = (args[6]);
        }

        get battery() {
            return this._battery;
        }

        set battery(args) {
            if (args instanceof Battery) {
                return this._battery = args;
            }
            throw new TypeError('Invalid battery type')
        }
    }

    class Desktop extends Computer {
        constructor(...args) {
            super(args[0], args[1], args[2], args[3]);
            this.keyboard = (args[4]);
            this.monitor = (args[5]);
        }

        get monitor() {
            return this._monitor;
        }

        get keyboard() {
            return this._keyboard;
        }

        set monitor(args) {
            if (args instanceof Monitor) {
                return this._monitor = args;
            }
            throw  new TypeError('Invalid monitor format')
        }

        set keyboard(args) {
            if (args instanceof Keyboard) {
                return this._keyboard = args;
            }
            throw  new TypeError('Invalid keyboard format')
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

