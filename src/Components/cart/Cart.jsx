import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../../reducers/cartSlice";
import { selectCartItems, selectCartCount, selectTotalPrice } from "../../reducers/cartSlice";

import CartItem from "../cart-item/CartItem";

import "./Cart.css";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const cartCount = useSelector(selectCartCount);
    const totalPrice = useSelector(selectTotalPrice);
    const [isOpen, setIsOpen] = useState(false);
    const [showCheckout, setShowCheckout] = useState(false);
    const handleRemoveItem = (id) => {
        dispatch(removeFromCart(id));
    };
    const handleUpdateQuantity = (id, quantity) => {
        if (quantity <= 0) {
            handleRemoveItem(id);
            return;
        }
        dispatch(updateQuantity({ id, quantity }));
    };
    const handleCheckout = () => {
        setShowCheckout(true);
        setTimeout(() => {
            alert("Заказ оформлен!");
            dispatch(clearCart());
            setShowCheckout(false);
            setIsOpen(false);
        }, 1000);
    };

    return (
        <div className="cart">
            <button className="cart-toggle" onClick={() => setIsOpen(!isOpen)}>
                Корзина ({cartCount})
            </button>
            {isOpen && (
                <div className="cart-dropdown">
                    <div className="cart-header">
                        <h3>Корзина</h3>
                        <button onClick={() => setIsOpen(false)}>×</button>
                    </div>
                    <div className="cart-items">
                        {cartItems.length === 0 ? (
                            <p>Корзина пуста</p>
                        ) : (
                            cartItems.map((item) => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    handleUpdateQuantity={handleUpdateQuantity}
                                    handleRemoveItem={handleRemoveItem}
                                />
                            ))
                        )}
                    </div>
                    <div className="cart-footer">
                        <div className="total">Итого: ${totalPrice}</div>
                        <button
                            className="checkout-btn"
                            onClick={handleCheckout}
                            disabled={cartItems.length === 0 || showCheckout}
                        >
                            {showCheckout ? "Оформляем..." : "Оформить заказ"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Cart;
