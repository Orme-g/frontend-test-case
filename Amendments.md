Изменения:
Хоть хранилище и небольшое, но его удобно для перспективы роста разделить на слайсы. В данный момент избыточно.
Whats done:

1. All components separated from App.jsx file. App.jsx only collecting components for display.
2. Moved Redux Provider from App.jsx to main.jsx file.
3. Fetching data logic moved to Redux Store (CreateAsyncThunk).
4. Dispatching action types (dispatch({ type: "app/addToCart", payload: product })) - changed to dispatching Action Creators (dispatch(addToCart(product)))
5. Creaded extra Product Card & Filter components.
6. Added UI for error while fetching products data.
7. Removed setProducts, setLoading, setError from store as its controlled in Extra Reducers.
8. Cleared odd data from store ()
9. Made 3 separate Store slices for user, products, cart (easy to maintain and read).
10. We have exported Selectors from store - so we use them in components.
