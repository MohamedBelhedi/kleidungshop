import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import userReducer from './user/user.reducer.js'
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer.js";
import ShopReducer from "./shop/shop.reducer.js";
const persistConfig={
    key:'root',
    storage,
    whitelist:['cart']
}
const rootReducer=combineReducers({
// hier Pointen die Funktionen ausrufen siehe unten
    user:userReducer,
    cart:cartReducer,
    directory:directoryReducer,
    shop:ShopReducer,
});


export default persistReducer(persistConfig,rootReducer);