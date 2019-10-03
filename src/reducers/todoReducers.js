const initialState = {
    values: ["1","2","3"]
};

const todo = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TODO":
            return {
                values: [...state.values, action.payload]
            }
        ;
        case "REMOVE": {
            let index = action.payload;
            return {
                values: [...state.values.slice(0, index), ...state.values.slice(index + 1)]
            }
        }
    }
};