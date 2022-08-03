import signUp from "./signUp";
import login from "./login";

import {combineReducers} from 'redux';



const AllReducers=combineReducers({
    signUp: signUp,
    login: login
});

export default AllReducers;