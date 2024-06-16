// increase size of image when hover
function handleImageHover(event) {
    if (event.type === 'mouseover') {
        event.target.style.transform = 'scale(1.2)';
    } else if (event.type === 'mouseout') {
        event.target.style.transform = 'scale(1)';
    }
}

const menuImages = document.querySelectorAll('.browse_image');
        menuImages.forEach(image => {
            image.addEventListener('mouseover', handleImageHover);
            image.addEventListener('mouseout', handleImageHover);
        });

// lead to home page on clicking back button
function redirectToHomePage() {
    window.location.href = 'link.html';
}

//for new_tag appearance
document.addEventListener('DOMContentLoaded', function() {
    const productFeatures = document.querySelectorAll('.product_features');
    
    productFeatures.forEach(function(feature) {
        if (feature.getAttribute('data-new') === 'true') {
            feature.classList.toggle('active');
        }
    });
});

//SHOPPING CART

let cart = document.querySelector(".cart");
//Open Cart
function addToCart() {
    cart.classList.add("active");
    console.log("added to cart")
};
//Close Cart
function closeCart() {
    cart.classList.remove("active");
    console.log("cart closed")
};

//Updating Cart
document.addEventListener('DOMContentLoaded', ready);

// document.addEventListener('DOMContentLoaded', function() {
//     ready();
//     renderCart(); // Ensure the cart is rendered correctly on load
// });

function ready(){
    // remove items from cart
    var removeCartButton = document.getElementsByClassName('cart_remove');
    // console.log(removeCartButton);
    for (var i = 0; i< removeCartButton.length; i++) {
        var button = removeCartButton[i];
        button.addEventListener('click', removeCartItem);
    }
    //change quantity
    var quantityInputs = document.getElementsByClassName('cart_product_quantity');
    // console.log(quantityInputs);
    for (var i = 0; i< quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
    //add to cart
    var addCart = document.getElementsByClassName('add_to_cart_button');
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener('click', addCartClicked);
    }
    //view full cart button
    document.getElementsByClassName('view_cart_btn')[0].addEventListener('click', viewFullCart);
}




function removeCartItem(event) {
    // Get the button that was clicked
    var buttonClicked = event.target;
    
    // Find the closest .cart_box element
    var cartItem = buttonClicked.closest('.cart_box');
    
    if (!cartItem) {
        console.error('Cart item element not found');
        return;
    }

    // Get the title of the product in the cart item
    var titleElement = cartItem.querySelector('.cart_product_title');
    
    if (!titleElement) {
        console.error('Title element not found within cart item');
        return;
    }

    var title = titleElement.innerText;

    // Get cart items from localStorage
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Filter out the item to be removed
    var updatedCartItems = cartItems.filter(item => item.title.trim() !== title.trim());
    
    console.log('Updated cart items:', updatedCartItems);
    console.log('Cart item to remove:', cartItem);

    // Update localStorage
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    // Remove the cart item from the DOM
    cartItem.remove();

    if (document.contains(cartItem)) {
        console.error('Failed to remove cart item from the DOM');
    } else {
        console.log('Cart item removed from the DOM');
    }

    // Update the total
    updatetotal();

    // Trigger the storage event manually
    var storageEvent = new CustomEvent('cartUpdated', { detail: updatedCartItems });
    window.dispatchEvent(storageEvent);
}

function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    renderCart();
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    var cartBox = input.closest('.cart_box');
    var title = cartBox.querySelector('.cart_product_title').innerText;
    var product = cartItems.find(item => item.title === title);


    if (product) {
        product.quantity = input.value;
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
    updatetotal();


    // Update the quantity in the cart display
    // renderCart(); // Assuming you have a renderCart function in your cart.js to update the cart display
    // updatetotal(); // Also update the total after changing the quantity
}

function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.closest('.product_card'); 
    var title = shopProducts.querySelector(".product_features p").innerText; 
    var price = shopProducts.querySelector(".price b").innerText;
    var productImage = shopProducts.querySelector(".browse_image").src; 
    var quantity = 1; // Default quantity
    addProductToCart(title, price, productImage, quantity);
    updatetotal();
}

function addProductToCart(title, price, productImage, quantity) {
    var cartBoxContent = {
        title: title,
        price: price,
        productImage: productImage,
        quantity: quantity
    };

    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    
    // Check if the product is already in the cart
    var productExists = cartItems.find(item => item.title === title);
    if (productExists) {
        alert("You have already added this item to your cart");
        return;
    }

    cartItems.push(cartBoxContent);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    renderCart();
}

//view Full Cart
function viewFullCart() {
    alert("You are viewing detailed cart");

    var cartContent = document.getElementsByClassName("cart_content")[0];
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
    renderCart();
    updatetotal();
    window.location.href = 'Cart1.html';
}

// update total
function updatetotal() {
    var cartContent = document.getElementsByClassName("cart_content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart_box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart_product_price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart_product_quantity")[0];
        if (priceElement && quantityElement) {
            var price = parseFloat(priceElement.innerText.replace("$", ""));
            var quantity = quantityElement.value;
            console.log(price, quantity);
            total = total + (price * quantity);
        }
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("total_price")[0].innerText = "$" + total.toFixed(2);
}

function renderCart() {
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    var cartItemsContainer = document.querySelector(".cart_content");
    cartItemsContainer.innerHTML = '';

    cartItems.forEach(item => {
        var cartShopBox = document.createElement("div");
        cartShopBox.classList.add('cart_box');

        cartShopBox.innerHTML = `
            <img class="product_image" src="${item.productImage}" alt="">
            <div class="detail_box">
                <div class="cart_product_title">${item.title}</div>
                <div class="cart_product_price">${item.price}</div>
                <input type="number" value="${item.quantity}" class="cart_product_quantity">
            </div>
            <i class='bx bxs-trash cart_remove'></i>`;

        cartItemsContainer.append(cartShopBox);
        cartShopBox.querySelector(".cart_remove").addEventListener('click', removeCartItem);
        cartShopBox.querySelector(".cart_product_quantity").addEventListener('change', quantityChanged);
    });

    updatetotal();
}
//cartItems
function handleStorageEvent(event) {
    if (event.type === "cartUpdated") {
        renderCart();
    }
}

window.addEventListener('cartUpdated', handleStorageEvent);

document.addEventListener('DOMContentLoaded', renderCart);
