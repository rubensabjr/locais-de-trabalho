import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import Nav from '../components/templates/Nav'
import Footer from '../components/templates/Footer'
import Routes from './Routes'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Routes/>
            <Nav/>
            <Footer/>
        </div>
    </BrowserRouter>