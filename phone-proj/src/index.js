import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import {HashRouter} from 'react-router-dom'
import {ProductProvider} from './compoents/Context.js'


ReactDOM.render(
    <ProductProvider>
        <HashRouter>
            <App />
        </HashRouter>
    </ProductProvider>

, document.getElementById('root'));

