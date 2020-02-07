import AuthReducer from "./AuthReducer";
import ProjectReducer from "./ProjectReducer";
import {combineReducers} from 'redux';
import {firestoreReducer} from "redux-firestore";
import {firebaseReducer} from "react-redux-firebase";

const RootReducer = combineReducers({
    auth: AuthReducer,
    project: ProjectReducer,
    firestore: firestoreReducer, // will receive the data for us
    firebase: firebaseReducer // will sync our firebase auth state
});

export default RootReducer;
