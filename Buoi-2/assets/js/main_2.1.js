// 1. Function ES6

/* Khai bao */
// function hello() {
//   console.log("Hello 500 anh em lop JAVA 30");
// }

/* Thuc thi */
// hello();


// Function ES6
// const hi = () => {
//   console.log("Hi 500 anh em!");
// }

// hi();


// 2. Phan biet tham so va doi
// function counter(abc) {
//   // console.log("100");
//   console.log(abc);
// }

// counter("Java 30");

// 3. Cac Function thuong gap

/* 
 * Function co tham so, khong co gia tri ve -> Rat it su dung
 * Note: gia tri tra ve return
*/
// function sayHello(name) {
//   console.log(`hello 500 anh em lop ${name}`);
// }

// sayHello("Web 41");

/*
 * Function co tham so, va co gia tri tra ve -> Thuc te hay dung
 * Ham bat buoc co return
*/
// function sum(a, b){
//   // console.log("Tinh tong");
//   // console.log(a);
//   // console.log(b);

//   const result = a + b;
//   // console.log(result);

//   return result;
//   console.log("log sau return");
// }

// console.log(sum(5, 6));


// 4. Cau lenh if
// >= : So sanh
// > : So sanh
// <= : so sanh
// <: so sanh
// =: gan gia tri
// ==: so sanh gia tri
// ===: so sanh gia tri + kieu gia tri


// let money = 20000000;
// if (money >= 25000000) {
//   console.log("Mua iphone 16");
// }

// 5. Cau lenh if else
// let hour = 12;

// if(hour >= 12) {
//   console.log("Chao buoi trua!");
// }else {
//   console.log("Chao buoi sang");
// }

// Nang cao => Toan tu 3 ngoi: A ? B : C
// => Neu A dung (Dieu kien) chay B, Nguoc lai chay C

// let count = 10;
// (count > 20) ? console.log("COUNT LON HON 20") : console.log("Count nho hon 20");

// 6. Cau lenh dieu kien switch case

// let money = 10000;

// switch (money) {
//   case 12000: {
//     console.log("Ca phe sua");
//     break;
//   }
//   case 10000: {
//     console.log("Ca phe da");
//     break;
//   }
//   case 8000: {
//     console.log("Sting dau");
//     break;
//   }
//   default: {
//     console.log("Tra da");
//     break;
//   }
// }

// First class function
// const count = function sum(a, b) {
//   return a + b;
// }

// // console.log(sum(3, 4));
// console.log(count(3,4));

// Su dung ham lam doi so cho ham khac
// function sum(a, b) {
//   return a + b;
// }
// // console.log(sum(3,4));

// function result(c, d) {
//   return c + d;
// }

// console.log(result(sum(3, 4), 5));


// ES5: Khai bao function truyen thong
// khai bao
// function fnBuy(price){
//   console.log(`Mua hang di, sieu giam gia. Chi con ${price}`);
// }

// ES6: arrow function (Fn mui ten)
const fnBuy = (price) => {
  console.log(price);
}

fnBuy("150k");