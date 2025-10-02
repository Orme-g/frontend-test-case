Изменения:

1. Код из App.jsx разделён на отдельные компоненты (Filter, Header, ProductCard, ProductList, Cart, ...), в которых легче ориентироваться и легче поддерживать.
2. Redux Provider вынесен из App.jsx в main.jsx (как в документации самого Redux).
3. Симуляция загрузки данных (товары, пользователь) вынесена из компонентов в Redux хранилище. Загрузка через CreateAsyncThunk и вся логика обновления хранилища теперь внутри, без диспатча лишних действий с фронтенда.
4. Заменил все диспатчи типа { type: "app/addToCart", payload: product } на вызовы Action Creators
5. Немного переписал UI под статусы загрузок данных (загрузка/успешно/ошибка)
6. Убрал неиспользуемые более Action Creators, когда логика работы с загрузкой данных переехала внутрь хранилища.
7. Почистил хранилище от лишних данных, которые вычислялись но нигде не использовались (cartItemsCount, cartTotalAmount, cartTotalSum)
8. Разделил хранилище на 3 слайса для каждой сущности (товар, пользователь, корзина). store.js используется только для сборки слайсов. Легче поддерживать каждый слайс в отдельности, хранилища независимы друг от друга, меньше кода в каждом слайсе.
9. Компоненты напрямую обращались к хранилищу и получали данные из состояния, хотя были прописаны селекторы. Переписал, что компоненты получают нужные данные с использованием селекторов.
10. Некоторая повторяемая логика, как пересчёт количества товаров при удалении/добавлении в корзину вынесена в отдельную функцию (DRY).

Whats done:

1. All components separated from App.jsx file. App.jsx only collecting components for display.
2. Moved Redux Provider from App.jsx to main.jsx file.
3. Fetching data logic moved to Redux Store (CreateAsyncThunk). Only dispatching action in useEffect, all logic in store.
4. Dispatching action types (dispatch({ type: "app/addToCart", payload: product })) - changed to dispatching Action Creators (dispatch(addToCart(product)))
5. Added UI for error while fetching products data.
6. Removed setProducts, setLoading, setError from store as its controlled in Extra Reducers.
7. Cleared odd data from store ()
8. Made 3 separate Store slices for user, products, cart (easy to maintain and read). Store.js file is only importing slices.
9. We have exported Selectors from store - so we use them in components.
10. Removed repeated logic in store for quantities calculations.
