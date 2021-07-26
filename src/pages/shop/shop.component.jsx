import React from 'react'
import SHOP_DATEN from'./shop.data';
import PreviewCollection from '../../component/preview-collection/preview-collection.component'

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state={
            collections: SHOP_DATEN
        }
    }
    render(){
        const {collections}=this.state;
        return (<div className="Shop Seite">
            {
                collections.map(({id,...otherCollectionProps})=>(
                    <PreviewCollection key={id}{...otherCollectionProps}/>
                ))

            }

        </div>)
    }
}
export default ShopPage;