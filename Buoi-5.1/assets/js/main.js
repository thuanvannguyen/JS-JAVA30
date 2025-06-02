// // Truy cap phan tu theo id
// const title_1 = document.getElementById("title_1");
// console.log("title_1",title_1);

// // Truy cap phan tu theo class => Tra ve 1 mang tat pt tim thay
// const title_2 = document.getElementsByClassName("title_2");
// console.log("title_2", title_2);

// // Truy cap phan tu theo tag Name
// const title_3 = document.getElementsByTagName("h3");

// console.log("h3", title_3);


// // Truy cap phan tu theo querySelector()
// // GT truyen vao => Ten the: class phai co (.), id phai co (#)
// // Ket qua tra ve gia tri dau tien no tim thay ~~ getElementById
// // =>  Nen nho su dung cho du an
// const title_4 = document.querySelector(".title_4");
// console.log("title_4", title_4);


// // Truy cap phan tu theo querySelectorAll()
// // GT truyen vao => Ten the: class phai co (.), id phai co (#)
// // Ket qua tra ve gia tri tat ca gia tri tim thay duoc ~~ class, tagName
// const title_5 = document.querySelectorAll(".title_5");
// console.log("title_5", title_5);


// // 2.Cac cach truy cap phan tu

// // 2.1. Truy cap phan tu cha thong qua phan tu con 
// // b1: Truy cap vao pt con
// const para_1 = document.querySelector(".para_1");
// // console.log(para_1);

// // b2: truy cap vao cha thong qua con
// // parentNode: Co san js, chi su dung thoi.
// const parentPara_1 = para_1.parentNode;
// console.log(parentPara_1);


// // 2.2. Truy cap phan tu con thong qua phan tu hien tai
// // b1: Truy cap vao PT hien tai can lay pt con
// let box_2 = document.querySelector(".box-2");
// console.log(box_2);
// let childBox_2 = box_2.childNodes;
// console.log("childBox_2", childBox_2);



// // 3. Lay noi dung HTML bang js

// // b1: Truy cap PT can lay noi dung
// let para_3 = document.querySelector(".para_3");
// console.log(para_3);

// // b2: Lay noi dung
// let content = para_3.innerHTML;
// // console.log(content);

// // b3: thay the noi dung khac
// para_3.innerHTML = "JAVA 30";



// 4. Thay doi thuoc tinh cua phan tu
// // b1: Truy cap phan tu can doi mau
// let para_4 = document.querySelector(".para_4");
// console.log(para_4);

// // b2: Them thuoc tinh background-color css
// para_4.style.backgroundColor = "green";


// 5.1 Them phan tu vao phan tu cha cua no appenChild()

/*
 Buoc lam
  b1: Truy cap vao phan tu can them du lieu
  b2: Dung JS => The ao (Chi co moi, khong co noi dung) => Cu phap
  b3: Sau khi co the ao tu JS tao ra => Gan noi dung(Server trar ve) cho no => Cu phap
  b4: Xac dinh vi tri minh can them
*/ 

/*
  Bai Lam: y/c them 1 doan text JAVA 30 vao trong box-3
*/ 

// b1: Truy cap phan tu
let box_3 = document.querySelector(".box-3");
// console.log(box_3);


// b2: Tao the ao
// document.createElement() => Cu phap tao ra 1 pt html ao

let java30 = document.createElement("p");
// console.log(java30);

// b3: Gan noi dung cho no
// Phai lay noi dung cua the ao vua tao -> Gan noi dung can them vao cho no khong ?

// console.log(java30.innerHTML);
java30.innerHTML = "Lop JAVA30";

// console.log(java30);

// b4: Xac dinh vi tri can them vao them vao
box_3.appendChild(java30);