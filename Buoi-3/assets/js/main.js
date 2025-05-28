// 1. Object Thuan Tuy
// const username = {
//   name: "Nguyen Van A",
//   age: 20
// }
// console.log(username);


// 2. Values Type
// let a = 1;
// let b = a;

// b = b + 2;

// console.log(a); // 1
// console.log(b); // 3

// 3. References Types (Kieu tham chieu)
// let array_1 = [1,2,3,4,5]; // 0 , 1, 2, 3, 4

// let array_2 = array_1;

// // Input: [1,2,3,4,5] => [1,2,3,4,5,7]
// // Them 1 phan tu vao mang 2 cach
// // C1: Truy cap phan tu can them chi so => gan gia tri moi
// // array_2[5] = 7;
// // C2: Su dung push trong js
// array_2.push(7);

// console.log("array_1: ", array_1);
// console.log("array_2: ", array_2);

// 4. Duyet mang voi for

// Input:  [2,3,4,6,7,9]
// 2 > Chi so 0
// 3 > Chi so 1
// 4 > Chi so 2
// 6 > Chi so 3
// 7 > Chi so 4
// 9 > Chi so 5

/*
 * Output
 * 1. Duyet qua mang -> In gia tri
 * 2. Tinh tong cua mang
 * 3. Tinh tong cac gia tri le cua mang
*/

// const array_3 = [2,3,4,6,7,9]; 

// let sum = 0;
// let sumOdd = 0;
// for(let i = 0; i < array_3.length; i++) {
//   console.log("Duyen qua mang, in ra cac gia tri cua mang", array_3[i]);

//   // Tinh Tong
//   sum += array_3[i];

//   // Tinh tong pt le
//   if(array_3[i] % 2 != 0){
//     console.log("Phan tu le cua mang" ,array_3[i]);
//     sumOdd += array_3[i];
//   }
// }

// console.log("Tong cua mang", sum);
// console.log("Tong cac so le mang: ", sumOdd);

// // Vong Lap 1: 0 + 2 => 2
// // Vong lap 2: KQ_1 + 3 => 2 + 3 = 5
// // Vong lap 3: KQ_2 + 4 => 5 + 4 = 9
// // Vong lap 4: KQ_3 + 6 => 9 + 6 = 15
// // Vong lap 5: KQ_4 + 7 => 15 + 7 = 22
// // Vong lap 6: KQ_5 + 9 => 22 + 9 = 31

// 5. Duyet mang voi forEach()
const array_4 = [1, 2, 3, 4, 5];

// input: [1,2,3,4,5]
/*
 * Output: 
 * 1. Duyet qua phan tu mang va in ra console
 * 2. Tinh tong 
*/

// let result = 0;

// Cach 1: theo es5 ====> Hoc de biet
// array_4.forEach(function (a,_) {
//   // a, b: chi cach dat ten thoi
//   // a: gia tri cua mang -> tu dong forEach tra ve
//   // b: chi so cua mang -> tu dong forEach tra ve
//   // console.log("Gia tri cua mang: ", a);
//   // console.log("Chi so cua mang: ", b)

//   result = result + a;
// });

// Cach 2: theo es6 =====> Hoc nho de lam du an
// array_4.forEach((a, _) => {
//   // console.log("gia tri mang: ", a);
//   // console.log("chi so mang: ", b);

//   result += a;
// });

// console.log("Tong cua mang array 4: ", result);

// 6. Duyet mang voi for ... of... ===> Hoc de biet
const array_5 = [11,2,3,4,5];

for(const value of array_5) {
  console.log("value", value);
}