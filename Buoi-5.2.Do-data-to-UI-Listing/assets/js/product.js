// Gia su call api -> data
const data = [
  {
    id: 1,
    name: "Áo T shirt trơn in logo ngực FSTS001",
    imgSrc: "https://product.hstatic.net/200000690725/product/thiet_ke_chua_co_ten__5__ed54b4168e6f4f3f92e24f6ebd4961f7_master.png"
  },
  {
    id: 2,
    name: "Áo T shirt trơn in logo ngực FSTS002",
    imgSrc: "https://product.hstatic.net/200000690725/product/2f9a4efd-a421-4626-bc7f-2f8abad98f3b_339ece4bffb048b3947389caf46108f3_master.jpg"
  },
  {
    id: 3,
    name: "Áo T shirt trơn in logo ngực FSTS003",
    imgSrc: "https://product.hstatic.net/200000690725/product/thiet_ke_chua_co_ten__4__16cc25af953f4758a41d609f77698181_master.png"
  },
  {
    id: 4,
    name: "Áo T shirt trơn in logo ngực FSTS003",
    imgSrc: "https://product.hstatic.net/200000690725/product/thiet_ke_chua_co_ten__4__16cc25af953f4758a41d609f77698181_master.png"
  },
  {
    id: 5,
    name: "Áo T shirt trơn in logo ngực FSTS003",
    imgSrc: "https://product.hstatic.net/200000690725/product/thiet_ke_chua_co_ten__4__16cc25af953f4758a41d609f77698181_master.png"
  }
];

// b1: Truy cap phan tu
let rowProductJs = document.querySelector(".row-product-js");
// console.log(rowProductJs);

// b2: Dung vong lap -> Lap qua mang data
let productHTML = ``;
data.forEach((item, index) => {
  console.log(item);
  productHTML += `<div class="col col-4">
        <div class="product-item">
          <img src=${item.imgSrc} alt="Anh 1">
          <h3>${item.name}</h3>
        </div>
      </div>`
});
// console.log(productHTML);

// b3: in du lieu giao dien
rowProductJs.innerHTML = productHTML;