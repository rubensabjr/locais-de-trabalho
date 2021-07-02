import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'

import Home from '../components/home/Home'
import Nav from '../components/templates/Nav'
import Footer from '../components/templates/Footer'

export default props =>
    <div className="app">
        <Home/>
        <Nav/>
        <Footer/>
    </div>