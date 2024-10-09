// let num1 = 14;
// let num2 = "14";
// // let result = num1 + Number(num2);
// // let result = num1.toString() + num2;
// let result = num1 + num2; //string birleştirme
// let isEqual = num1 == num2; //İki değişkeni değer bakımından karşılaştırır.
// isEqual = num1 === num2; // İki değişkeni hem değer hem de tip bakımından karışılaştırır.

// let name = "Ebru";
// let surname = "Özdemir";
// let age = 29;

// let personelInfo = {
//   name: "Ebru",
//   surname: "Özdemir",
//   age: 29,
// };

// let arr = [
//   {
//     name: "Ebru",
//     surname: "Özdemir",
//     age: 29,
//   },
//   {
//     name: "Ebru",
//     surname: "Özdemir",
//     age: 29,
//   },
//   {
//     name: "Ebru",
//     surname: "Özdemir",
//     age: 29,
//   },
// ];

// console.log("result", result);
// console.log("isEqual", isEqual);
// console.log("personelInfo", personelInfo);
// console.log("arr", arr);
// console.log(arr[0]);
// console.log(arr[1].name, arr[2].age);

// document.getElementById("js").innerHTML = "JS";

// //FUNCTIONS

// //before ES6 - old usage

// let number1 = 5;
// let number2 = 7;

// function sum(param1, param2) {
//   let result = param1 + param2;
//   console.log(result);
// }

// sum(number1, number2);

// //After ES6 - Arrow Function- common usage

// const minus = (param1, param2) => {
//   return param1 - param2;
// };

// let resultFn = minus(number1, number2);

// // call, apply and bind methods

// //call method

// const exampleFn = (a, b) => {
//   //   console.log(this.name, this.surname);
//   return a + b;
// };

// // let obj = { name: "Ebru", surname: "Özdemir", age: 29 };

// // exampleFn.call(obj);

// //apply method

// let arg = [1, 5];
// let res = exampleFn.apply(null, arg);
// console.log(res);

// //STRING METHODS

// let str = "JavaScript Course";
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.indexOf("Course")); //11
// console.log(str.indexOf("C")); //11
// console.log(str.indexOf("JavaScript")); //0
// // console.log(str.lastIndexOf("JavaScript"));
// console.log(str.slice(0, 5)); //JavaS      //Hem negatif hem de pozitif indeksler alabilir.
// console.log(str.substring(0, 5)); //JavaS  //Negatif indeks alamaz.
// console.log(str.replace("Course", "Eğitimi")); //JavaScript Eğitimi
// console.log(str.split(" ")); //Splits by using space character
// console.log(str.trim()); //Removes the white space
// console.log(str.charAt(2)); //v

// //ARRAY METHODS

// let arr2 = ["javaScript", "course"];
// let arr3 = ["front", "end", "developer"];
// // console.log(arr2);
// // arr2.pop();
// // console.log(arr2);
// // arr2.push("language");
// // console.log(arr2);
// // arr2.unshift("programming");
// // console.log(arr2);
// // arr2.shift();
// // console.log(arr2, arr3);
// // let newArr = arr2.concat(arr3);
// // console.log(newArr);
// console.log(arr3.slice(0, 2)); //["front", "end"]
// console.log(arr2.splice(0, 1)); //["javaScript"]
// console.log(arr2.indexOf("language")); //1

// let newArr = arr2.filter((item) => item === "course"); //returns a new array   => ["course"]
// console.log(newArr);

// let findedObj = arr2.find((item) => item === "course"); //returns a new obj   => course
// console.log(findedObj);

// arr3 = [1, 2, 3, 4, 5, 6, 7, 8];

// newArr = arr3.filter((item) => item % 2 === 0); //returns the array of even numbers
// console.log(newArr);

// newArr = arr3.map((item) => item * 3); // returns a new array
// console.log(newArr);

// let resultValue = arr3.reduce((acc, item) => acc + item, 0);
// console.log(resultValue);

// resultValue = arr3.some((item) => item % 2 === 0); // returns a boolean value
// console.log(resultValue); //true

