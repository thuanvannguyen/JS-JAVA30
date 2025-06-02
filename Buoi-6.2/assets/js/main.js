// C1: Khong nen dung -> Kho maintain
const show = () => {
  alert("Hello AE JAVA30!");
}

// C2: addEventLisenner();

// b1: Truy cap phan tu
let submitButtonForm = document.querySelector(".button-submit");
// console.log(submitButtonForm);

// b2: gan su kien nguoi dung click thuc thi hien thi thong bao voi noi dung "Submit Form"
// Chu y: Trong su kien them vao -> Bo tu "on"
// submitButtonForm.addEventListener("click", () => {
//   alert("Submit Form");
// });

const handleSubmit = () => {
  alert("submit Form");
}

const handleDbColor = () => {
  // Doi mau button
  submitButtonForm.style.backgroundColor = "red";
  submitButtonForm.style.color = "white";
}

submitButtonForm.addEventListener("click", handleSubmit);
submitButtonForm.addEventListener("mouseout",handleDbColor);

