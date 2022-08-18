function A() {
  this.name = "123";
  // this === 实例对象
  console.log(this);
}
// 直接赋值构造函数的prototype会导致constructor丢失，因此需要手动指定constructor
A.prototype = {
  //   constructor: A,
  name1: "name1",
};
const a = new A();
console.log(a instanceof A);
