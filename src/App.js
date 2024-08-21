import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/portfolio" element={<Home />} />
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/work" element={<Portfolio />} />
            </Routes>
            <Footer />
        </Router>     
    );
}

export default App;
