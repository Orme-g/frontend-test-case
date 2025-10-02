1. All components separated from App.jsx file. App.jsx only collecting components for display.
2. Fetching data logic moved to Redux Store (CreateAsyncThunk).
3. Dispatching action types (dispatch({ type: "app/addToCart", payload: product })) - changed to dispatching Action Creators (dispatch(addToCart(product)))
4. Creaded extra Product Card & Filter components.
