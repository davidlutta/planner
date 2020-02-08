import {db, storageRef} from "../../config/FirebaseConfig";

export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: 'LOGIN_SUCCESS'});
        }).catch((err) => {
            dispatch({type: 'LOGIN_ERROR', err});
        });
    }
};

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            window.location.reload();
            dispatch({type: 'SIGNOUT_SUCCESS'});
        });
    }
};
export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((res) => {
            return storageRef.child('images/' + res.user.uid).put(newUser.imageUrl).then(() => {
                storageRef.child('images/' + res.user.uid).getDownloadURL().then((downloadUrl) => {
                    db.collection('users').doc(res.user.uid).set({
                        firstName: newUser.firstName,
                        lastName: newUser.lastName,
                        initials: newUser.firstName[0] + newUser.lastName[0],
                        imageUrl: downloadUrl
                    }).then(() => {
                        dispatch({type: 'SIGNUP_SUCCESS'});
                    }).catch((err) => {
                        dispatch({type: 'SIGNUP_ERROR', err})
                    });
                });
            });
        });
    };
};
