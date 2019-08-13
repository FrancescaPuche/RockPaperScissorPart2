$(document).ready(function() { 

    //Clock display function 

    const config = { 
        apiKey: "AIzaSyDoEg6tWteXY0G0wfUSqavYsMxpgnrrvdo",
        authDomain: "train-schedule-homework1.firebaseio.com", 
        databaseURL: "https://train-schedule-homework1.firebaseio.com", 
        storageBucket: "train-schedule-homework1.appspot.com"
    }; 

    firebase.initializeApp(config); 

    const database = firebase.database(); 

    // Adding rows to train table
    $("#submit").on("click", function(event) { 
        event.preventDefault(); 

        const trainName = $("train-name").val().trim(); 
        const trainDestination = $("#train-destination").val().trim();
        const trainTime = moment($("#train-time").val().trim(), "HH:mm").format("X");
        const trainFrequency = $("#train-frequency").val().trim();

        let addedTrain = { 
            name: trainName, 
            destination: trainDestination, 
            time: trainTime, 
            frequency: trainFrequency
        }; 

        database.ref().push(addedTrain); 

        // testing 
        console.log(addedTrain.name);
        console.log(addedTrain.destination); 
        console.log(addedTrain.time); 
        console.log(addedTrain.frequency); 
    })
    
})