import React, { useState, useEffect } from 'react';

export default function ProductDetails() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://glowquester-backend.vercel.app/skincare/product');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const deleteProduct = async (product_id) => {
        try {
            const response = await fetch(`https://glowquester-backend.vercel.app/skincare/product/${product_id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setProducts(products.filter(product => product.product_id !== product_id));
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const editProductQuantity = async (product_id, quantity) => {
        try {
            const response = await fetch(`https://glowquester-backend.vercel.app/skincare/product/${product_id}/quantity`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ quantity }),
            });
            if (response.ok) {
                setProducts(products.map(product => product.product_id === product_id ? { ...product, quantity } : product));
            }
        } catch (error) {
            console.error('Error editing product quantity:', error);
        }
    };

    const editProductPrice = async (product_id, price) => {
        try {
            const response = await fetch(`https://glowquester-backend.vercel.app/skincare/product/${product_id}/price`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ price }),
            });
            if (response.ok) {
                setProducts(products.map(product => product.product_id === product_id ? { ...product, price } : product));
            }
        } catch (error) {
            console.error('Error editing product price:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="product-table">
            <table width="100%">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.product_id}>
                            <td>{product.product_id}</td>
                            <td>{product.product_name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>
                                <button onClick={() => deleteProduct(product.product_id)}>Delete</button>
                                <button onClick={() => editProductQuantity(product.product_id, prompt("Enter new quantity:", product.quantity))}>Edit Quantity</button>
                                <button onClick={() => editProductPrice(product.product_id, prompt("Enter new price:", product.price))}>Edit Price</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
