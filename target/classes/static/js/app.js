document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');
    const cartList = document.getElementById('cart-list');
    let cart = [];

    fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                const li = document.createElement('li');
                li.textContent = `${product.name} - $${product.price}`;
                
                const addButton = document.createElement('button');
                addButton.textContent = 'Add to Cart';
                addButton.onclick = () => addToCart(product);

                li.appendChild(addButton);
                productList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching products:', error));

    function addToCart(product) {
        cart.push(product);
        updateCart();
    }

    function updateCart() {
        cartList.innerHTML = '';
        cart.forEach(product => {
            const li = document.createElement('li');
            li.textContent = `${product.name} - $${product.price}`;
            cartList.appendChild(li);
        });
    }
});