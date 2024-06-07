// document.addEventListener('DOMContentLoaded', function() {
//     var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//     var cartItemsContainer1 = document.querySelector(".cart_info");
//     var cartItemsContainer2 = document.querySelector(".sub_total");

//     cartItems.forEach(item => {
//         var cartShopBox1 = document.createElement("div");
//         cartShopBox1.classList.add('cart_box');
//         var cartShopBox2 = document.createElement("div");

//         cartShopBox1.innerHTML = `
//             <img class="product_image" src="${item.productImage}" alt="">
//             <div class="detail_box">
//                 <div class="cart_product_title">${item.title}</div>
//                 <div class="cart_product_price">${item.price}</div>
//                 <input type="number" value="${item.quantity}" class="cart_product_quantity">
//                 <i class='bx bxs-trash cart_remove'></i>
//             </div>`;

//         cartShopBox2.innerHTML = `
//             <div class="subtotal">
//             <div class="sub_price">$${(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}</div>
//             </div>`;

//         cartItemsContainer1.append(cartShopBox1);
//         cartItemsContainer2.append(cartShopBox2);
//     })



//     //     var cartItemsContainer2 = document.querySelector(".sub_total");

//     //     cartItems.forEach(item => {
//     //         var cartShopBox2 = document.createElement("div");
//     //         // cartShopBox2.classList.add('cart_box');
    
//     //         cartShopBox2.innerHTML = `
//     //                 <div class="subtotal">
//     //                 <div class="sub_price">$${(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}</div>
//     //             </div>`;

//     //             cartItemsContainer2.append(cartShopBox2);

//     // });

//     updatetotal();

//     ready();
// });

// function updatetotal() {
//     var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//     var total = 0;

//     cartItems.forEach(item => {
//         var price = parseFloat(item.price.replace("$", ""));
//         var quantity = item.quantity;
//         subtotal = price * quantity;
//     });

//     subtotal = Math.round(subtotal * 100) / 100;
//     document.querySelector(".sub_total").innerText = "$" + subtotal.toFixed(2);

//     cartItems.forEach(item => {
//         var price = parseFloat(item.price.replace("$", ""));
//         var quantity = item.quantity;
//         total += price * quantity;
//     });

//     total = Math.round(total * 100) / 100;
//     document.querySelector(".subtotal_price").innerText = "$" + total.toFixed(2);

//     var tax = 100; // Fixed tax value
//     var deliveryFee = 250; // Fixed delivery fee
//     var grandTotal = total + tax + deliveryFee;
//     document.querySelector(".total_price").innerText = "$" + grandTotal.toFixed(2);
// }

// function checkout() {
//     alert("Proceeding to checkout");
//     // Here you can add further functionality for checkout
// }

// function ready() {
//     var removeCartButtons = document.getElementsByClassName('cart_remove');
//     for (var i = 0; i < removeCartButtons.length; i++) {
//         var button = removeCartButtons[i];
//         button.addEventListener('click', removeCartItem);
//     }

//     var quantityInputs = document.getElementsByClassName('cart_product_quantity');
//     for (var i = 0; i < quantityInputs.length; i++) {
//         var input = quantityInputs[i];
//         input.addEventListener('change', quantityChanged);
//     }

//     var addCartButtons = document.getElementsByClassName('add_to_cart_button');
//     for (var i = 0; i < addCartButtons.length; i++) {
//         var button = addCartButtons[i];
//         button.addEventListener('click', addCartClicked);
//     }
// }

// function removeCartItem(event) {
//     var buttonClicked = event.target;
//     var cartItem = buttonClicked.closest('.cart_box');
//     var title = cartItem.querySelector('.cart_product_title').innerText;

//     var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//     cartItems = cartItems.filter(item => item.title.trim() !== title.trim());
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));

//     cartItem.remove();
//     updatetotal();
// }

// function quantityChanged(event) {
//     var input = event.target;
//     if (isNaN(input.value) || input.value <= 0) {
//         input.value = 1;
//     }

//     var cartItem = input.closest('.cart_box');
//     var title = cartItem.querySelector('.cart_product_title').innerText;
//     var quantity = input.value;

//     var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//     var item = cartItems.find(item => item.title.trim() === title.trim());
//     if (item) {
//         item.quantity = quantity;
//         localStorage.setItem("cartItems", JSON.stringify(cartItems));
//     }

//     updatetotal();
// }

// function addCartClicked(event) {
//     var button = event.target;
//     var shopProducts = button.closest('.product_card');
//     var title = shopProducts.querySelector(".product_features p").innerText;
//     var price = shopProducts.querySelector(".price b").innerText;
//     var productImage = shopProducts.querySelector(".browse_image").src;

//     addProductToCart(title, price, productImage);
//     updatetotal();
// }

// function addProductToCart(title, price, productImage) {
//     var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

//     if (cartItems.some(item => item.title.trim() === title.trim())) {
//         alert("You have already added this item to your cart");
//         return;
//     }

//     var newItem = {
//         title: title,
//         price: price,
//         productImage: productImage,
//         quantity: 1
//     };

//     cartItems.push(newItem);
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));

//     var cartShopBox1 = document.createElement("div");
//     cartShopBox1.classList.add('cart_box');
//     var cartShopBox2 = document.createElement("div");

