import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {
    RouterContext,
    match,
} from 'react-router';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import createStore from '../../shared/createStore';
import AppRouter from '../../shared/AppRouter';
import { toString } from '../../shared/StateSerializer';

global.App = {
    serverPath: 'http://localhost:3000/api',
};

function getReduxPromise(renderProps, store) {
    const { query, params } = renderProps;
    const componentsToRender = renderProps.components;
    const leafComponent = componentsToRender[componentsToRender.length - 1];
    const leafClass = leafComponent.WrappedComponent;
    const promise = leafClass && leafClass.fetchData
                        ? leafClass.fetchData({ query, params, store })
                        : Promise.resolve();

    return promise;
}

export default (app) => {
    app.get('*', (req, res) => {
        const store = createStore();
        const history = createMemoryHistory();
        const routes = AppRouter({
            history,
        });

        match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
            if (error) {
                res.status(500).send(error.message);
                return;
            }
            if (redirectLocation) {
                res.redirect(301, redirectLocation.pathname + redirectLocation.search);
                return;
            }
            if (renderProps == null) {
                res.status(404).send('Not found');
                return;
            }

            getReduxPromise(renderProps, store).then(() => {
                const reduxState = toString(store.getState());
                const html = ReactDOMServer.renderToString(
                    <Provider store={store}>
                        { <RouterContext {...renderProps} /> }
                    </Provider>,
                );
                res.render('index', { html, reduxState });
            });
        });
    });
};
