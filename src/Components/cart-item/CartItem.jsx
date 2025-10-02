import "./CartItem.css";
const CartItem = ({ item, handleUpdateQuantity, handleRemoveItem }) => {
    const { id, image, name, price, quantity } = item;
    return (
        <div key={id} className="cart-item">
            <img src={image} alt={name} />
            <div className="item-details">
                <h4>{name}</h4>
                <p>${price}</p>
                <div className="quantity-controls">
                    <button onClick={() => handleUpdateQuantity(id, quantity - 1)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => handleUpdateQuantity(id, quantity + 1)}>+</button>
                </div>
            </div>
            <button className="remove-btn" onClick={() => handleRemoveItem(id)}>
                Удалить
            </button>
        </div>
    );
};
export default CartItem;