//     cartShopBox1.innerHTML = `
//         <img class="product_image" src="${productImage}" alt="">
//         <div class="detail_box">
//             <div class="cart_product_title">${title}</div>
//             <div class="cart_product_price">${price}</div>
//             <input type="number" value="1" class="cart_product_quantity">
//             <i class='bx bxs-trash cart_remove'></i>
//         </div>`;

//         cartShopBox2.innerHTML = 
//         `<div class="subtotal">
//                         <div class="sub_price">$${(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}</div>
//                     </div>`;

//     document.querySelector(".cart_info").append(cartShopBox1);
//     document.querySelector(".sub_total").append(cartShopBox2);



//     // var cartShopBox2 = document.createElement("div");

//     // cartShopBox2.innerHTML = 
//     // `<div class="subtotal">
//     //                 <div class="sub_price">$${(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}</div>
//     //             </div>`;

//     // document.querySelector(".sub_total").append(cartShopBox2);

//     cartShopBox1.querySelector(".cart_remove").addEventListener('click', removeCartItem);
//     cartShopBox1.querySelector(".cart_product_quantity").addEventListener('change', quantityChanged);
//     cartShopBox2.querySelector(".cart_remove").addEventListener('click', removeCartItem);
//     cartShopBox2.querySelector(".cart_product_quantity").addEventListener('change', quantityChanged);
// }

document.addEventListener('DOMContentLoaded', function() {
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    var cartItemsContainer1 = document.querySelector(".cart_info");
    var cartItemsContainer2 = document.querySelector(".sub_total");

    cartItems.forEach(item => {
        var cartShopBox1 = document.createElement("div");
        cartShopBox1.classList.add('cart_box');

        cartShopBox1.innerHTML = `
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

        cartItemsContainer1.append(cartShopBox1);
    });

    updatetotal();
    ready();
});

function updatetotal() {
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    var total = 0;

    cartItems.forEach(item => {
        var price = parseFloat(item.price.replace("$", ""));
        var quantity = item.quantity;
        total += price * quantity;
    });

    total = Math.round(total * 100) / 100;
    document.querySelector(".subtotal_price").innerText = "$" + total.toFixed(2);

    var tax = 100; // Fixed tax value
    var deliveryFee = 250; // Fixed delivery fee
    var grandTotal = total + tax + deliveryFee;
    document.querySelector(".total_price").innerText = "$" + grandTotal.toFixed(2);
}

function checkout() {
    alert("Proceeding to checkout");
    // Here you can add further functionality for checkout
}

function ready() {
    var removeCartButtons = document.getElementsByClassName('cart_remove');
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    var quantityInputs = document.getElementsByClassName('cart_product_quantity');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }

    var addCartButtons = document.getElementsByClassName('add_to_cart_button');
    for (var i = 0; i < addCartButtons.length; i++) {
        var button = addCartButtons[i];
        button.addEventListener('click', addCartClicked);
    }
}

function removeCartItem(event) {
    var buttonClicked = event.target;
    var cartItem = buttonClicked.closest('.cart_box');
    var title = cartItem.querySelector('.cart_product_title').innerText;

    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems = cartItems.filter(item => item.title.trim() !== title.trim());
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    cartItem.remove();
    updatetotal();
}

function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }

    var cartItem = input.closest('.cart_box');
    var title = cartItem.querySelector('.cart_product_title').innerText;
    var quantity = input.value;

    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    var item = cartItems.find(item => item.title.trim() === title.trim());
    if (item) {
        item.quantity = quantity;
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }

    cartItem.querySelector('.sub_price').innerText = "$" + (parseFloat(item.price.replace("$", "")) * quantity).toFixed(2);
    updatetotal();
}

function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.closest('.product_card');
    var title = shopProducts.querySelector(".product_features p").innerText;
    var price = shopProducts.querySelector(".price b").innerText;
    var productImage = shopProducts.querySelector(".browse_image").src;

    addProductToCart(title, price, productImage);
    updatetotal();
}

function addProductToCart(title, price, productImage) {
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    if (cartItems.some(item => item.title.trim() === title.trim())) {
        alert("You have already added this item to your cart");
        return;
    }

    var newItem = {
        title: title,
        price: price,
        productImage: productImage,
        quantity: 1
    };

    cartItems.push(newItem);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    var cartShopBox1 = document.createElement("div");
    cartShopBox1.classList.add('cart_box');

    cartShopBox1.innerHTML = `
        <img class="product_image" src="${productImage}" alt="">
        <div class="detail_box">
            <div class="cart_product_title">${title}</div>
            <div class="cart_product_price">${price}</div>
            <input type="number" value="1" class="cart_product_quantity">
            <i class='bx bxs-trash cart_remove'></i>
        </div>
        <div class="subtotal">
            <div class="sub_price">$${parseFloat(price.replace("$", "")).toFixed(2)}</div>
        </div>`;

    document.querySelector(".cart_info").append(cartShopBox1);

    cartShopBox1.querySelector(".cart_remove").addEventListener('click', removeCartItem);
    cartShopBox1.querySelector(".cart_product_quantity").addEventListener('change', quantityChanged);
}


document.addEventListener('DOMContentLoaded', renderCart);
