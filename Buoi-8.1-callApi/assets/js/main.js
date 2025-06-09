const URL_LISTING = `https://fakestoreapi.com/products`;

/* Call API

  -> Cach 1: Su dung thu vien axios call api
  -> Cach 2: Su dung phuong thuc co san browser - fetch()
*/


// Cach 1: Su dung thu vien axios
// async -> Bien ham getAPI() thanh 1 promise
// await -> Thuc thi loi hua day async

const getApi = async (url) => {
  try {
    const response = await axios.get(url);
    const result = response.data;
    // console.log(response.data);

    // Goi render UI -> renderData()
    renderData(result)
  } catch (error) {
    console.log(error)
  }
}

getApi(URL_LISTING);


// Show data -> UI
const renderData = (data) => {

  // Truy cap phan tu
  const ulHTML = document.querySelector(".ul-js");

  // Show item list d/s call tu api -> ui
  let newHTML = ``;
  data.forEach((item, index) => {
    // console.log(item);

    newHTML = newHTML + `<li>
        <a href="./detail.html?id=${item.id}">
          ${item.title}
        </a>
      </li>`

  });

  // render
  // console.log(newHTML);
  ulHTML.innerHTML = newHTML;
}

