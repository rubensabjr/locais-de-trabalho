import './Nav.css'
import React from 'react'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <div>
                <i className="fa fa-cog"></i> Administração
            </div>
            <a href="#/">
                Administradores
            </a>
            <a href="#/">
                Áreas
            </a>
            <a href="#/">
                Locais de Trabalho
            </a>
            <a href="#/">
                Habilidades
            </a>
            <a href="#/">
                Log
            </a>
            <a href="#/">
                Responsáveis
            </a>
        </nav>
    </aside>