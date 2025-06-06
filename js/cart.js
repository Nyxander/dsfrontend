// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = cart.length;
        cartCount.style.display = cart.length > 0 ? 'block' : 'none';
    }
}

function addToCart(bookId) {
    cart.push(bookId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();

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

document.addEventListener('DOMContentLoaded', updateCartCount); 

document.addEventListener('DOMContentLoaded', function() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const emptyCart = document.getElementById('emptyCart');
        const cartItems = document.getElementById('cartItems');
        const cartTableBody = document.getElementById('cartTableBody');
        const subtotalElement = document.getElementById('subtotal');
        const shippingElement = document.getElementById('shipping');
        const totalElement = document.getElementById('total');
        const checkoutBtn = document.getElementById('checkoutBtn');

        function updateCartDisplay() {
            if (cart.length === 0) {
                emptyCart.style.display = 'block';
                cartItems.style.display = 'none';
                return;
            }

            emptyCart.style.display = 'none';
            cartItems.style.display = 'block';

            // Clear existing items
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

            // Update totals
            const shipping = subtotal > 0 ? 200.00 : 0;
            const total = subtotal + shipping;

            subtotalElement.textContent = `${subtotal.toFixed(2)} ALL`;
            shippingElement.textContent = `${shipping.toFixed(2)} ALL`;
            totalElement.textContent = `${total.toFixed(2)} ALL`;
        }

        // Initialize cart display
        updateCartDisplay();

        // Handle checkout
        checkoutBtn.addEventListener('click', function() {
            const phoneNumber = document.getElementById('phoneNumber').value.trim();
            
            if (cart.length === 0) {
                // Create toast container if it doesn't exist
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
                    <div class="toast-header bg-danger text-white">
                        <strong class="me-auto">Gabim!</strong>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">
                        Shporta juaj është bosh!
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
                return;
            }

            if (!phoneNumber) {
                // Create toast container if it doesn't exist
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
                    <div class="toast-header bg-danger text-white">
                        <strong class="me-auto">Gabim!</strong>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">
                        Ju lutemi shkruani numrin e telefonit!
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
                return;
            }

            if (phoneNumber.length !== 10) {
                // Create toast container if it doesn't exist
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
                    <div class="toast-header bg-danger text-white">
                        <strong class="me-auto">Gabim!</strong>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">
                        Numri i telefonit duhet të ketë saktësisht 10 shifra!
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
                return;
            }

            // Create toast container if it doesn't exist
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
                    Faleminderit për porosinë! Do të ju kontaktojmë së shpejti në numrin ${phoneNumber}.
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
                localStorage.removeItem('cart');
                updateCartDisplay();
            });
        });
    });

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

        if (cart.length === 0) {
            emptyCart.style.display = 'block';
            cartItems.style.display = 'none';
            return;
        }

        emptyCart.style.display = 'none';
        cartItems.style.display = 'block';

        // Clear existing items
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

        // Update totals
        const shipping = subtotal > 0 ? 200.00 : 0;
        const total = subtotal + shipping;

        subtotalElement.textContent = `${subtotal.toFixed(2)} ALL`;
        shippingElement.textContent = `${shipping.toFixed(2)} ALL`;
        totalElement.textContent = `${total.toFixed(2)} ALL`;
    }

    // Update cart count in navigation
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
        const cartCounts = document.querySelectorAll('.cart-count');
        cartCounts.forEach(count => {
            count.textContent = totalItems;
            count.style.display = totalItems > 0 ? 'block' : 'none';
        });
    }

    // Initialize on page load
    document.addEventListener('DOMContentLoaded', function() {
        updateCartDisplay();
        updateCartCount();
    });
