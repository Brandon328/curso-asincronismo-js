import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1/products';

function updateProduct(urlApi, product) {
  const options = {
    method: 'PUT',
    mode: 'cors',
    credentials: 'same-origin', //valor por defecto
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  }
  const response = fetch(urlApi, options);
  return response;
}

const product = {
  'title': 'A new title ppp',
  'price': 979797,
  'description': 'This is a new description'
}

updateProduct(`${API}/204`, product)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error))