// resultValue = arr3.every((item) => item % 2 === 0); // returns a boolean value
// console.log(resultValue); //false

// arr3.forEach((item) => console.log(item)); //does not return a new array

// console.log(arr3.sort((a, b) => a - b)); //sorting from small number to big number
// console.log(arr3.sort((a, b) => b - a));

// let arr4 = ["apple", "orange", "grapes"];
// console.log(arr4.reverse());

// //OBJECT METHODS

// personelInfo = {
//   name: "Ebru",
//   salary: 3500, // key:value pair
//   location: "NewYork",
//   //nested object is created by using object or function
//   technicalInfo: {
//     title: "front-end developer",
//     experience: "2 years",
//   },
//   greet: () => {
//     console.log(`Hello,${personelInfo.name}`);
//   },
// };

// console.log(personelInfo.salary); //dot notation
// console.log(personelInfo["location"]); //bracket notation

// personelInfo.greet();

// // personelInfo = {};
// // personelInfo.surname = "Özdemir";

// // console.log(personelInfo);

// //CLASS Yapısı

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log(`Welcome ${this.name}!`);
//   }
// }

// const newPerson = new Person("Ebru", 29);

// console.log(newPerson);
// newPerson.greet();

// //Inheritance
// class Student extends Person {
//   constructor(name, age, school) {
//     super(name, age); // Üst sınıfın constructor'ını çağrılır.
//     this.school = school;
//   }
//   study() {
//     console.log(`${this.name}, your school is ${this.school}.`);
//   }
// }

// const newStudent = new Student("Ebru", 29, "ESOGU");
// console.log(newStudent);
// newStudent.greet();
// newStudent.study();

// // function Person(course, title) {
// //   (this.course = course), (this.title = title);
// // }

// // const person = new Person("JS", "Bootcamp"); //created a Person object
// // console.log(person);
// // console.log(person.course, person.title);
// // const { course, title } = person; //object destructuring
// // console.log(course, title);

// //spread object
// let defaults = { theme: "default", fontSize: 20 };
// let customSettings = { theme: "light", fontSize: 17 };

// let compObj = { ...defaults, ...customSettings }; //created a new object with spread operator
// console.log(compObj);
// let ebru = "ebru";
// console.log([...ebru]);

// for (const key in personelInfo) {
//   console.log(key, personelInfo[key]);
// }

// let person2 = {};

// Object.defineProperty(person2, "age", {
//   value: 29,
//   writable: false, //age key'inin value değeri değiştirilemez.
//   configurable: false, //age key'i silinemez ve yapılandırılamaz.
// });
// person2.age = 40; // value does not change because of "writable" property
// console.log(person2);

// personelInfo.salary = 5000;
// console.log(personelInfo.salary);
// Object.freeze(personelInfo); // properties of object cannot be changed
// personelInfo.salary = 6000;
// personelInfo.surname = "Özdemir"; // can not be add a new property
// console.log(personelInfo.salary, personelInfo.surname);

// let car = { make: "Audi", model: "Tiguan" };

// let keys = Object.keys(car); //creates a new array with keys
// console.log(keys);

// let values = Object.values(car);
// console.log(values); //creates a new array with values

// let total = Object.entries(car);
// console.log(total); //obtains key:value pairs as an array

// console.log(Object.fromEntries(total)); //obtains the car object again

// Object.seal(car); //properties of object can be changed
// car.make = "Mercedes";
// car.color = "Black"; // can not be add a new property
// console.log(car.make, car.color);

// //JSON (Javascript Object Notation)

// let jsonStr = JSON.stringify(car); // {"make":"Mercedes","model":"Tiguan"}
// console.log(jsonStr);

// console.log(JSON.parse(jsonStr)); // {make: 'Mercedes', model: 'Tiguan'}

// // !!!! Computed Property
// let model = "color"; //key is changed dynamically.
// car = { make: "Audi", [model]: "White" }; // {make: 'Audi', color: 'White'}
// console.log(car);

// let hasName = car.hasOwnProperty("color"); //true
// console.log(hasName);

