import './Header.css'
import wallpaper from '../../assets/images/wallpaper.png'
import React from 'react'

export default props =>
    <header className="header">
        <img src={wallpaper} alt="wallpaper" />
    </header>