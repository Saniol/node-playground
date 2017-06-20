import Immutable from 'immutable';

const defaultState = Immutable.Map({
    title: 'Frontend init data',
    msg: 'Loading data from server',
});

export default (state = defaultState, action) => {
    const type = action ? action.type : null;

    switch (type) {
    case 'HOME_SET_TITLE':
        if (!action.title) {
            console.error('homeReducer: invalid action data!');
            return state;
        }
        return state.set('title', action.title);
    case 'HOME_SET_MSG':
        if (!action.msg) {
            console.error('homeReducer: invalid action data!');
            return state;
        }
        return state.set('msg', action.msg);
    default:
        return state;
    }
};
