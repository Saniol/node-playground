export const setTitle = title => ({
    type: 'HOME_SET_TITLE',
    title,
});

export const setMsg = msg => ({
    type: 'HOME_SET_MSG',
    msg,
});

export const loadData = () => (dispatch) => {
    fetch(`${App.serverPath}/sample`)
            .then(response => response.json())
            .then((jsonData) => {
                dispatch(setTitle(jsonData.title));
                dispatch(setMsg(jsonData.msg));
            });
};
