// 函数柯里化
// 给一个函数传入一部分参数,此时就会返回一个函数来接收剩余的参数。

function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function (y) {
    return x + y;
  };
}

const curried = (x) => (y) => x + y;

curried(1)(2);
