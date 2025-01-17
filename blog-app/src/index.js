import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root') || document.body);
root.render(
    <Router>
        <App />
    </ Router>
);

