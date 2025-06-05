
// 1. Bien event (e) trong js
// const handleGlobalClick = (e) => {
//   console.log(e);
// }

// document.addEventListener("click", handleGlobalClick);

// 2. keyboard event trong js
document.addEventListener("keydown", (event) => {
  console.log(event);
  console.log("Key down...");
});

// document.addEventListener("keyup", () => {
//   console.log("Key Up...");
// })