// let obj1 = { a: 1, b: 2 };
// let obj2 = { a: 3, c: 4 };

// let mergeObj = Object.assign({}, obj1, obj2);
// console.log(mergeObj); // { a: 3, b:2, c: 4 };

// //SENKRON-ASEKRON (callback - promise  - async & await)

// console.log("console-1");

// // setTimeout(() => {
// //   console.log("console-2");
// // }, 3000);

// //callback
// // function async(text, callback) {
// //   setTimeout(() => {
// //     callback(text);
// //   }, 3000);
// // }
// // async("console-2", (obj) => {
// //   console.log(obj);
// // });

// //promise
// // const promiseFunc = (text) => {
// //   return new Promise((resolve, reject) => {
// //     let settings = true;
// //     setTimeout(() => {
// //       if (settings) resolve(text);
// //       reject(new Error("Hatalı islem!"));
// //     }, 2000);
// //   });
// // };

// // promiseFunc("console-2")
// //   .then((pr) => console.log(pr))
// //   .catch((err) => console.log(err));

// // promiseFunc("console-3")
// //   .then((pr) => console.log(pr))
// //   .catch((err) => console.log(err));

// // Promise.all([promiseFunc("console-2"), promiseFunc("console-3")])
// //   .then((pr) => console.log(pr[0], pr[1]))
// //   .catch((err) => console.log(err));

// console.log("console-4");

// const getData = async () => {
//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// getData()
//   .then((pr) => console.log(pr))
//   .catch((error) => console.log(error));

// //Date Object

// const newDate = new Date(); //Güncel tarihi verir.  =>   Wed Sep 25 2024 17:05:33 GMT+0300 (GMT+03:00)
// const birtday = new Date("1995", "5", "6", "18", "00"); // Tue Jun 06 1995 18:00:00 GMT+0300 (GMT+03:00)
// console.log(newDate);
// console.log(birtday);
// console.log(newDate - birtday); //ms cinsinden farkı verir. =>  924822503671
// const year = newDate.getFullYear();
// const month = newDate.getMonth();
// const day = newDate.getDay();
// const time = newDate.getTime();
// console.log(year, month, day, time);

// //if-else block

// let testObj = 5;

// if (testObj < 0) {
//   console.log("Sayı negatif!");
// } else if (testObj > 0) {
//   console.log("Sayı pozitif!");
// } else {
//   console.log("Sayı sıfıra eşit!");
// }

// //switch-case

// let testobj2 = 4;

// switch (testobj2) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;

//   default:
//     console.log("Invalid value!");
//     break;
// }

// //for loop

// const testArray = ["ebru", "özdemir", 29];

// for (let i = 0; i < testArray.length; i++) {
//   const element = testArray[i];
//   console.log(element);
// }

// //while

// //Condition doğru olduğu sürece döngü devam eder.
// while (testObj <= 10) {
//   console.log(testObj);
//   testObj++;
// }

// /* Burada sonsuz döngü oluşturulmuş olur çünkü testObj değeri 5'tir ve hep 10'dan küçük kalacaktır. */
// // while (testObj <= 10) {
// //   console.log(testObj);
// // }

// //break-continue

// for (let i = 0; i < 5; i++) {
//   if (i == 4) {
//     console.log("Sayı 4, döngü sonlandı!");
//     break;
//   }
//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   if (i == 4) {
//     console.log("Sayı 4, döngünün bu kısmı atlandı!");
//     continue;
//   }
//   console.log(i);
// }

// //for in loop

// //Objelerin sahip olduğu key-value çiftlerinden key'leri sırasıyla gezer.

// let testObj3 = { marka: "Audi", model: "A3", yıl: 2023 };

// for (const elementKey in testObj3) {
//   const elementValue = testObj3[elementKey]; //testObj3.key

//   console.log(elementKey, elementValue);
// }

// //for of loop

// //İterable nesnelerin elemanlarını sırasıyla gezer.

// for (const element of testArray) {
//   console.log(element);
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let totalNumbers = 0;

// for (const element of numbers) {
//   totalNumbers += element; // totalNumbers = totalNumbers + element;
// }

