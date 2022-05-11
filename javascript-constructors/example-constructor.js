function ExampleConstructor() {}
console.log('prototype of ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof prototype of ExampleConstructor:', typeof ExampleConstructor);

var eConstructor = new ExampleConstructor();
console.log('value of eConstructor:', eConstructor);

var nConstructor = eConstructor instanceof ExampleConstructor;
console.log('value of nConstructor:', nConstructor);
