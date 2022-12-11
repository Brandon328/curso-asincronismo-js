const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback){
  let xhttp = new XMLHttpRequest();
  
  xhttp.open('GET', urlApi, true); // abre la conexión
  xhttp.onreadystatechange = function (event) {// validar el estado de la petición
    if (xhttp.readyState === 4) {
    // Existen 5 estados en un llamado XMLHttpRequest:
    // 0 → Se ha inicializado.
    // 1 → Loading (cargando).
    // 2 → Se ha cargado.
    // 3 → Procesamiento si existe alguna descarga.
    // 4 → Completado.
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      }
      else {
        const err = new Error('Error ' + urlApi);
        return callback(err, null)
      }
    }
  }
  xhttp.send();  
}

fetchData(`${API}/products`, function (error1, data1) {
  if (error1) throw new Error(error1);
  fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
    if (error2) throw new Error(error2);
    fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
      // data2?.category? => optional chaining
      if (error3) throw new Error(error3);
      console.log(data1[0]);
      console.log(data2.title);
      console.log(data3.name);
    });
  });
});