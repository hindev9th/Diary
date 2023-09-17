import { FETCH_AUTH } from "../actions/constants";

const init = {};
function authReducer(state = init, action) {
    switch (action.type) {
        case FETCH_AUTH:
            return action.payload;
        default:
            return state;
    }
}

export default authReducer;