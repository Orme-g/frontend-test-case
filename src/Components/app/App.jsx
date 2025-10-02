import Header from "../header/Header";
import ProductList from "../product-list/ProductList";
import Cart from "../cart/Cart";

import "./App.css";

function App() {
    return (
        <div className="app">
            <Header />
            <div className="main-content">
                <ProductList />
                <Cart />
            </div>
        </div>
    );
}

export default App;
