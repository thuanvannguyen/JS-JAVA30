// 1. Cac phuong thuc lam viec mang

/* 
 * 1.1. Phuong thuc map()
 */

// const array_1 = ["Nho", "Cam", "Oi", "Tao"];

// array_1.map((item, index) => {
//   console.log(item);
//   console.log(index);
// });

/*
 * 2.2. Phuong thuc filter()
*/ 

// const array_2 = [1,2,3,4,5,6]; // so chan ~ iphone va so le ~ sam sung => show UI


// // Can tim so chan trong array_2
// const iphone = array_2.filter((value, _)=>{
//   // console.log("gia tri cua mang", value);
//   // console.log("Chi so cua mang", index);

//   return value % 2 == 0; // Add dieu kien mong muon
// });

// console.log(iphone);

/* 
* 2.3. Phuong thuc reduce()
*/

// const array_3 = [100, 200, 500, 500];

// const result = array_3.reduce((total, currentValue )=>{
//   // console.log("Bien tich luy sau moi vong, ban dau = 0: ", total);
//   // console.log("Gia tri tung bien array_3 trong moi vong lap: ", currentValue)
//   return total + currentValue;

// }, 0); //dependency => Khoi tao bien ban dau truoc cong don = 0.

// console.log(result);

/*
 * 2.4. Phuong thuc find() && findIndex()
*/ 
// const array_4 = [
//   {
//     id: 1,
//     name: "Thinh"
//   },
//   {
//     id: 2,
//     name: "Hieu"
//   },
//   {
//     id: 3,
//     name: "Kiet"
//   },
//   {
//     id: 4,
//     name: "Kiet"
//   },
//   {
//     id: 5,
//     name: "Trung"
//   },
//   {
//     id: 6,
//     name: "Huy"
//   }
// ];

// // const nameResult = array_4.find((value, index)=>{
// //   // console.log("Gia tri: ", value.id);
// //   // console.log("Chi so: ", index);
// //   return value.name == "Kiet";
// // });

// const nameResult = array_4.findIndex((value, index)=>{
//   // console.log("Gia tri: ", value.id);
//   // console.log("Chi so: ", index);
//   return value.name == "Kiet";
// });

// console.log(nameResult);


// 3. Phuong thuc object
// const student = {
//   name: "Nguyen Van A",
//   age: 20,
//   email: "nguyenvana@gmail.com"
// };

// console.log("Tat ca keys cua student: ", Object.keys(student));
// console.log("Ta ca value cua student:", Object.values(student));

// 4. Vong lap trong object
let user = {
  id: 1,
  name: "user 1",
  role: "admin",
}

// let userKey = Object.keys(user);
// console.log(userKey);

for(const key in user){
  console.log(user[key]);
}