import React from 'react'
import './preview-collection.styles.scss'
// import  {PreviewCollection} from '../preview-collection/preview-collection.component'
import CollectionItem from '../collection-item/collection-item.component';

const PreviewCollection=({title,items})=>(
    <div className="preview-collection">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.filter((item,idx)=>idx<4).map(item=>(
                    <CollectionItem key={item.id} item={item}/>
                ))

            }

        </div>
    </div>
)
export default PreviewCollection;