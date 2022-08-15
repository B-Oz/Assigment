// ODEV2 :Clarusway’deki haftalık ders ve etkinlik programınızı, console’dan girilen gün değerine göre çıktı veren kodu switch-case yapısı ile yazınız.
// Pazartesi, Salı ,Çarşamba, Perşembe -> InClass
// Cuma -> Teamwork
// Cumartesi ->  InClass + Workshop
// Pazar -> Self-Study
// Aksi takdirde -> Yanlis gun girildi.




let day = +prompt("Enter the numbers corresponding to the days of the week:");

switch (day) {
  case 0:
    console.log("Sunday --> Self Study");
    break;
  case 1:
    console.log("Monday --> In-Class");
    break;
  case 2:
    console.log("Tuesday --> In-Class");
    break;
  case 3:
    console.log("Wednesday-->In-Class");

    break;
  case 4:
    console.log("Thursday --> In-Class");
    break;
  case 5:
    console.log("Friday --> Teamwork");
    break;
  case 6:
    console.log("Sunday --> In-Class + Workshop");
    break;

  default:
    console.log("Sorry, you entered wrong number");
}