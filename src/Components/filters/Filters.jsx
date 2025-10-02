import { useState } from "react";

import "./Filters.css";

const Filters = ({
    searchTerm,
    handleSearchChange,
    selectedCategory,
    handleCategoryChange,
    sortBy,
    handleSortChange,
}) => {
    const [showFilters, setShowFilters] = useState(false);

    return (
        <div className="filters">
            <div className="search">
                <input
                    type="text"
                    placeholder="Поиск товаров..."
                    value={searchTerm}
                    onChange={(e) => handleSearchChange(e.target.value)}
                />
            </div>

            <div className="filter-controls">
                <select
                    value={selectedCategory}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                >
                    <option value="all">Все категории</option>
                    <option value="phones">Телефоны</option>
                    <option value="laptops">Ноутбуки</option>
                    <option value="tablets">Планшеты</option>
                </select>

                <select value={sortBy} onChange={(e) => handleSortChange(e.target.value)}>
                    <option value="name">По названию</option>
                    <option value="price">По цене</option>
                </select>

                <button onClick={() => setShowFilters(!showFilters)}>
                    {showFilters ? "Скрыть фильтры" : "Показать фильтры"}
                </button>
            </div>
        </div>
    );
};
export default Filters;
