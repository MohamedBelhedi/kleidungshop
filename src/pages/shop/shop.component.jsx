import React from 'react'
import {Route} from 'react-router-dom';
import{connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.actions';

// import SHOP_DATEN from'../../redux/shop/shop.data';
// import PreviewCollection from '../../component/preview-collection/preview-collection.component'
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import CollectionsOverview from '../../component/collections-overview/collections-overview.component.jsx';

import CollectionPage from '../collection/collection.component'

import {firestore,convertCollectionSnapshotToMap} from '../../firebase/firebase.utils'

import WithSpinner from '../../component/with-spinner/with-spinner.component';

// class ShopPage extends React.Component{
    // constructor(props){
    //     super(props);

    //     this.state={
    //         collections: SHOP_DATEN
    //     }
    // }
const CollectionsOverviewWithSpinner=WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner=WithSpinner(CollectionPage);
    class ShopPage extends React.Component{
       state={
           laden:true
       };
        unsubscribeFromSnapshot=null;

        componentDidMount(){
            const {updateCollections}=this.props;
            const ColletionRef=firestore.collection('collections');
             ColletionRef.get().then((snapshot)=>{
                const collectionsMap=convertCollectionSnapshotToMap(snapshot);
                updateCollections(collectionsMap);
                this.setState({laden:false});
            })
        }


        render(){
            const {match}=this.props;
            const{laden}=this.state;
            return(
                <div className="shop-seite">
            <Route exact path={`${match.path}`} render={(props)=> <CollectionsOverviewWithSpinner lädtgerade={laden} {...props}/> }/>
            <Route path={`${match.path}/:collectionId`} 
            render={(props)=><CollectionPageWithSpinner lädtgerade={laden} {...props}/>} />
            {/* component={CollectionsOverview} component={CollectionPage} wieder Oben in Route einfügen für fall der Fälle */}
        </div>
            );
        }
        
    }


const mapDispachToProps=dispatch=>({
    updateCollections:(collectionsMap)=>dispatch(updateCollections(collectionsMap))
})
   


    
export default connect(null,mapDispachToProps)(ShopPage);