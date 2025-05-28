// // 1. Cach tao object

// const product = {
//   title: "san pham 1",
//   price: 200000,
//   rating: 100
// };
// // console.log(product);

// // //2.  Truy cap phan tu C1 => It su dung, hoc de biet
// // console.log(product["price"]);

// // // Truy cap phan tu C2 => Nen dung
// // console.log(product.rating);

// // 3. Gan gia tri
// product.rating = 200;

// // console.log(product);

// // 4. Them phan tu moi
// product.discount = 10;

// // console.log(product);
// // 5. Xoa thuoc tinh cua mang
// delete product.price;

// console.log(product);


// Cac phuong thuc voi mang

// 6.1: Duyet mang voi map()
const array_1 = [1,2,3,4,5];

array_1.map((a,b)=>{
  console.log("gia tri cua mang: ", a);
  console.log("chi so cua mang: ", b);
});