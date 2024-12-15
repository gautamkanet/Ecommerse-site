

'use strict';
// navbar start
let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');
menuToggle.onclick = function () {
  header.classList.toggle('active');
}
// navbar end

// cart Increment


// cart Decrement


// product fetching 

let ProductFetch = document.querySelector("#product-fetch");

fetch("./json_data/product_data.json")
  .then((response) => response.json())
  .then((res) => {
    console.log(res);
    const data = res.products;
    console.log(data);
    let add_colum = '';
    data.forEach(product => {
      add_colum += `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
      <div class="card text-center">
          <div class="card-body">
              <div><img src="${product.img}" alt="." class="sec-2"></div>
              <h4 class="card-title py-2">${product.Name}</h4>
              <p>${product.discription}</p>
              <div class="price">RS.${product.price}</div>
              <hr>
              <div class="sec-3">
                <button class="cartIncrement" id="increment">+</button>
                <p class="productQuantity">1</p>
                <button class="cartDecrement"id="decrement">-</button>
              </div>
              <button class="btn btn-primary text-light">
                  Add to Cart
              </button>
            </div>
          </div>
        </div>`
    })
    // console.log(add_colum);
    ProductFetch.innerHTML = add_colum;
  })
  .catch((error) => console.log("can't fetch data", error));