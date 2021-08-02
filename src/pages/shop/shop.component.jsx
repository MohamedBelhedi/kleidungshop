import React from 'react'
import {Route} from 'react-router-dom';
// import SHOP_DATEN from'../../redux/shop/shop.data';
// import PreviewCollection from '../../component/preview-collection/preview-collection.component'
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import CollectionsOverview from '../../component/collections-overview/collections-overview.component.jsx';

import CollectionPage from '../collection/collection.component'
// class ShopPage extends React.Component{
    // constructor(props){
    //     super(props);

    //     this.state={
    //         collections: SHOP_DATEN
    //     }
    // }

    const ShopPage =({match})=>(
   <div className="shop-seite">
            <Route exact path={`${match.path}`} component={CollectionsOverview}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>);


    
export default ShopPage;