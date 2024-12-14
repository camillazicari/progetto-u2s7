let products = [];
const urlProducts = `https://striveschool-api.herokuapp.com/api/product/`;

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

const newProduct = {
    name: '',
    description: '',
    brand: '',
    imageUrl: '',
    price: 0,
};

class Product {
    constructor(_name, _description, _brand, _imageUrl, _price) {
        this.name = _name;
        this.description = _description;
        this.brand = _brand;
        this.imageUrl = _imageUrl;
        this.price = _price;
    }
}

console.log(products);

function printProducts() {
    let row = document.getElementById('row');
    row.innerHTML = '';
    let thirdPage = 'description.html';
    for (let i = 0; i < products.length; i++) {
        let product1 = new Product(products[i].name, products[i].description, products[i].brand, products[i].imageUrl, products[i].price);
        let colProduct = `
    <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
            <img src="${product1.imageUrl}" />
            <div class="card-body">
                <h5 class="card-title">${product1.name}</h5>
                <p class="card-text">
                ${product1.description}
                </p>
                <div
                class="d-flex justify-content-between align-items-center"
                >
                <div class="btn-group">
                    <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary btnModify"
                    >Modifica</button>
                    <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary">                    >
                    <a href="${thirdPage}">Scopri di più</a>
                    </button>
                </div>
                </div>
            </div>
        </div>
    </div>
    `
         row.innerHTML += colProduct;
    }

    const btnModify = document.querySelectorAll('.btnModify');
    for (let i=0; i<btnModify.length; i++) {
        btnModify[i].addEventListener('click', (e) => { 
            e.preventDefault();
            let firstUrl = 'backoffice.html';
            let newUrl = `${firstUrl}?_id=${products[i]._id}`;
            window.location.href = newUrl;
        })
    }
        
       
}