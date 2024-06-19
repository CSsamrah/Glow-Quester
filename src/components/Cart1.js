document.addEventListener('DOMContentLoaded', function() {
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    var cartItemsContainer = document.querySelector(".cart_info");

    cartItems.forEach(item => {
        var cartShopBox = document.createElement("div");
        cartShopBox.classList.add('cart_box');

        cartShopBox.innerHTML = `
        <img class="product_image" src="${item.productImage}" alt="">
        <div class="detail_box">
            <div class="cart_product_title">${item.title}</div>
            <div class="cart_product_price">${item.price}</div>
            <input type="number" value="${item.quantity}" class="cart_product_quantity">
            <i class='bx bxs-trash cart_remove'></i>
        </div>
        <div class="subtotal">
            <div class="sub_price">$${(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}</div>
        </div>`;

        cartItemsContainer.append(cartShopBox);
    });

    updateTotal();
    setupEventListeners();
});

function updateTotal() {
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    var total = 0;

    cartItems.forEach(item => {
        var price = parseFloat(item.price.replace("$", ""));
        var quantity = item.quantity;
        total += price * quantity;
    });

    total = Math.round(total * 100) / 100;
    document.querySelector('.total_price').innerText = "$" + total.toFixed(2);
}

function setupEventListeners() {
    document.querySelectorAll('.cart_remove').forEach(button => {
        button.addEventListener('click', function(event) {
            var title = event.target.closest('.cart_box').querySelector('.cart_product_title').innerText;
            removeCartItem(title);
        });
    });

    document.querySelectorAll('.cart_product_quantity').forEach(input => {
        input.addEventListener('change', function(event) {
            var title = event.target.closest('.cart_box').querySelector('.cart_product_title').innerText;
            var quantity = parseInt(event.target.value);
            quantityChanged(title, quantity);
        });
    });
}

function removeCartItem(title) {
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems = cartItems.filter(item => item.title !== title);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    location.reload();
}

function quantityChanged(title, quantity) {
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    var updatedCartItems = cartItems.map(item => {
        if (item.title === title) {
            item.quantity = quantity > 0 ? quantity : 1;
        }
        return item;
    });
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    location.reload();
}

