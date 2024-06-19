import React, { useState, useEffect } from 'react';
import './Catalog.css';
import 'boxicons/css/boxicons.min.css';

const Catalog = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        setCart(storedCartItems);
        updateTotal(storedCartItems);
    }, []);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cart));
        updateTotal(cart);
    }, [cart]);

    const handleImageHover = (event, isHovering) => {
        event.target.style.transform = isHovering ? 'scale(1.2)' : 'scale(1)';
    };

    const redirectToHomePage = () => {
        window.location.href = 'link.html';
    };

    const addToCart = (title, price, productImage) => {
        const productExists = cart.find(item => item.title === title);
        if (productExists) {
            alert("You have already added this item to your cart");
            return;
        }
        const newCart = [...cart, { title, price, productImage, quantity: 1 }];
        setCart(newCart);
    };

    const removeCartItem = (title) => {
        const newCart = cart.filter(item => item.title !== title);
        setCart(newCart);
    };

    const quantityChanged = (title, quantity) => {
        const newCart = cart.map(item =>
            item.title === title ? { ...item, quantity: quantity > 0 ? quantity : 1 } : item
        );
        setCart(newCart);
    };

    const updateTotal = (cartItems) => {
        const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotal(total);
    };

    const renderCart = () => {
        return cart.map(item => (
            <div className="cart_box" key={item.title}>
                <img className="product_image" src={item.productImage} alt={item.title} />
                <div className="detail_box">
                    <div className="cart_product_title">{item.title}</div>
                    <div className="cart_product_price">${item.price}</div>
                    <input
                        type="number"
                        value={item.quantity}
                        className="cart_product_quantity"
                        onChange={(e) => quantityChanged(item.title, parseInt(e.target.value))}
                    />
                </div>
                <i className='bx bxs-trash cart_remove' onClick={() => removeCartItem(item.title)}></i>
            </div>
        ));
    };

    return (
        <main>
            <div className="container">
                <div className="navbar2">
                    <div className="navbar_images">
                        <button className="image_button" onClick={() => alert('Button clicked!')}>
                            <img src="../images/filter.png" alt="Click Me" />
                        </button>
                        <button className="image_button" onClick={() => alert('Button clicked!')}>
                            <img src="../images/view1.png" alt="Click Me" />
                        </button>
                    </div>
                </div>
                <div className="searched_no">
                    <button className="back_button_img" onClick={redirectToHomePage}>
                        <img src="../images/back.png" alt="back" />
                    </button>
                    <button className="back_button_text" onClick={redirectToHomePage}>
                        <span>49</span> &nbsp; Results Found
                    </button>
                </div>
                <div className="catalog">
                    <div id="Menu" className="Menu">
                        {['Summer Time Exfoliator', 'Summer Time Cream', 'Summer Time Cleanser', 'Summer Time Night Cream', 'Summer Time Serum', 'Summer Time Toner', 'Summer Time Essence'].map((product, index) => (
                            <div className="product_card" key={index}>
                                <a href="../ProductDetail/index2.html">
                                    <div className="product_features">
                                        <img className="new_tag" src="../images/New.png" alt="new_item" />
                                        <img
                                            className="browse_image"
                                            src={`../images/${index + 1}.png`}
                                            alt=""
                                            onMouseOver={(e) => handleImageHover(e, true)}
                                            onMouseOut={(e) => handleImageHover(e, false)}
                                        />
                                        <p style={{ fontSize: '20px' }}>{product}</p>
                                        <div className="price">
                                            <del>$7.00</del>
                                            <span><b>${(6.50 - (index * 0.50)).toFixed(2)}</b></span>
                                        </div>
                                        <p><span style={{ fontWeight: 'bold' }}>500</span> reviews</p>
                                        <p><span style={{ fontWeight: 'bold' }}>12K</span> sold</p>
                                        <img className="free_delivery" src="../images/Free Delivery.png" alt="free_delivery_status" />
                                    </div>
                                </a>
                                <div className="add_to_cart">
                                    <button
                                        className="add_to_cart_button"
                                        onClick={() => addToCart(product, (6.50 - (index * 0.50)).toFixed(2), `../images/${index + 1}.png`)}
                                    >
                                        <img src="../images/AddToCart.png" alt="Click Me" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="cart">
                    <h2>Your Cart</h2>
                    <div className="cart_content">
                        {renderCart()}
                    </div>
                    <div className="total">
                        <div className="total_title">Total</div>
                        <div className="total_price">${total.toFixed(2)}</div>
                    </div>
                    <button type="button" className="view_cart_btn" onClick={() => window.location.href = 'Cart1.html'}>View Cart</button>
                    <i className='bx bx-x close_cart' onClick={() => document.querySelector(".cart").classList.remove("active")}></i>
                </div>
            </div>
        </main>
    );
};

export default Catalog;
