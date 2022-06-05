import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/header.js'
import Body from './components/body.js'
import Footer from './components/footer.js'
import store from './store/index.js'
import {Provider} from 'react-redux'
import './index.css'

ReactDOM.render(
    <Provider store={store}>
        <section className="panel panel-default" style={{width:'50%', margin: '50px auto'}}>
            <Header store={store}></Header>
            <Body store={store}></Body>
            <Footer store={store}></Footer>
        </section>
    </Provider>
, document.getElementById('root'));
