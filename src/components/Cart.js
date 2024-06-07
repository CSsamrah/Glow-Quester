//receives data from catalog cart
document.addEventListener('DOMContentLoaded', function() {
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    var cartItemsContainer = document.querySelector(".cart_info");

    cartItems.forEach(item => {
        var cartShopBox = document.createElement("div");
        cartShopBox.classList.add('cart_box');

        cartShopBox.innerHTML = `
        <table>
        <tr>
        <td>
            <img class="product_image" src="${item.productImage}" alt="">
            <div class="detail_box">
                <div class="cart_product_title">${item.title}</div>
                <div class="cart_product_price">${item.price}</div>
            </div>
        </td>
        <td>
            <input type="number" value="${item.quantity}" class="cart_product_quantity">
        </td>
        </table>`;

        cartItemsContainer.append(cartShopBox);
    });

    updatetotal();
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
    document.querySelector(".subtotal_price")[0].innerText = "$" + total.toFixed(2);
}

function checkout() {
    alert("Proceeding to checkout");
    // Here you can add further functionality for checkout
}







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
}

// remove items from cart
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.parentElement.parentElement.remove();
    updatetotal();
}

//change quantity
function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    var productPriceElement = document.getElementsByClassName("cart_product_price")[0];
    var quantityElement = document.getElementsByClassName("cart_product_quantity")[0];
    if (productPriceElement && quantityElement){
    var subPrice=parseFloat(productPriceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    console.log(productPriceElement, quantity, subPrice);
    subTotalPrice = subPrice * quantity;
    console.log(subTotalPrice);}

    subTotalPrice = Math.round(subTotalPrice * 100) / 100;
    document.getElementsByClassName("sub_price")[0].innerText = "$" + subTotalPrice.toFixed(2);
    
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

function addProductToCart(title, price, productImage) {
    var cartBoxContent = `
    <img class="product_image" src="${productImage}" alt="">
    <div class="detail_box">
        <div class="cart_product_title">${title}</div>
        <div class="cart_product_price">${price}</div> 
        <input type="number" value="1" class="cart_product_quantity">
    </div>
    <i class='bx bxs-trash cart_remove'></i>`;
    var cartItems = document.getElementsByClassName("cart_content")[0];
    var cartItemsTitles = cartItems.getElementsByClassName("cart_product_title");
    
    // Check if the product is already in the cart
    for (var i = 0; i < cartItemsTitles.length; i++) {
        if (cartItemsTitles[i].innerText.trim() === title.trim()) {
            alert("You have already added this item to your cart");
            return; // Exit the function if the product is already in the cart
        }
    }
    
    // If the product is not already in the cart, add it
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add('cart_box');
    
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    
    cartShopBox.getElementsByClassName("cart_remove")[0].addEventListener('click', removeCartItem);
    cartShopBox.getElementsByClassName("cart_product_quantity")[0].addEventListener('change', quantityChanged);
}

// update total
// function updateSubTotal() {

// }



function updatetotal() {
    var cartContent = document.getElementsByClassName("cart_page")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart_info");
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
    document.getElementsByClassName("subtotal_price")[0].innerText = "$" + total.toFixed(2);
}