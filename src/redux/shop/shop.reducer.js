import SHOP_DATEN from "./shop.data"
const INTIAL_STATE={
    collections:SHOP_DATEN

};


const ShopReducer=(state=INTIAL_STATE,action)=>{
    switch(action.type){
        default:
            return state;
    }
}

export default ShopReducer;