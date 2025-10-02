import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../reducers/userSlice";
import { setUser } from "../../reducers/userSlice";

import "./Header.css";

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    useEffect(() => {
        setTimeout(() => {
            dispatch(
                setUser({
                    id: 1,
                    name: "Иван Иванов",
                    email: "ivan@example.com",
                })
            );
        }, 500);
    }, [dispatch]);
    return (
        <header className="header">
            <h1>🛒 Интернет-магазин</h1>
            <div className="user-info">
                {user ? <span>Привет, {user.name}!</span> : <span>Загрузка...</span>}
            </div>
        </header>
    );
};
export default Header;
