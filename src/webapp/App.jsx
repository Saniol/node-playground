import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createHistory } from 'history';
import createStore from '../shared/createStore';
import AppRouter from '../shared/AppRouter';
import { fromString } from '../shared/StateSerializer';

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
        /* eslint-disable no-underscore-dangle */
        const initState = fromString(window.__PRELOADED_STATE__);
        delete window.__PRELOADED_STATE__;
        /* eslint-enable no-underscore-dangle */

        const store = createStore(initState);
        const history = createHistory();

        this.store = store;

        ReactDOM.render((
            <Provider store={store}>
                <AppRouter history={history} />
            </Provider>
        ), this.container);
    }
}
