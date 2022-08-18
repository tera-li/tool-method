function Animat(params) {
  this.name = "Animat";
}
Animat.prototype = {
  constructor: Animat,
  eat() {
    console.log("nom nom nom");
  },
};

// 创建一个新对象，把传入的对象赋值给新对象的原型
// 新对象的原型 === 传入的对象
let dog = Object.create(Animat.prototype);
console.log(dog);
console.log(dog.__proto__);
console.log(dog.constructor.prototype);
console.log(Animat.prototype);
