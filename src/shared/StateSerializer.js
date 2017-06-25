import Immutable from 'immutable';

export function toString(state) {
    return escape(JSON.stringify(state));
}

export function fromString(state) {
    const json = JSON.parse(unescape(state));

    return {
        home: Immutable.Map(json.home),
    };
}
