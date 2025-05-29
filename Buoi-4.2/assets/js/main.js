// Truy cap phan tu theo id
let title_1 = document.getElementById("title-1");
// console.log(title1); 

/* Them mau do cho title_1 */ 
title_1.style.color = "red";

// Truy cap phan tu theo class
const title_2 = document.getElementsByClassName("title-2");
// console.log(title_2);
/* Them mau xanh cho cach the h1 co class title_2*/

for(let i = 0; i < title_2.length; i ++){
  // console.log("i chinh chi so mang title_2", i);
  // console.log(title_2[i]);
  title_2[i].style.backgroundColor = "green";
}

// Truy cap phan tu theo tag
const tag_h3 = document.getElementsByTagName("h3");
console.log(tag_h3);