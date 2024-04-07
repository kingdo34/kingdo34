// specialeleven
// function specialEleven(n){
//     if(n%11 == 0 || n%11==1)
//         return true;
//         else
//         return false;
// }


// squirellplay
// function squirrelPlay(temp, isSummer){
//     if (isSummer && temp <= 100 && temp >= 60)
//     return true;
//     if (!(isSummer) && temp <= 90 && temp >=60)
//     return true;
//   else
//     return false;
// }


// datefashion
// function dateFashion(you, date){
//     if ((you >= 8 && date > 2) || (date >= 8 && you > 2))
//       return 2;
//     if (you <= 2 || date <= 2)
//       return 0;
//       else
//       return 1;
// }


// sortasum
// function sortaSum(a, b){
//     if(a + b >= 10 && a + b <= 20) {
//         return 20}
            // else {
//                 return a + b }
// }


// love6
// function love6(a, b){
//     return (a == 6 || b == 6 || Math.abs(a-b) == 6 || a+b == 6);
// }


// alarmclock
// function alarmClock(day, vacation){
//     return (vacation ? (day == 0 || day == 6 || day == 7 ? "off" : "10:00") :
//         (day >= 1 && day <= 5 ? "7:00" : "10:00"));
// }


// in1to10
// function in1To10(n, outsideMode){
//     return (outsideMode? (n>=10 || n<=1) : (n>=1 && n<=10));
// }


// more20
// function more20(n){
//     if(n%20 == 1 || n%20 == 2)
//       return true;
//         else return false;
// }


// less20
// function less20(n){
//     return (n+1)%20==0||(n+2)%20==0;
// }


// nearten
// function nearTen(num){
//     return (num%10<3 || num%10>7)
// }


// teensum
// function teenSum(a, b){
//     if (a > 12 && a < 20 || b > 12 && b < 20)
//       return 19;
//       return a + b;
// }


// answercell
// function answerCell(isMorning, isMom, isAsleep){
//     if(isAsleep)return false;
//     if(!isMorning||isMom)return true;
//       else return false;
// }


// sharedigit
// function shareDigit(a, b){
//     return a/10==b/10||a/10==b%10||a%10==b%10||a%10==b/10;
// }

fizzString2
function fizzString2(n){
    if(n%5==0&&n%3==0)return "FizzBuzz!";
    else if(n%5==0&&n%3!=0) return "Buzz!";
    else if(n%5!=0&& n%3==0) return "Fizz!";
    else return n+"!";
  }