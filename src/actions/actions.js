
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
