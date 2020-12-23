class Vehicle {
  public drive(): void {
    console.log('chugga chugga');
  }
  protected honk(): void {
    console.log('beep');
  }
}

const vehicle1 = new Vehicle();
vehicle1.honk();

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
car2.honk();

const vehicle = new Vehicle();

vehicle.honk();
vehicle.drive();
