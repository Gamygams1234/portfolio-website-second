import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About';
import Aside from './components/Aside';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Header/>
    <Hero/>
    <About/>
    <Aside/>
    <Footer/>
    </>
   ) 
;
