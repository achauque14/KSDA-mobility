async function updateCart() {
    try{
        const response = await fetch('/products');
        const products = await response.json();
        const cartProducts = document.getElementsByClassName('cart-products');
        let counter = 0

        productList.innerHTML = '';

        products.forEach(product => {
            const cartElement= document.createElement('div');
            cartElement.innerHTML =
             `<img src="${product.imagePath}" alt="${product.name}"
             <h4> Price: ${product.name} 
            <p> Price: ${product.price} 
            <hr>`;
            cartProducts.appendChild(cartElement);
            counter += 1
        })
    }catch (error) {
        console.error('Error updating cart', error);
    }
}

const payButton = document.getElementById('pay-button')
if (counter>0){
    payButton.style.display='flex';
}else{
    display='none'
}