const firebaseConfig = {
    apiKey: "AIzaSyBg3NCDcGrREbB0Wn30-4pX4vcfokNOG3o",
    authDomain: "inaccessiblewebpage.firebaseapp.com",
    projectId: "inaccessiblewebpage",
    storageBucket: "inaccessiblewebpage.appspot.com",
    messagingSenderId: "705038684372",
    appId: "1:705038684372:web:5b68fbe95b7e2b7678eb41",
    measurementId: "G-64YZCWMB71"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

var collectionName = "inclusion-investigator-users";