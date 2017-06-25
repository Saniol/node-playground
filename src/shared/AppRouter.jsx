import React from 'react';
import PropTypes from 'prop-types';
import {
    Router,
    Route,
    Redirect,
} from 'react-router';
import Home from '../webapp/home/Home';
import AnotherPage from '../webapp/another/AnotherPage';

function AppRouter(props) {
    return (
        <Router history={props.history}>
            <Route path="/" component={Home} />
            <Route path="/another" component={AnotherPage} />
            <Redirect from="*" to="/" />
        </Router>
    );
}

AppRouter.propTypes = {
    history: PropTypes.shape({
        length: PropTypes.isRequired,
        location: PropTypes.isRequired,
        action: PropTypes.isRequired,
    }).isRequired,
};

export default AppRouter;
