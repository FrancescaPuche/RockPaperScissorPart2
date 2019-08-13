$(document).ready(function() { 

    //Clock display function 

    const config = { 
        apiKey: "AIzaSyDoEg6tWteXY0G0wfUSqavYsMxpgnrrvdo"; 
        authDomain: "train-schedule-homework1.firebaseio.com", 
        projectId: "train-schedule-homework1", 
        storageBucket: "train-schedule-homework1.appspot.com"
    }; 

    firebase.initializeApp(config); 

    const database = firebase.database(); 
})