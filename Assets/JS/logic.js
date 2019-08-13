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

    // Adding rows to train table
    $("#submit").on("click", function(event) { 
        event.preventDefault(); 

        const trainName = $("train-name").val().trim(); 
        const trainDestination = $("#train-destination").val().trim();
        const firstTrain = moment($("#train-time").val().trim(), "HH:mm").format("X");
        const trainFrequency = $("#train-frequency").val().trim();


    })
})