import React from 'react'
import { withRouter } from 'react-router-dom';
import './menü-punkt.styley.scss'

const MenuPunkt=({title,imageUrl,size,history,linkUrl,match})=>(
    <div className={`${size} menu-punkt`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image" style={{
        backgroundImage:`url(${imageUrl})`
    }} />
    <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Kaufen</span>
    </div>
    </div>
);
// gibt eine Super Power Menüpunkt Component damit den leichten Eingang hat

export default withRouter(MenuPunkt);