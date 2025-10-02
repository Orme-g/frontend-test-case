import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../store/store";
import Filters from "../filters/Filters";
import ProductCard from "../product-card/ProductCard";

import "./ProductList.css";

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.app.products);
    const loading = useSelector((state) => state.app.loading);

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortBy, setSortBy] = useState("name");

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const filteredProducts = products
        .filter((product) => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory =
                selectedCategory === "all" || product.category === selectedCategory;
            return matchesSearch && matchesCategory;
        })
        .sort((a, b) => {
            if (sortBy === "name") return a.name.localeCompare(b.name);
            if (sortBy === "price") return a.price - b.price;
            return 0;
        });
    const handleSearchChange = (value) => {
        setSearchTerm(value);
    };
    const handleCategoryChange = (value) => {
        setSelectedCategory(value);
    };
    const handleSortChange = (value) => {
        setSortBy(value);
    };

    if (loading) {
        return <div className="loading">Загрузка товаров...</div>;
    }

    return (
        <div className="product-list">
            <Filters
                searchTerm={searchTerm}
                handleSearchChange={handleSearchChange}
                selectedCategory={selectedCategory}
                handleCategoryChange={handleCategoryChange}
                sortBy={sortBy}
                handleSortChange={handleSortChange}
            />
            <div className="products">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};
export default ProductList;
