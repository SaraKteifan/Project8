import signUp from "./signUp";
import login from "./login";
import profile from "./profile";

import {combineReducers} from 'redux';



const AllReducers=combineReducers({
    signUp: signUp,
    login: login,
    profile:profile,
});

export default AllReducers;