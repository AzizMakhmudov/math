function something(a, b = 2) {
  return a ** (1 / b);
}
console.log(something(20));
// ildiz topish

function calc(nums) {
  return nums.reduce((a, b) => a + b) / nums.length;
}
console.log(calc([10, 10, 10]));
// O'rta arifmetika

function calc(p) {
  let a = 10;
  let b = 20;
  let c = 30;
  return (p = a + b + c);
}
console.log(calc())
// uchburchak peremetri