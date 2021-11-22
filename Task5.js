let sumPower = 0;
class DeviceOnOff  {
    constructor(name, brand, power) {
    this.name = name,
    this.brand = brand,
    this.power = power
}

deviceOn() {
    sumPower += this.power;
        console.log(`Включен ${this.name}, марка: ${this.brand} работает с мощностью ${this.power} Вт`);
        console.log (`Потребляемая мощность включенных приборов ${sumPower} Вт`);
}
deviceOff() {
    sumPower -= this.power;
        console.log(`Прибор: ${this.name}, марка: ${this.brand} выключен из розетки`);
        console.log(`Потребляемая мощность включенных приборов ${sumPower} Вт`);
}
}
class DeviceKitchen extends DeviceOnOff {
    constructor (name, brand, power, colour) {
        super(name, brand, power)
    this.name = name,
    this.brand = brand,
    this.power = power,
    this.colour = colour
    }
    getInfo(){
        console.log(`Прибор: ${this.name}, марка: ${this.brand}, мощность: ${this.power} Вт, цвет: ${this.colour}`);
    }
}

const Kettle = new DeviceKitchen('Чайник', 'Bork', 1600, 'красный');
const Fridge = new DeviceKitchen('Холодильник', 'Miele', 3000, 'белый');

Kettle.getInfo();
Fridge.getInfo();
Kettle.deviceOn();
Fridge.deviceOn();
Kettle.deviceOff();
Fridge.deviceOff();
