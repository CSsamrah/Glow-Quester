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
    console.log(addCart);
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener('click', addCartClicked);
    }
    //view full cart button
    document.getElementsByClassName('view_cart_btn')[0].addEventListener('click', viewFullCart);
}

// remove items from cart
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

//change quantity
function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatetotal();
}

//add to cart
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.closest('.product_card'); 
    var title = shopProducts.querySelector(".product_features p").innerText; 
    var price = shopProducts.querySelector(".price b").innerText;
    var productImage = shopProducts.querySelector(".browse_image").src; 
    // var shopProducts = button.parentElement;
    // var title = shopProducts.getElementsByClassName("cart_product_title")[0].innerText;
    // var price = shopProducts.getElementsByClassName("cart_product_price")[0].innerText;
    // var productImage = shopProducts.getElementsByClassName("product_image")[0].src;
    addProductToCart(title, price, productImage);
    updatetotal();
}

// function addProductToCart(title, price, productImage) {
//     var cartBoxContent = `
//     <img class="product_image" src="${productImage}" alt="">
//     <div class="detail_box">
//         <div class="cart_product_title">${title}</div>
//         <div class="cart_product_price">${price}</div> 
//         <input type="number" value="1" class="cart_product_quantity">
//     </div>
//     <i class='bx bxs-trash cart_remove'></i>`;
//     var cartItems = document.getElementsByClassName("cart_content")[0];
//     var cartItemsTitles = cartItems.getElementsByClassName("cart_product_title");
    
//     // Check if the product is already in the cart
//     for (var i = 0; i < cartItemsTitles.length; i++) {
//         if (cartItemsTitles[i].innerText.trim() === title.trim()) {
//             alert("You have already added this item to your cart");
//             return; // Exit the function if the product is already in the cart
//         }
//     }
    
//     // If the product is not already in the cart, add it
//     var cartShopBox = document.createElement("div");
//     cartShopBox.classList.add('cart_box');
    
//     cartShopBox.innerHTML = cartBoxContent;
//     cartItems.append(cartShopBox);
    
//     cartShopBox.getElementsByClassName("cart_remove")[0].addEventListener('click', removeCartItem);
//     cartShopBox.getElementsByClassName("cart_product_quantity")[0].addEventListener('change', quantityChanged);
// }

function addProductToCart(title, price, productImage) {
    var cartBoxContent = `
                <img class="product_image" src="${productImage}" alt="">
                <div class="detail_box">
                    <div class="cart_product_title">${title}</div>
                    <div class="cart_product_price">${price}</div> 
                    <input type="number" value="1" class="cart_product_quantity">
                </div>
                <i class='bx bxs-trash cart_remove'></i>`
    var cartItems = document.getElementsByClassName("cart_content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart_product_title");
    var carttitle = document.getElementsByClassName("cart_product_title");
    console.log(carttitle);
    console.log(cartItemsNames)
    for (var i = 0; i < carttitle.length; i++) {
        for (var j = 0; j < cartItemsNames.length; j++){
        if (cartItemsNames[i].innerText == carttitle[i].innerText) {
            console.log(title);
        alert("You have already added this item to your cart");
        return;
    }
}
    }
var cartShopBox = document.createElement("div");
cartShopBox.classList.add('cart_box');

cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName("cart_remove")[0].addEventListener('click', removeCartItem);
cartShopBox.getElementsByClassName("cart_product_quantity")[0].addEventListener('change', quantityChanged);
}

//view Full Cart
function viewFullCart() {
    alert("You are viewing detailed cart");
    var cartContent = document.getElementsByClassName("cart_content")[0];
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal();
    window.location.href = 'link.html';
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