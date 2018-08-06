let config = {
    apiKey: "AIzaSyDmI0IERvjSq0334ndUnRMb09SyKuE4mMI",
    authDomain: "taller-firebase-4e2b1.firebaseapp.com",
    databaseURL: "https://taller-firebase-4e2b1.firebaseio.com",
    projectId: "taller-firebase-4e2b1",
    storageBucket: "taller-firebase-4e2b1.appspot.com",
    messagingSenderId: "521580200060"
};

firebase.initializeApp(config);
let db = firebase.firestore();

let restaurantsRef = db.collection("restaurants");

restaurantsRef.where("name", "==", 'taquito feliz')
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            return (doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
});
