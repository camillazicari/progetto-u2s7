const urlProducts = `https://striveschool-api.herokuapp.com/api/product/`

let data;

async function getProducts() {
    try {
        let response = await fetch(
            urlProducts,
            {
                headers: {
                    "Authorization":
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzViZjc3MWQyMjA3MTAwMTVkZTJmM2QiLCJpYXQiOjE3MzQwODAzNjksImV4cCI6MTczNTI4OTk2OX0.D5cZBPHuGNwIeNn3jyHQUcut9jeC5ZD44MIUux_F5Ms"
                },
            }
        );
        data = await response.json();        
    } catch (error) {
        console.log(error);
    }
}

getProducts();