class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }
  honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle();

vehicle.honk();
vehicle.drive();
