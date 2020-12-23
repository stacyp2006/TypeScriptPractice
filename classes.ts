class Vehicle {
  constructor(public color: string) {}
  protected honk(): void {
    console.log('beep');
  }
}

const vehicle1 = new Vehicle('orange');
console.log(vehicle1.color);

class Car1 extends Vehicle {
  private drive(): void {
    console.log('vroom');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car2 = new Car1();
car2.startDrivingProcess();

const vehicle = new Vehicle();
