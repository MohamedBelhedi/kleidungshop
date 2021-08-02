import React from 'react'
// import SHOP_DATEN from'../../redux/shop/shop.data';
// import PreviewCollection from '../../component/preview-collection/preview-collection.component'
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import CollectionsOverview from '../../component/collections-overview/collections-overview.component.jsx';
// class ShopPage extends React.Component{
    // constructor(props){
    //     super(props);

    //     this.state={
    //         collections: SHOP_DATEN
    //     }
    // }

    const ShopPage =({collections})=>(
   <div className="Shop Seite">
            <CollectionsOverview/>

        </div>);


    
export default ShopPage;