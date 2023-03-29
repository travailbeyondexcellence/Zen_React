import { createStore } from "redux";

const initialState = {
    isLoggedIn: false,
    appName: "Zen React"
}

function reducerFunction(state, action) {
    if(action.type === "CHANGE_APP_NAME") {
        return {...state, appName: action.payload}
    } else {
        return state;
    }
}

const store = createStore(reducerFunction, initialState);

export default store;