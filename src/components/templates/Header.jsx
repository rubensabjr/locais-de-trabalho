import './Header.css'
import React from 'react'
import {Link} from 'react-router-dom'

export default props =>
    <header className="header">
        <h5>Controle de Locais de Trabalho</h5>
        <Link to="/">
            <h3><i className={`fa fa-home`}></i></h3>
        </Link>
    </header>