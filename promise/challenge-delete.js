import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1/products';

function deleteProduct(urlApi) {
  const response = fetch(urlApi, {
    method: 'DELETE',
    mode: 'cors',
    credentials: 'same-origin' //valor por defecto
  });
  return response;
}

deleteProduct(`${API}/204`)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error=>console.error(error))