// console.log("totalNumbers", totalNumbers);

// //Set

// //Set metodu sayesinde tekrar eden elemenlar Set'e dahil olmaz.
// //Böylece filtreleme işlemine gerek olmadan benzersiz elemanlara sahip bir dizi oluşturulabilir.

// const dummySet = new Set();

// console.log(dummySet);
// dummySet.add("kemal");
// dummySet.add("özdemir");
// dummySet.add(28);
// dummySet.add(28);
// console.log(dummySet.has("İstanbul")); //false
// console.log(dummySet.has(28)); //true

// console.log(dummySet);

// for (const item of dummySet) {
//   console.log(item);
// }

// /* forEach break ve continue ifadelerini desteklemez. */
// // returns undefined => Burada forEach yerine map metodu kullanılmalıdır.
// // Eğer değer döndürmek isteniyorsa map,filter ve reduce gibi metodlar kullanılmalıdır.
// const testObj_ = dummySet.forEach((item) => {
//   console.log(item);
// });

// let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 28];

// const numbersArr = [...new Set(numbers2)];
// const dummySetArr = [...dummySet];
// console.log(numbersArr);
// console.log(dummySetArr);

// const intersections = [...numbersArr].filter((item) => {
//   return dummySetArr.includes(item);
// });

// console.log(intersections);

// const differences = [dummySetArr].filter((item) => {
//   return !numbersArr.includes(item);
// });

// console.log(differences);

// const union = [...numbersArr, ...dummySetArr];
// const unionSet = new Set(union);
// console.log(union);
// console.log(unionSet);

// //Map

// const countries = new Map();

// console.log(countries);

// countries.set("TR", "Turkey");
// countries.set("EN", "England");

// console.log(countries);

// console.log(countries.get("TR")); //Turkey
// console.log(countries.has("EN")); //true

// countries.forEach((country) => {
//   console.log(country);
// });

// console.log(countries.size); //2

// for (let [key, value] of countries) {
//   console.log(`${key},${value}`);
// }

// /* NOT: for of döngüsü iterable yapıları gezmek için kullanılır. (Array,Set,Map)
// Objelerde ise for in döngüsü kullanılır.*/

// for (const key in testObj3) {
//   const element = testObj3[key];
//   console.log(key, element);
// }

// //DOM Manipulation

// // const button = document.getElementById("btn");
// const button = document.querySelector("#btn");
// console.log(button);

// button.style.cursor = "pointer";
// button.textContent = "Button";

// //Elemana sınıf ekleme
// button.classList.add("btn-first");
// //Elemanın tek sınıfı "btn-second" olur.
// button.className = "btn-second";

// button.addEventListener("click", function () {
//   console.log("Butona tıklandı!");
//   // alert("Butona tıklandı!");
// });

// //box class'ına sahip ilk elemanı döndürür.
// const box = document.querySelector(".box");
// console.log(box);

// //box class'ına sahip tüm elemanları kapsayan bir NodeList döner.
// const htmlElements = document.querySelectorAll(".box");
// console.log(htmlElements);

// box.addEventListener("mouseover", function () {
//   box.textContent = "Mouse Over";
//   box.style.backgroundColor = "lightblue";
// });

// box.addEventListener("mouseout", () => {
//   box.textContent = "Mouse Out";
//   box.style = "white";
// });

// const input = document.getElementById("text");
// const textInput = document.querySelector("input");
// console.log(textInput);

// textInput.style.display = "block";

// const result = document.querySelector(".result");
// console.log(result);

// textInput.addEventListener("input", function (e) {
//   console.log(e.target.value);
//   result.textContent = "Input Text:" + " " + e.target.value;
// });

// const form = document.querySelector("form");
// console.log(form.elements);

// form.addEventListener("submit", function (event) {
//   //Formun tarayıcı tarafından sunucuya gönderilmesini engeller.
//   event.preventDefault();
//   const name = form.elements.name.value;
//   const email = form.elements.email.value;
//   const password = form.elements.password.value;
//   const formBtn = form.elements["form-btn"].value;
//   console.log(name, email, password, formBtn);
// });

