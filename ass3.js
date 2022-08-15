// ODEV3:Maasi asgari ucretten az olanlara %50 zam,fazla olanlara ise %10 zam yapmak istiyoruz.

const money = 5500;
let salary = +prompt("Enter your salary:");

if (money >= salary) {
  let newSalary = (salary * 1.5).toFixed(0);
  console.log(
    `We are making a raise because your salary is less than the minimum wage.Your new salary : ${newSalary}`
  );
}
 else if (money < salary) {
  let newSalary = (salary * 1.1).toFixed(0);
  console.log(
    `Good news! we made a salary increase.Your new salary : ${newSalary}`
  );
}