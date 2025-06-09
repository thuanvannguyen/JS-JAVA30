// http://127.0.0.1:5500/detail.html?id=8

// -> De biet trang nao la trang detail => get id ??


// console.log(document.location.search);
let params = new URLSearchParams(document.location.search);

let idDetail = params.get("id");


// Call API theo voi fecth()
const getApi = async () => {
  try {

    const response = await fetch(`https://fakestoreapi.com/products/${idDetail}`);
    const result = await response.json();
    // console.log(result);


    renderData(result);
  } catch (error) {
    console.log(error);
  }
}

getApi();

// SHOW DATA -> UI

const renderData = (data) => {
  console.log(data);
  let detailHTML = document.querySelector(".detail-js");

  // console.log(detailHTML);
  detailHTML.innerHTML = 
   `
    <img src="${data.image}">
    <h2>${data.title}</h2>
    <h4>${data.price}</h4>
   `
}

