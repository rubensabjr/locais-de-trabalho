import './App.css'
import React from 'react'
import Main from '../components/templates/Main'
import Nav from '../components/templates/Nav'
import Footer from '../components/templates/Footer'

export default props =>
    <div className="app">
        <Main/>
        <Nav/>
        <Footer/>
    </div>