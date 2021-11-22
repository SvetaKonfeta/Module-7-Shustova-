function Device (name, brand, power) {
    this.name = name,
    this.brand = brand,
    this.power = power
}
let sumPower = 0;
Device.prototype.deviceOn = function(){
    sumPower += this.power;
        console.log(`Включен ${this.name}, марка: ${this.brand} работает с мощностью ${this.power} Вт`);
        console.log (`Потребляемая мощность включенных приборов ${sumPower} Вт`);
}
Device.prototype.deviceOff = function(){
    sumPower -= this.power;
        console.log(`Прибор: ${this.name}, марка: ${this.brand} выключен из розетки`);
        console.log(`Потребляемая мощность включенных приборов ${sumPower} Вт`);
}
function Fridge(name, brand, power, colour){
    this.name = name,
    this.brand = brand,
    this.power = power,
    this.colour = colour,
    this.parameters = function(){
        console.log(`Прибор: ${this.name}, марка: ${this.brand}, мощность: ${this.power} Вт, цвет: ${this.colour}`);
    }
}
function Kettle (name, brand, power, weight) {
    this.name = name,
    this.brand = brand,
    this.power = power,
    this.weight = weight,
    this.parameters = function(){
        console.log(`Прибор: ${this.name}, марка: ${this.brand}, мощность: ${this.power} Вт, вес: ${this.weight} кг`);
    }
}
Fridge.prototype = new Device();
Kettle.prototype = new Device();
  

let device1 = new Fridge('Чайник', 'Bork', 1600, 'белый');
let device2 = new Kettle('Холодильник', 'Miele', 3000, 1.7);


device1.parameters();
device2.parameters();
device1.deviceOn();
device2.deviceOn();
device1.deviceOff();
device2.deviceOff();