var num = 1; //function scope
console.log(num);
num = 5; //reassign
console.log(num);

let num2 = 6; //block scope
console.log(num2);
num2 = 10; //reassign
console.log(num2);

const num3 = 3; //block scope
console.log(num3);
//num3 = 8; //no reassign
// console.log(num3);

console.log(5 == "5"); //true   => value check
console.log(5 === "5"); //false  => type + value check

let arr = [1, 23456, 77799];
console.log(arr.length); //

let max = Math.max(...arr);
console.log(max); //77799

//named function declaration
function reverse(str) {
  return str.split("").reverse().join("");
}

console.log(reverse("hello!"));

function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(5)); //false
console.log(isEven(4)); //true

//anonymous function declaration

const reverse2 = function (str) {
  return str.split("").reverse("").join("");
};

console.log(reverse2("Ebru"));

//arrow function with implicit return
let arrReverse = (str) => str.split("").reverse().join("");
console.log(arrReverse("Kemal"));

arr = [1, 2, 3, 45, 6, 78];
console.log(arr);
arr = arr.map((num) => num * 2); //takes a callback fn
console.log(arr);

let x;
console.log(x); //undefined
console.log(typeof x); //undefined

x = null;
console.log(x); //null
console.log(typeof x); //object  => A JS Bug

x = "Kemal and Ebru";

console.log(`Hello ${x}!`); //Template Literal (string interpolation) Usage with backticks

arr = [1, 2, 2, 3, 4, 4, 5];

// const set = new Set(arr);
// console.log(set);
// const unique=[...set];
// console.log(unique);

const unique = [];

//obtaining unique values with ES6
arr.forEach((item) => {
  if (!unique.includes(item)) {
    unique.push(item);
    console.log(unique);
  }
});

console.log(unique);

const palindrome = (param) => {
  const reverse = param.split("").reverse().join("");
  return reverse == param;
};

console.log(palindrome("level")); //true
console.log(palindrome("Ebru")); //false

//reduce method: Bir diziyi tek bir değere indirgemeye yarar.
const sum = unique.reduce((a, b) => a + b, 0);

console.log(sum); //15

{
  let variable; //block scope
  console.log(variable);
}

//encapsulation: Verinin dışarıdan direkt olarak erişilmesi engellemek.Sadece kontrollü bir şekilde veriye belli metodlar üzerinden erişilmesini sağlamak.

function createBankAccount(initialBalance) {
  let balance = initialBalance; //private variable

  //Bu metodlar balance değişkenine referans tuttuğu için JS scope'u canlı tutar. Bu scope'a "closure" denir.
  return {
    deposit(amount) {
      balance += amount; //balance=balance+amount;
    },
    withdraw(amount) {
      balance -= amount;
    },
    getBalance() {
      return balance;
    },
  };
}

const account = createBankAccount(1000);

account.deposit(500);

console.log(account.getBalance()); //1500

console.log(account.balance); //undefined  => no access!
