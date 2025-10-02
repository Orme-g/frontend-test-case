import { useDispatch } from "react-redux";
import { addToCart } from "../../reducers/cartSlice";
import "./ProductCard.css";
const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const { id, image, name, description, price } = product;
    return (
        <div key={id} className="product-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <div className="price">${price}</div>
            <button
                onClick={() => {
                    dispatch(addToCart(product));
                }}
            >
                Добавить в корзину
            </button>
        </div>
    );
};
export default ProductCard;
