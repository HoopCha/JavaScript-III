/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding Object:
When in the global scope, this will target the window/console object, aka all of javascript
* 2. Implicit Binding
When a function is called by a dot before it, the object before the dot is 'this'

* 3. New Binding
When a constructor function is used, the this is the specific instance of that object that is created by the constructor function

* 4. Explicit Binding
With the call or define method is used, this is explicitly defined, this allows overriding for exampled

*
* write out a code example of each explanation above
*/

// Principle 1
/*
// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting: 'Hello friend!',
    sayHello: function(name) {
      console.log(`${this.greeting} My name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Billy');

// So in this case the function sayHello is called by a dot before it, so this will be myObj

// Principle 3

// code example for New Binding
function Fruit(attrs) {
    this.type = attrs.type;
    this.name = attrs.name;
    this.isRipe = attrs.isRipe;
    this.calories = attrs.calories;
    this.shipped = function(destination) {
        console.log(`Shipping ${this.name} to ${destination}`);
      };
  }

// Principle 4

// code example for Explicit Binding
function AngryPerson(greeter) {
    this.greeting = 'Hello Dummy ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const bill = new AngryPerson('Bill');
  const fred = new AngryPerson('Fred');
  
  bill.speak();
  
  bill.speak.call(fred); 
  */