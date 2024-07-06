async function uploadProducts() {
    try{
        const response = await fetch('/products');
        const products = await response.json();
        const productList = document.getElementsByClassName('product-list');

    
        productList.innerHTML = '';

        products.forEach(product => {
            const productElement= document.createElement('div');
            productElement.innerHTML =
             `<h2>${product.name}</h2>
             <img src="${product.imagePath}" alt="${product.name}"
            <p> Price: ${product.price}</p>
            <p>Description: ${product.description}</p>
            <hr>`;
            productList.appendChild(productElement);
        })
    }catch (error) {
        console.error('Error uploading products', error);
    }
}
uploadProducts();