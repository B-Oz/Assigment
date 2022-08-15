// ODEV1: Dort Islem Hesap Makinasi (2 Sayı bir operator)


let num1 = +prompt("Enter a first number:");
let operation = prompt("Enter a operation : +,-,/,*");
let num2 = +prompt("Enter your second number:");

if (operation === "+") {
  console.log(`The sum of the numbers you entered : ${num1 + num2}`);
} else if (operation === "-") {
  console.log(`The subtraction of the numbers you entered : ${num1 - num2}`);
} else if (operation === "/") {
  console.log(`The division of the numbers you entered : ${num1 / num2}`);
} else {
  console.log(`The multiplication of the numbers you entered : ${num1 * num2}`);
}