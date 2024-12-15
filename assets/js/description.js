const urlProducts = `https://striveschool-api.herokuapp.com/api/product/`;
const newUrl = new URLSearchParams(window.location.search);
const productId = newUrl.get('_id');
let product;
const image = document.getElementById('image');
const row = document.getElementById('row');
const brand = document.getElementById('brand');
const productName = document.getElementById('productName');
const price = document.getElementById('price');
const description = document.getElementById('description');


async function getProducts() {
    try {
        let response = await fetch(urlProducts + productId, {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzViZjc3MWQyMjA3MTAwMTVkZTJmM2QiLCJpYXQiOjE3MzQwODAzNjksImV4cCI6MTczNTI4OTk2OX0.D5cZBPHuGNwIeNn3jyHQUcut9jeC5ZD44MIUux_F5Ms",
            },
        });
        if (!response.ok) throw new Error("Errore nel recupero dei prodotti");
        product = await response.json();
        fillPage();
        console.log("Prodotti recuperati:", product);
    } catch (error) {
        console.log("Errore durante il recupero dei prodotti:", error);
    }
}
getProducts();

function fillPage() {
    image.setAttribute('src', product.imageUrl);
    brand.innerText = product.brand;
    productName.innerText = product.name;
    price.innerText = product.price + '€';
    description.innerText = product.description;
}