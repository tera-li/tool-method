function Animal() {
  this.name = "Animal";
}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

function Dog() {
  this.name = "Dog";
}

// 只修改这一行下面的代码
Dog.prototype = new Animal();

let dog = new Dog();
console.log(dog);
/*
dog === Dog 实例
dog.__proto__ === Animal 实例
dog.__proto__.__proto__ === Animal.prototype
dog.__proto__.__proto__.__proto__ === Object
dog.__proto__.__proto__.__proto__.__proto__ === null
*/
