// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count in navigation
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    const cartCounts = document.querySelectorAll('.cart-count');
    cartCounts.forEach(count => {
        count.textContent = totalItems;
        count.style.display = totalItems > 0 ? 'block' : 'none';
    });
}

// Add to cart function
function addToCart(bookId) {
    const book = books[parseInt(bookId)];
    if (!book) return;

    // Check if book already exists in cart
    const existingBookIndex = cart.findIndex(item => item.id === book.id);
    
    if (existingBookIndex !== -1) {
        // If book exists, increment quantity
        cart[existingBookIndex].quantity += 1;
    } else {
        // If book doesn't exist, add new entry
        const priceString = book.price.replace(' ALL', '').replace(/,/g, '');
        const priceNumber = parseFloat(priceString);
        
        const bookWithQuantity = {
            ...book,
            price: priceNumber,
            quantity: 1
        };
        cart.push(bookWithQuantity);
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    window.location.reload();

    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
        toastContainer.style.zIndex = '11';
        document.body.appendChild(toastContainer);
    }

    const toastEl = document.createElement('div');
    toastEl.className = 'toast';
    toastEl.setAttribute('role', 'alert');
    toastEl.setAttribute('aria-live', 'assertive');
    toastEl.setAttribute('aria-atomic', 'true');
    
    toastEl.innerHTML = `
        <div class="toast-header bg-success text-white">
            <strong class="me-auto">Sukses!</strong>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            Libri u shtua në shportë!
        </div>
    `;

    toastContainer.appendChild(toastEl);
    const toast = new bootstrap.Toast(toastEl, {
        autohide: true,
        delay: 3000
    });
    toast.show();

    toastEl.addEventListener('hidden.bs.toast', () => {
        toastEl.remove();
        // Reload the page after the toast is hidden
        window.location.reload();
    });
}

// Update item quantity
function updateQuantity(index, change) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[index]) {
        cart[index].quantity = (cart[index].quantity || 1) + change;
        if (cart[index].quantity < 1) cart[index].quantity = 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        window.location.reload();
    }
}

// Remove item from cart
function removeItem(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload();
}

// Update cart display
function updateCartDisplay() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const emptyCart = document.getElementById('emptyCart');
    const cartItems = document.getElementById('cartItems');
    const cartTableBody = document.getElementById('cartTableBody');
    const subtotalElement = document.getElementById('subtotal');
    const shippingElement = document.getElementById('shipping');
    const totalElement = document.getElementById('total');

    // Only proceed with cart page specific updates if we're on the cart page
    if (emptyCart && cartItems) {
        if (cart.length === 0) {
            emptyCart.style.display = 'block';
            cartItems.style.display = 'none';
            return;
        }

        emptyCart.style.display = 'none';
        cartItems.style.display = 'block';

        // Clear existing items
        if (cartTableBody) {
            cartTableBody.innerHTML = '';

            let subtotal = 0;

            // Add each item to the table
            cart.forEach((item, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td><img src="${item.image}" alt="${item.title}" class="cart-item-image"></td>
                    <td>${item.title}</td>
                    <td>${item.author}</td>
                    <td>
                        <div class="quantity-control">
                            <button onclick="updateQuantity(${index}, -1)">-</button>
                            <input type="number" value="${item.quantity || 1}" min="1" 
                                   onchange="updateQuantity(${index}, this.value - (item.quantity || 1))">
                            <button onclick="updateQuantity(${index}, 1)">+</button>
                        </div>
                    </td>
                    <td>${(item.price * (item.quantity || 1)).toFixed(2)} ALL</td>
                    <td><i class="bi bi-trash remove-item" onclick="removeItem(${index})"></i></td>
                `;
                cartTableBody.appendChild(row);
                subtotal += item.price * (item.quantity || 1);
            });

            // Update totals if elements exist
            if (subtotalElement && shippingElement && totalElement) {
                const shipping = subtotal > 0 ? 200.00 : 0;
                const total = subtotal + shipping;

                subtotalElement.textContent = `${subtotal.toFixed(2)} ALL`;
                shippingElement.textContent = `${shipping.toFixed(2)} ALL`;
                totalElement.textContent = `${total.toFixed(2)} ALL`;
            }
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    updateCartDisplay();
    
    // Handle checkout button if it exists
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            const phoneNumber = document.getElementById('phoneNumber').value.trim();
            
            if (cart.length === 0) {
                showToast('error', 'Shporta juaj është bosh!');
                return;
            }

            if (!phoneNumber) {
                showToast('error', 'Ju lutemi shkruani numrin e telefonit!');
                return;
            }

            if (phoneNumber.length !== 10) {
                showToast('error', 'Numri i telefonit duhet të ketë saktësisht 10 shifra!');
                return;
            }

            showToast('success', `Faleminderit për porosinë! Do të ju kontaktojmë së shpejti në numrin ${phoneNumber}.`);
            localStorage.removeItem('cart');
            updateCartDisplay();
        });
    }
});

// Helper function to show toast messages
function showToast(type, message) {
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
        toastContainer.style.zIndex = '11';
        document.body.appendChild(toastContainer);
    }

    const toastEl = document.createElement('div');
    toastEl.className = 'toast';
    toastEl.setAttribute('role', 'alert');
    toastEl.setAttribute('aria-live', 'assertive');
    toastEl.setAttribute('aria-atomic', 'true');
    
    toastEl.innerHTML = `
        <div class="toast-header bg-${type === 'success' ? 'success' : 'danger'} text-white">
            <strong class="me-auto">${type === 'success' ? 'Sukses!' : 'Gabim!'}</strong>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            ${message}
        </div>
    `;

    toastContainer.appendChild(toastEl);
    const toast = new bootstrap.Toast(toastEl, {
        autohide: true,
        delay: 3000
    });
    toast.show();

    toastEl.addEventListener('hidden.bs.toast', () => {
        toastEl.remove();
    });
}
