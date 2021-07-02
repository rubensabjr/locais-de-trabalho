import './Nav.css'
import React from 'react'
import {Link} from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <div>
                <i className="fa fa-cog"></i> Administração
            </div>
            <Link to="/">
                Administradores
            </Link>
            <Link to="/">
                Áreas
            </Link>
            <Link to="/work-places">
                Locais de Trabalho
            </Link>
            <Link to="/">
                Habilidades
            </Link>
            <Link to="/">
                Log
            </Link>
            <Link to="/">
                Responsáveis
            </Link>
        </nav>
    </aside>