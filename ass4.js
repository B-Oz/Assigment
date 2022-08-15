// ODEV4: Kredi Risk Programı
// Console’dan kişinin gelir ve gider miktarını alan
// eğer kişinin geliri giderinden en az asgari ücret kadar fazla ise Kredi Verilebilir 🤑
// değilse Kredi Verilemez 🥺
// şeklinde çıktı veren kodu Ternary deyimi kullanarak yazınız.

let income = +prompt("Enter your income:");
let expense = +prompt("Enter your expense:");
let extraction = income - expense ;

extraction>= 5500 ? console.log("You can get a loan from our bank") : console.log("Sorry, You cannot get a loan from our bank")