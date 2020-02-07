import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import RootReducer from "./store/reducers/RootReducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {reduxFirestore, getFirestore} from "redux-firestore";
import {reactReduxFirebase, getFirebase, authIsReady} from "react-redux-firebase";
import {firebase} from "./config/FirebaseConfig";
import firebaseConfig from "./config/FirebaseConfig";

const rrfProps = {
    config:firebaseConfig,
    userProfile:'users',
    useFirestoreForProfile: true,
};
firebase.firestore();
let store = createStore(RootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(firebase, firebaseConfig), //store enhancers to connect to our project
        reactReduxFirebase(firebase,rrfProps)
    ));
authIsReady(store).then(() => {
    ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
});
serviceWorker.unregister();
