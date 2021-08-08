// import SHOP_DATEN from "./shop.data"
import ShopActionTypes from "./shop.types";
const INTIAL_STATE={
    collections:null,
    // collections:SHOP_DATEN

};


const ShopReducer=(state=INTIAL_STATE,action)=>{
    switch(action.type){
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return{
                ...state,
                collections:action.payload
            }
        default:
            return state;
    }
}

export default ShopReducer;