const urlProducts = `https://striveschool-api.herokuapp.com/api/product/`;
let products = [];
let product;
const myName = document.getElementById('name');
const brand = document.getElementById('brand');
const price = document.getElementById('price');
const imageUrl = document.getElementById('imageUrl');
const description = document.getElementById('description');
const btnSave = document.getElementById('btnSave');
const formProduct = document.getElementById('formProduct');

const newUrl = new URLSearchParams(window.location.search);
const productId = newUrl.get('_id');

const newProduct = {
    name: '',
    description: '',
    brand: '',
    imageUrl: '',
    price: 0,
};

async function postProducts() {
    try {
        let response = await fetch(urlProducts, {
            method: "POST",
            body: JSON.stringify(newProduct),
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzViZjc3MWQyMjA3MTAwMTVkZTJmM2QiLCJpYXQiOjE3MzQwODAzNjksImV4cCI6MTczNTI4OTk2OX0.D5cZBPHuGNwIeNn3jyHQUcut9jeC5ZD44MIUux_F5Ms",
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) throw new Error("Errore nella creazione del prodotto");
        console.log("Prodotto aggiunto con successo:", await response.json());
    } catch (error) {
        console.log("Errore durante l'aggiunta del prodotto:", error);
    }
}

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
        fillForm();
        console.log("Prodotti recuperati:", product);
    } catch (error) {
        console.log("Errore durante il recupero dei prodotti:", error);
    }
}

btnSave.addEventListener('click', async (e) => {
    e.preventDefault();

    newProduct.name = myName.value;
    newProduct.description = description.value;
    newProduct.brand = brand.value;
    newProduct.imageUrl = imageUrl.value;
    newProduct.price = parseFloat(price.value);
    console.log("Nuovo prodotto da inviare:", newProduct);

    formProduct.reset();
    await postProducts();
});

async function modifyProduct() {
    try {
        let response = await fetch(urlProducts + productId, {
            method: "PUT",
            body: JSON.stringify(newProduct),
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzViZjc3MWQyMjA3MTAwMTVkZTJmM2QiLCJpYXQiOjE3MzQwODAzNjksImV4cCI6MTczNTI4OTk2OX0.D5cZBPHuGNwIeNn3jyHQUcut9jeC5ZD44MIUux_F5Ms",
                "Content-Type": "application/json",
            }
        });
    } catch {
        console.log(error);
    }
}

document.addEventListener('load', init());

function init() {

    if (checkId()) {
        getProducts();
    }
}

function checkId() {
    if (productId) {
        return true;
    } else {
        return false;
    }
}

function fillForm() {
    myName.value = product.name;
    brand.value = product.brand;
    price.value = product.price;
    imageUrl.value = product.imageUrl;
    description.value = product.description;
}
