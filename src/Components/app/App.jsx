import { Provider } from "react-redux";
import { store } from "../../store/store";

import Header from "../header/Header";
import ProductList from "../product-list/ProductList";
import Cart from "../cart/Cart";

import "./App.css";

function App() {
    return (
        <Provider store={store}>
            <div className="app">
                <Header />
                <div className="main-content">
                    <ProductList />
                    <Cart />
                </div>
            </div>
        </Provider>
    );
}

export default App;
