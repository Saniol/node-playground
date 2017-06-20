import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Home from './home/Home';
import homeReducer from './home/homeReducer';

export default class App {
    constructor(config) {
        const {
            containerId,
            serverPath,
        } = config;

        this.serverPath = serverPath;
        this.container = document.getElementById(containerId);
    }
    init() {
        const store = createStore(
            homeReducer,
            applyMiddleware(thunk),
        );

        ReactDOM.render((
            <Provider store={store}>
                <Home />
            </Provider>
        ), this.container);
    }
}
