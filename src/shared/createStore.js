import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from '../webapp/appReducer';

export default initState => createStore(
    appReducer,
    initState,
    applyMiddleware(thunk),
);
