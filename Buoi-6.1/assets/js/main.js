// 1. Xoa phan tu trong DOM

// // b1: Truy cap phan tu trong DOM
// const children = document.querySelector(".children");
// const parent = document.querySelector(".parent");
// // console.log(children);
// // console.log(parent);

// // b2-c1: Xoa phan tu children trong dom
// // parent.removeChild(children);

// // b2-c2: 
// children.parentNode.removeChild(children);
// // console.log(children.parentNode);


// 2. Thay the phan tu trong DOM

// b1: Truy cap phan tu can thay the
let children_1 = document.querySelector(".children-1");
let parent_1 = document.querySelector(".parent-1");
// console.log(children_1);
// console.log(parent_1);

// b2: Tao the chua noi dung can thay the
// <h1>Java 30</h1>
let newHTML = document.createElement("h1");
// console.log(javaHTML);
// console.log(javaHTML.innerHTML);
newHTML.innerHTML = "JAVA 30";

// console.log(javaHTML);

// B3: Thay the cai noi dung
parent_1.replaceChild(newHTML, children_1);