import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About';
// eslint-disable-next-line
// import PrimaryButton from './components/PrimaryButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Header/>
    <Hero/>
    <About/>
    </>
    
    // <h1>Hello</h1>
) 
;
