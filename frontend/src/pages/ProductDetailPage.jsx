import { useState, useEffect } from 'react';
import '../styles/product-detail.css';

export default function ProductDetailPage({ product, setPage, addToCart }) {
    const [quantity, setQuantity] = useState(1);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!product) return null;


    return (
        <main className="container">
            <div className="product-display">
                <div className="product-image">
                    <img src={product.image} alt={product.name} />
                </div>

                <div className="product-info">
                    <h1>{product.name}</h1>
                    <p className="manufacturer">By: <span>{product.manufacturer}</span></p>

                    <div className="price-section">
                        <span className="price-current">${product.price}</span>
                        {product.oldPrice && (
                            <span className="price-old">${product.oldPrice}</span>
                        )}
                        {product.onSale && (
                            <span className="badge badge--sale">SALE</span>
                        )}
                    </div>

                    <p className="description">{product.description}</p>

                    <div className="specs">
                        <h3>Specifications</h3>
                        <ul>
                            <li><strong>SKU:</strong> {product.sku}</li>
                            <li><strong>Dimensions:</strong> {product.dimensions}</li>
                            <li><strong>Weight:</strong> {product.weight}</li>
                            <li><strong>Rating:</strong> {product.rating}</li>
                        </ul>
                    </div>

                    <div className="actions">
                        <input
                            type="number"
                            value={quantity}
                            min="1"
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                        <button className="btn-add-cart" onClick={() => {
                            addToCart(product, quantity);
                        }}>Add to Cart</button>


                    </div>

                    <button
                        onClick={() => setPage('home')}
                        style={{ marginTop: '20px', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
                        ← Back to Products
                    </button>
                </div>
            </div>
        </main>
    );
}