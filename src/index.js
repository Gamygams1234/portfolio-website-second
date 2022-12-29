import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './index.css';

import Header from './components/Header'
import Footer from './components/Footer';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

import Manage from './pages/portfolio/Manage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/manage' element={<Manage/>}/>
    </Routes>
    <Footer/>
    </Router>
   ) 
;
