document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('add-product-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const product = {
            name: form.name.value,
            description: form.description.value,
            price: parseFloat(form.price.value),
            stock: parseInt(form.stock.value)
        };

        fetch('/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(response => response.json())
        .then(data => {
            alert('Product added successfully!');
            window.location.href = '/';
        })
        .catch(error => console.error('Error adding product:', error));
    });
});