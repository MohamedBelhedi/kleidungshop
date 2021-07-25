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
                  linkUrl: 'shop/caps'
                },
                {
                  title: 'Jacken',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                 linkUrl: 'shop/jacken'
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
                  linkUrl: 'shop/Frauen'
                },
                {
                  title: 'Männer',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  id: 5,
                  size:'large',
                  linkUrl: 'shop/männer'
                }]

              
        }
    }
    render(){
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({id,...otherSectionProps})=>(
                      // alles wird mit Es6 gekürzt, anstatt Title,size.. alles auszuschreiben durch otherSectionProps zieht er sie Automatisch raus
                        <MenuPunkt key={id} {...otherSectionProps}/>
                    ))
                }
                </div>
        )
    }
}

export default Directory;