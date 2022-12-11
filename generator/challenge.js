import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

async function* fetchData(urlApi) {
  const response = await fetch(urlApi);
  yield await response.json();
}

const request_products = fetchData(`${API}/products`);
request_products.next().then(({ value, done }) => {
  const first_item = value[0];
  console.log(first_item);

  fetchData(`${API}/products/${first_item.id}`).next().then(({ value, done }) => {
    console.log(value.title)
  });

  fetchData(`${API}/categories/${first_item.category.id}`).next().then(({ value, done }) => {
    console.log(value.name);
  });
});


// const request_product = fetchData(`${API}/products/${products[0].id}`);
// const product = request_product.next().value;

// const request_category = fetchData(`${API}/categories/${product.category.id}`);
// const category = request_category.next().value;

// console.log(products);
// console.log(product.title);
// console.log(category);


