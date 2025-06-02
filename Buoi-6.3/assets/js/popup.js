// b1: Truy cap Phan
let buttonChat = document.querySelector(".button-chat");
let close = document.querySelector(".close");
let contentHTML = document.querySelector(".content");
// console.log(buttonChat);
// console.log(close);
// console.log(contentHTML);

// b2: Click Chat Open Popup

const handlOpenPopup = () => {
  // alert("123");
  contentHTML.style.bottom = "100px";
  contentHTML.style.transition = "bottom 0.3s";
}

const handlClosePopup = () => {
  contentHTML.style.bottom = "-500px";
    contentHTML.style.transition = "bottom 0s";

}

buttonChat.addEventListener("click", handlOpenPopup);
close.addEventListener("click", handlClosePopup)