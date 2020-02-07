const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const createNotification = (notification => {
    return admin.firestore().collection('notifications').add(notification).then((doc) => {
        console.log('Notification Added', doc);
    });
});

exports.createNewProject = functions.firestore
    .document('projects/{projectId}')
    .onCreate(doc => {
        const project = doc.data();
        const notification = {
            content: 'Added a new Project',
            user: `${project.authorFirstName} ${project.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp() // gets a timestamp from the server for us when the notification is created
        };
     return createNotification(notification);
    });


exports.userJoined = functions.firestore.document('users/{userId}').onCreate(doc => {
    const user = doc.data();
    const notification = {
        content:'Joined the party 🎉',
        user: `${user.firstName} ${user.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    };
    return createNotification(notification);
});
/*exports.newUser = functions.auth.user().onCreate(user => {
    return admin.firestore().collection('users/{userId}').doc(user.uid).get().then(doc => {
        const newUser = doc.data();

    });
});*/
