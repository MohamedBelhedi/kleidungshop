import React from 'react'
import MenuPunkt from '../menu-punkt/menü-punkt.component'
import './directory.styles.scss'

class Directory extends React.Component{
    constructor(){
        super();
        this.state={
            sections:[
                {
                  title: 'Caps',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'Jacken',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                 linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'Frauen',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'Männer',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  id: 5,
                  size:'large',
                  linkUrl: 'shop/mens'
                }]

              
        }
    }
    render(){
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({title,imageUrl,id,size})=>(
                        <MenuPunkt key={id} title={title} imageUrl={imageUrl} size={size}/>
                    ))
                }
                </div>
        )
    }
}

export default Directory;