export const setTitle = title => ({
    type: 'HOME_SET_TITLE',
    title,
});

export const setMsg = msg => ({
    type: 'HOME_SET_MSG',
    msg,
});

export const setLoaded = () => ({
    type: 'HOME_SET_LOADED',
});

export const reset = () => ({
    type: 'HOME_RESET',
});

export const loadData = () => dispatch => (
    fetch(`${App.serverPath}/sample`)
            .then(response => response.json())
            .then((jsonData) => {
                dispatch(setTitle(jsonData.title));
                dispatch(setMsg(jsonData.msg));
                dispatch(setLoaded());
            })
);
