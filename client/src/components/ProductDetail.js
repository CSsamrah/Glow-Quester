import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../components/Pages/CartContext'; // Adjust path as per your project structure
import './ProductDetail.css';
import SlidingCart from '../components/Pages/SlidingCart';

const ProductDetail = () => {
    const { product_id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const [isSlidingCartOpen, setSlidingCartOpen] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://glowquester-backend.vercel.app/skincare/product/${product_id}`);
                if (!response.ok) {
                    throw new Error('Product not found');
                }
                const data = await response.json();
                console.log('Fetched product data:', data);
                setProduct(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [product_id]);

    const handleAddToCart = () => {
        if (product) {
            addToCart({
                title: product.product_name,
                price: product.price,
                image: product.picture, // Use the correct field for image
            });
            setSlidingCartOpen(true);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="product-detail">
            {product && (
                <>
                    <img src={product.picture} alt={product.product_name} />
                    <div className="details">
                        <h1>{product.product_name}</h1>
                        <p className="description">{product.description}</p>
                        <p className="price">Price: {product.price}</p>
                        <p className="rating">Rating: {product.rating}</p>
                        <button className="add_cart_button" onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                    </div>
                </>
            )}
            {/* Sliding Cart Component */}
            <SlidingCart
                isOpen={isSlidingCartOpen}
                onClose={() => setSlidingCartOpen(false)}
                onViewFullCart={() => navigate('/cart')}
            />
        </div>
    );
};

export default ProductDetail;
