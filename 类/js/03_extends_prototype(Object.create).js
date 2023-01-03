function Animal() {
  this.name = "Animal";
}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

// 创建一个新对象，把传入的对象赋值给新对象的原型
// 新对象的原型 === 传入的对象
let dog = Object.create(new Animal());
console.log(dog);
console.log(dog.__proto__);
console.log(dog.constructor.prototype);
console.log(Animal.prototype);

/*
dog === {}
dog.__proto__ === Animal 实例
dog.__proto__.__proto__ === Animal.prototype
dog.__proto__.__proto__.__proto__ === Object
dog.__proto__.__proto__.__proto__.__proto__ === null
*/
