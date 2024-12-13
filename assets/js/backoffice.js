const urlProducts = `https://striveschool-api.herokuapp.com/api/product/`;
let data;
let products = [];
const empty = document.getElementById('empty');
const myName = document.getElementById('name');
const brand = document.getElementById('brand');
const price = document.getElementById('price');
const imageUrl = document.getElementById('imageUrl');
const description = document.getElementById('description');
const formProduct = document.getElementById('formProduct');

async function getProducts() {
    try {
      let response = await fetch(
        urlProducts,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzViZjc3MWQyMjA3MTAwMTVkZTJmM2QiLCJpYXQiOjE3MzQwODAzNjksImV4cCI6MTczNTI4OTk2OX0.D5cZBPHuGNwIeNn3jyHQUcut9jeC5ZD44MIUux_F5Ms"
          },
        }
      );
      data = await response.json();
      products = data;
      console.log(data);
      printProducts();
    } catch (error) {
      console.log(error);
    }
  }
  getProducts();

class Product {
    constructor (_name, _description, _brand, _imageUrl, _price) {
        this.name = _name;
        this.description = _description;
        this.brand = _brand;
        this.imageUrl = _imageUrl;
        this.price = _price;
    }
}

async function postProducts() {
    const newProduct = {
        name: '',
        description: '',
        brand:'',
        imageUrl:'',
        price: 0,
    };

    newProduct.name = 'prodotto 1';
    newProduct.description = 'descrizione';
    newProduct.brand = 'marca';
    newProduct.imageUrl = 'url';
    newProduct.price = 15;

    try {
        let response = await fetch(
            urlProducts,
            {
                method: "POST",
                body: JSON.stringify(newProduct),
                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzViZjc3MWQyMjA3MTAwMTVkZTJmM2QiLCJpYXQiOjE3MzQwODAzNjksImV4cCI6MTczNTI4OTk2OX0.D5cZBPHuGNwIeNn3jyHQUcut9jeC5ZD44MIUux_F5Ms",
                    "Content-Type": "application/json",
                },
            }
        );
        data = await response.json(); 
        if (products.length > 0) {
            printProducts();
        } else {
            empty.innerText = 'Nessun prodotto trovato';
            return;
        }
        
    } catch (error) {
        console.log(error);
    }
}
postProducts();


function printProducts() {
    let row = document.getElementById('row');
    empty.innerText = '';
    row.innerHTML = '';
    let secondPage = 'backoffice.html';
    let thirdPage = 'description.html';
    products.forEach((product) => {
    let colProduct = `
    <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
            <img src=${product.imageUrl}} style="width: 100%" />
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">
                ${product.description}
                </p>
                <div
                class="d-flex justify-content-between align-items-center"
                >
                <div class="btn-group">
                    <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onclick="fillImageInModal(this)"
                    >
                    <a href=${secondPage} >Modifica</a>
                    </button>
                    <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                    onclick="hideColumn(this)"
                    >
                    <a href=${thirdPage} >Scopri di più</a>
                    </button>
                </div>
                </div>
            </div>
        </div>
    </div>
    `
    row.innerHTML += colProduct;
    })
}