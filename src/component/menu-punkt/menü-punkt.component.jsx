import React from 'react'
import './menü-punkt.styley.scss'

const MenuPunkt=({title,imageUrl,size})=>(
    <div className={`${size} menu-punkt`}>
        <div className="background-image" style={{
        backgroundImage:`url(${imageUrl})`
    }} />
    <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Kaufen</span>
    </div>
    </div>
);

export default MenuPunkt;