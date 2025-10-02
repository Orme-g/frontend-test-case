import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser, selectUser, selectStatus } from "../../reducers/userSlice";

import "./Header.css";

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const status = useSelector(selectStatus);
    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);
    let message;
    if (status === "loading" || status === "idle") {
        message = <span>Загрузка...</span>;
    }
    if (status === "error") {
        message = <span>Ошибка...</span>;
    }
    if (status === "success" && user) {
        message = <span>Привет, {user.name}!</span>;
    }

    return (
        <header className="header">
            <h1>🛒 Интернет-магазин</h1>
            <div className="user-info">{message}</div>
        </header>
    );
};
export default Header;
