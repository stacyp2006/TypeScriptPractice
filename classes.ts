class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }
  honk(): void {
    console.log('beep');
  }
}

class Car1 extends Vehicle {
  drive(): void {
    console.log('vroom');
  }
}

const car2 = new Car1();
car2.drive();
car2.honk();

const vehicle = new Vehicle();

vehicle.honk();
vehicle.drive();
