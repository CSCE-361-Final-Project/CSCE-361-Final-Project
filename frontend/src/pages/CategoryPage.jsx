import { useState, useEffect } from 'react';
import '../styles/category.css';
import '../styles/homepage.css';
import ProductCard from '../components/ProductCard';

// sample data - after implemeted backend put in data here
const allCategories = [
    { categoryID: 1, name: 'Summer Collection' },
    { categoryID: 2, name: 'Clearance' },
    { categoryID: 3, name: 'New Arrivals' },
];

const allProducts = [
    { id: 1, name: "Classic White Tee",     category: "Summer Collection", price: "29.99",  oldPrice: null,    sku: "AB12345", image: "https://via.placeholder.com/300", onSale: false, categoryID: 1 },
    { id: 2, name: "Summer Floral Dress",   category: "Summer Collection", price: "89.99",  oldPrice: "110.00", sku: "AB12346", image: "https://via.placeholder.com/300", onSale: true,  categoryID: 1 },
    { id: 3, name: "Denim Jacket",          category: "Summer Collection", price: "129.99", oldPrice: null,    sku: "AB12347", image: "https://via.placeholder.com/300", onSale: false, categoryID: 1 },
    { id: 4, name: "Running Sneakers",      category: "Clearance",         price: "79.99",  oldPrice: "89.99", sku: "AB12348", image: "https://via.placeholder.com/300", onSale: true,  categoryID: 2 },
    { id: 5, name: "Leather Belt",          category: "Clearance",         price: "34.99",  oldPrice: null,    sku: "AB12349", image: "https://via.placeholder.com/300", onSale: false, categoryID: 2 },
    { id: 6, name: "Canvas Backpack",       category: "New Arrivals",      price: "59.99",  oldPrice: null,    sku: "AB12350", image: "https://via.placeholder.com/300", onSale: false, categoryID: 3 },
    { id: 7, name: "Wool Sweater",          category: "New Arrivals",      price: "99.99",  oldPrice: null,    sku: "AB12351", image: "https://via.placeholder.com/300", onSale: false, categoryID: 3 },
    { id: 8, name: "Sunglasses",            category: "Summer Collection", price: "49.99",  oldPrice: null,    sku: "AB12352", image: "https://via.placeholder.com/300", onSale: false, categoryID: 1 },
];

export default function CategoryPage({ setPage, setSelectedProduct }) {
    const [activeCategory, setActiveCategory] = useState(null); // null = All
    const [filteredProducts, setFilteredProducts] = useState(allProducts);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (activeCategory === null) {
            setFilteredProducts(allProducts);
        } else {
            setFilteredProducts(allProducts.filter(p => p.categoryID === activeCategory));
        }
    }, [activeCategory]);

    const activeCategoryName = activeCategory === null
        ? 'All Products'
        : allCategories.find(c => c.categoryID === activeCategory)?.name;

    return (
        <div className="category-page">
            {/* Hero */}
            <div className="category-page__hero">
                <h1>{activeCategoryName}</h1>
                <p>{filteredProducts.length} products found</p>
            </div>

            {/* Category Tabs */}
            <div className="category-tabs">
                <button
                    className={`category-tab ${activeCategory === null ? 'category-tab--active' : ''}`}
                    onClick={() => setActiveCategory(null)}>
                    All
                </button>
                {allCategories.map(cat => (
                    <button
                        key={cat.categoryID}
                        className={`category-tab ${activeCategory === cat.categoryID ? 'category-tab--active' : ''}`}
                        onClick={() => setActiveCategory(cat.categoryID)}>
                        {cat.name}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="category-grid">
                {filteredProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        setPage={setPage}
                        setSelectedProduct={setSelectedProduct}
                    />
                ))}
            </div>
        </div>
    );
}