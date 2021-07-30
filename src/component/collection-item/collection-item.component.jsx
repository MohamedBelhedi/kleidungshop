import React from 'react'
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss'
const CollectionItem=({id,name,price,imageUrl})=>(
    <div className="collection-item">
        <div
        className="image"
        style={{
            backgroundImage:`url(${imageUrl})`
        }}
        
        />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>

            

        </div>
        <CustomButton>Im Warenkorb Hinzufügen</CustomButton>


    </div>
)



export default withRouter(CollectionItem);