// 函数柯里化
// 给一个函数传入一部分参数，接着返回另一个函数来接收剩余的参数，当符合要求时执行计算函数。
// 闭包的体现，访问之前传入的参数

const unCurried = (a, b, c) => {
  return (a * b) / c;
};

const sum = (a, b, c, d) => (a * b) / c / d;

const curry = (func, length) => {
  const curried = (...args) =>
    args.length !== func.length
      ? (...params) => curried(...args, ...params)
      : func(...args);
  return curried;
};

const currySum = curry(sum);

console.log(currySum(10)(3)(2, 3));
