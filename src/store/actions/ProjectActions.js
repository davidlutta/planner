export const createProject = (project) => {
    return (dispatch, getState, {getFirestore}) => {
        //async call to db after pausing dispatch
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project, // this spreads the properties eg title: ---- and content: ---
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'CREATE_PROJECT',
                project: project
            });
        }).catch((err) => {
            console.log(err);
            dispatch({
                type:'CREATE_PROJECT_ERROR',
                err
            });
        });
    };
};
