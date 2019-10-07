
export const sendUpdate = (value) => {
    return {
        type: "ADD_TODO",
        payload: value
    }
};

export const removeElement = (index) => {
    return {
        type: "REMOVE_TODO",
        payload: index
    };
};

export const todoActions = (dispatch) => ({
    sendUpdate: value => dispatch(sendUpdate(value)),
    removeElement: index => dispatch(removeElement(index))
});