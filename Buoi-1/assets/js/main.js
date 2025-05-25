// console.log("abc xyz");

// 1. Khai bao bien - var, let, const
// const - bien khong bi thay doi - dung nhieu
// let - gan lai duoc gia tri - dung nhieu
// var - gan lai duoc gia tri - dung it / han che dung - hosting

var name = "java 30";
name = "java 30 123";
console.log(name);

let age = "50";
age = "30";
console.log(age);

const email = "nguyenvana@gmail.com";
console.log(email);

// email = "123";

// 2. Quy tac dat ten bien
const homeWork = "Lam bai tap ve nha day du!";
console.log(homeWork);

// 3. Kiem tra kieu du lieu cua bien
const count = 30;

console.log(typeof (count));

// 4. Pham vi bien 
// global - nam ngoai cac khoi block { ... } - dung duoc trong toan bo du an
let test = "example.test";
console.log(test);

// local - trong function

/* cu phap khai bao function */ 
function hello() {
  console.log(test);
  console.log("Hello viet nam!");
   company = "Techmaster";
  console.log(company);
}

/* Thuc thi */
hello ();
console.log(company);


// 5. Kieu du lieu
const date = "2025/05/16 \" T00:00";
console.log(date);

const day = '16 "';
console.log(day);

// back-tick - es6
const blogContent = `abadsjf alkdsjlfa j' " / ? test alkdsjflasjd`;
console.log(blogContent);

// Cong chuoi
const firstName = "Van";
const lastName = "Teo";
// const fullName = firstName + " " + lastName;
const fullName = `${firstName} ${lastName}`;
console.log(fullName);

const num = 5;

// console.log(firstName + num);