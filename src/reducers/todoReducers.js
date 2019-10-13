export const initialState = {
    values: Array.of("1","2","3")
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TODO":
            return {
                values: [...state.values, action.payload]
            };
        case "REMOVE_TODO": {
            let index = action.payload;
            return {
                values: Array.of(...state.values.slice(0, index), ...state.values.slice(index + 1))
            };
        }
        default: return state;
    }
};

export {reducer};