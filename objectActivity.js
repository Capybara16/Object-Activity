/ Create an object called car with properties type, model, and color
let car = {
    type: "Sedan",
    model: "Camry",
    color: "Black"
};

// Use typeof to check the type of the object and log it to the console
console.log(typeof car); // Output: "object"

// Update the type property to "Toyota" and log the updated object
car.type = "Toyota";
console.log(car); // Output: { type: 'Toyota', model: 'Camry', color: 'Black' }

// Add a new property wheels with the value 4 and log the updated object
car.wheels = 4;
console.log(car); // Output: { type: 'Toyota', model: 'Camry', color: 'Black', wheels: 4 }
