import React from 'react'
import { createStructuredSelector } from "reselect";
import MenuPunkt from '../menu-punkt/menü-punkt.component';
import { connect } from 'react-redux';
import './directory.styles.scss'
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const Directory=({sections})=>(
    
   
            <div className="directory-menu">
                {
                   sections.map(({id,...otherSectionProps})=>(
                      // alles wird mit Es6 gekürzt, anstatt Title,size.. alles auszuschreiben durch otherSectionProps zieht er sie Automatisch raus
                        <MenuPunkt key={id} {...otherSectionProps}/>
                    ))}
                </div>
        );

        const mapStateToProps=createStructuredSelector({
          sections:selectDirectorySections
        })
              

export default connect(mapStateToProps)(Directory);