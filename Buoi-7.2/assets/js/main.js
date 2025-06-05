// Khai niem dong bo trong lap trinh
// -> Thuc hien cac cong viec tuan tu, xong cong viec nay toi cong viec khac.
// -> Tong thoi gian: Tong thoi gian cua cac cong viec cong lai voi nhau


// Khai niem bat dong bo trong lap trinh
// -> Thuc hien cac cong viec cung 1 luc
// Tong thoi gian: Bang cong viec dai nhat


// ====== Chu Y =======
// Trong JS => chuong trinh mac dinh chay bat dong bo.
// Neu bi loi, lap tuc dung chuong trinh luon.




// Vi du bat dong
// JS ton tai san 1 Fn setTimout() -> Quy dinh thoi gian thuc hien logic (pending).
// const fnA = () => {

//   setTimeout(()=>{
//     console.log("Thuc hien cong viec 1");
//   }, 3000); // 3000 ms
// }

// const fnB = () => {
//   setTimeout(()=>{
//     console.log("Thuc hien cong viec 2");
//   }, 5000); //5000 ms
// }



// fnA();
// fnB();

// Tong thoi gain chay fnA() && fnB() => 5s


// 3. Vi du ve callback funciton
// => Ban chat: giup JS thuc hien 1 cach tuan tu (dong bo) cong viec
/*
 * Input: 3 cong viec
          + Lam bai tap (3s)
          + Di da bong (5s)
          + Di Tam (6s)
  * Output: Thuc hien cac viec tren 1 cach dong trong JS
*/

// Mac dinh JS
// const work1 = () => {
//   console.log("work 1 run: ");

//   setTimeout(()=> {
//     console.log("Lam bai tap");
//   }, 3000);
// }

// const work2 = () => {
//   console.log("work 2 run: ");

//   setTimeout(()=> {
//     console.log("Di da bong");
//   }, 5000);
// }

// const work3 = () => {
//   console.log("work 3 run: ");

//   setTimeout(()=>{
//     console.log("Di tam")
//   }, 6000);
// }

// // Thuc thi
// work1();
// work2();
// work3();


// Su dung callback function => bat dong bo ve dong bo. (Cach cu ~~~)
/*
 * Input: 3 cong viec
          + Lam bai tap (3s)
          + Di da bong (5s)
          + Di Tam (6s)
  * Output: Thuc hien cac viec tren 1 cach dong trong JS
*/
// const work1 = (name, callback) => {
//   console.log("Bat dau cong viec: ...");

//   setTimeout(() => {
//     console.log(name);
//     callback();
//   }, 3000); // sau 3000ms thuc hien xong cv 1
// }

// const work2 = (name, callback) => {
//   console.log("Cong viec 2: ...");

//   setTimeout(()=> {
//     console.log(name);
//     callback();
//   }, 5000);
// }

// const work3 = (name) => {
//   console.log("Cong viec 3: ...");

//   setTimeout(()=> {
//     console.log(name);
//     console.log("Ket thuc tat ca cong viec");
//   }, 6000);
// }

// work1("Thuc hien lam bai tap xong", () => {
//   work2("Thuc hien cong viec da bong xong", () => {
//     work3("Thuc hien cong viec di tam xong");
//   });
// });


// 4. Promise (Giai quyet bai toan callback function);
// new Promise => Cu phap tao loi hua
// -> Then: Cu phap, thuc thi loi hua (Neu thanh cong se tra du lieu)
// -> Catch: Cu phap, xu ly truong hop loi hua khong tra ve; 


// Chi mua iphone xong -> Thua tien mua apple watch
// let money = 40000; // gia dinh, ~~~

// let priceIphone17 = 35000;
// let priceAppleWatch = 5000;

// // Khai bao loi hua (Tao ra loi hua)
// let buyIphone = new Promise((resolve, reject) => {
//   if (money > priceIphone17) {
//     resolve("Mua iphone 17promax");
//   } else {
//     reject("Code them du an...");
//   }
// });

// let buyAppleWatch = new Promise((resolve, reject) => {
//   if ((money - priceIphone17 - priceAppleWatch) >= 0) {
//     resolve("Mua luon Apple Watch");
//   } else {
//     reject("Khong du tien de mua...");
//   }
// });

// // Thuc thi
// buyIphone
//   .then((data) => {
//     console.log("Ket qua tra ve buyIphone: ", data);
//     return buyAppleWatch;
//   })
//   .catch((error) => {
//     console.log("Truong hop loi buyIphone: ", error);
//     return;
//   });

// buyAppleWatch
//   .then((res)=>{
//     console.log("Ket qua tra ve buyAppleWatch: ", res);
//   })
//   .catch((err)=> {
//     console.log("Truong hop loi buyAppleWatch: ", err);
//   })


// 5. async/await

// 5.1. async dat truoc 1 fn -> fn tu binh thuong -> promise

const hello = async () => {
  return "hello"
};

// console.log(hello());
hello()
  .then((abc)=>{
    console.log(abc);
  })
  .catch((err)=>{
    console.log(err);
  })