// const list = document.querySelector("ul");
// console.log(list);

// function addEvent() {
//   //created li element
//   const node = document.createElement("li");
//   console.log(node);
//   //create text for li element
//   const text = document.createTextNode("ebru");
//   console.log(text);

//   //text node embedded
//   node.appendChild(text);
//   console.log(node);

//   //li embedded
//   list.appendChild(node);
//   console.log(list);
// }

// const imgAttr = document.querySelector("img").attributes;
// console.log(imgAttr);

// const listAttr = document.createElement("ul");
// //embedded ul element
// document.body.appendChild(listAttr);
// console.log(listAttr);

// let text = "";

// for (let i = 0; i < imgAttr.length; i++) {
//   text = imgAttr[i].name + " " + imgAttr[i].value; //string
//   console.log(text);

//   const listItem = document.createElement("li");

//   listItem.innerHTML = text;

//   listAttr.appendChild(listItem);
// }

// const nodes = document.body.childNodes; //returns node lists
// console.log(nodes);

// console.log(document.body.children); //returns HTML collection
// console.log(document.body.firstChild); //returns first node lists element
// console.log(document.body.firstElementChild); //returns first HTML collection element

// console.log(document.body.hasAttributes()); //false
// console.log(document.body.firstElementChild.hasAttributes()); //form
// console.log(document.body.firstElementChild.attributes);

// let tasks = [];
// const input = document.querySelector("input");
// const list = document.createElement("ul");
// document.body.appendChild(list);

// function addTask() {
//   const taskText = input.value.trim(); //user input
//   const existingTasks = tasks.filter((item) => {
//     return item.task == taskText;
//   });
//   console.log(existingTasks);
//   if (taskText && existingTasks.length == 0) {
//     tasks.push({ task: input.value, done: false });
//   }
//   console.log(tasks);
//   input.value = "";

//   displayTasks();
// }

// function displayTasks() {
//   list.innerHTML = "";
//   tasks.forEach((item, index) => {
//     console.log(item.task);
//     const li = document.createElement("li");
//     li.textContent = item.task;
//     li.style.textDecoration = item.done ? "line-through" : "none";
//     li.style.cursor = "pointer";
//     list.appendChild(li);
//     li.addEventListener("click", () => {
//       toggleTask(index);
//     });
//   });
// }

// function toggleTask(index) {
//   tasks[index].done = !tasks[index].done;
//   console.log(tasks);
//   displayTasks();
// }

// function createDeleteBtn() {
//   const deleteButton = document.createElement("button");
//   deleteButton.textContent = "Listeyi Sil";
//   document.body.appendChild(deleteButton);
//   deleteButton.addEventListener("click", () => {
//     tasks = [];
//     displayTasks();
//   });
// }

// createDeleteBtn();
// //Sayfanın yüklenmesi ile birlikte liste ekrana basılır.
// displayTasks();

let currentIndex = 0;

const slider = document.querySelector(".slider");
console.log(slider);
const images = slider.querySelectorAll("img");
console.log(images);
const backBtn = document.getElementById("back");
const nextBtn = document.getElementById("next");
const imagesCount = images.length;

const backImageHandler = () => {
  currentIndex = (currentIndex - 1 + imagesCount) % imagesCount;
  console.log(currentIndex);
  updateSlider();
};

const nextImageHandler = () => {
  currentIndex = (currentIndex + 1) % imagesCount;
  console.log(currentIndex);
  updateSlider();
};

backBtn.addEventListener("click", backImageHandler);
nextBtn.addEventListener("click", nextImageHandler);

const updateSlider = () => {
  const slideWidth = 250;
  const offset = -currentIndex * slideWidth;
  console.log("offset", offset);
  slider.style.transform = `translateX(${offset}px)`; //Slider'ı yatay olarak sağ ve sola doğru hareket ettirir.
  slider.style.transition = "transform 0.5s"; //Transform 0.5s süreyle yavaş bir şekilde yapılır.
};

updateSlider();
