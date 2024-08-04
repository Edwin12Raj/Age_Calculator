const Products = [
    { id: 1, name: 'Product-1', price: 100 },
    { id: 2, name: 'Product-2', price: 200 },
    { id: 3, name: 'Product-3', price: 300 }
];

const cart = [];

document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('products');
    const cartList = document.getElementById('cart');
    const totalPrice = document.getElementById('totalPrice');

    function renderProducts() {
        productList.innerHTML = '';
        Products.forEach(product => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${product.name} - $${product.price}
                <button class="remove" data-id="${product.id}">-</button>
                <span id="quantity-${product.id}">0</span>
                <button class="add" data-id="${product.id}">+</button>
            `;
            productList.appendChild(li);
        });

        // Attach event listeners to buttons
        document.querySelectorAll('.add').forEach(button => {
            button.addEventListener('click', () => {
                addToCart(parseInt(button.getAttribute('data-id')));
            });
        });

        document.querySelectorAll('.remove').forEach(button => {
            button.addEventListener('click', () => {
                removeFromCart(parseInt(button.getAttribute('data-id')));
            });
        });
    }

    function renderCart() {
        cartList.innerHTML = '';
        if (cart.length === 0) {
            cartList.innerHTML = '<li>No Product added to the cart</li>';
        } else {
            cart.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `
                    ${item.name} - $${item.price} x ${item.quantity}
                `;
                cartList.appendChild(li);
            });
        }
        totalPrice.textContent = `Total Price: $${calculateTotalPrice()}`;
    }

    function addToCart(id) {
        const product = Products.find(p => p.id === id);
        const cartItem = cart.find(item => item.id === id);

        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        document.getElementById(`quantity-${id}`).textContent = cartItem ? cartItem.quantity : 1;
        renderCart();
    }

    function removeFromCart(id) {
        const cartItem = cart.find(item => item.id === id);

        if (cartItem) {
            cartItem.quantity--;
            if (cartItem.quantity === 0) {
                const index = cart.findIndex(item => item.id === id);
                cart.splice(index, 1);
            }
        }

        document.getElementById(`quantity-${id}`).textContent = cartItem ? cartItem.quantity : 0;
        renderCart();
    }

    function calculateTotalPrice() {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    renderProducts();
    renderCart();
});
